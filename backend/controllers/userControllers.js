const User = require('../models/User');
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

// @desc Get all users with selected fields (username, email, account type, status)
// @route GET /admin/users
// @access Private (Admin only)
const getAllUsers = async (req, res) => {
  const users = await User.find({
    accountType: { $in: ['seller', 'buyer'] },
  }).lean();

  if (!users?.length) {
    return res.status(400).json({ message: 'No users found' });
  }

  res.status(200).json(users);
};

const getAllAdmins = async (req, res) => {
  const admins = await User.find({ accountType: 'admin' }).lean();

  if (!admins?.length) {
    return res.status(400).json({ message: 'No admins found' });
  }

  res.status(200).json(admins);
};

// @desc Get user details and admin's action history on that user
// @route GET /admin/users/:userId
// @access Private (Admin only)
const getUserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id)
    .select('username email accountType status')
    .lean();
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // const adminActions = await Admin.findOne({
  //   'userManagement.userId': req.params.userId,
  // })
  //   .select('userManagement')
  //   .populate({
  //     path: 'userManagement.userId',
  //     select: 'username email accountType status',
  //   })
  //   .lean();

  // const actionHistory = adminActions?.userManagement?.filter(
  //   (action) => action.userId.toString() === req.params.userId
  // );

  res.json(user);
};

const deleteUser = async (req, res) => {
  const targetUserId = req.params.userId;
  const adminUserId = req.admin.userId; // Assuming admin user ID is available from middleware

  // Find the user by ID
  const user = await User.findById(targetUserId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Update the user's status to "Deleted" instead of removing it
  user.status = 'Deleted';
  await user.save();

  // Log the delete action in the admin's user management history
  const admin = await Admin.findOne({ userId: adminUserId });
  if (!admin) {
    return res.status(404).json({ message: 'Admin not found' });
  }

  admin.userManagement.push({
    action: 'deleted',
    userId: targetUserId,
    notes: 'User marked as deleted, preserved in history',
  });

  await admin.save();

  res.json({ message: `User ${user.username} marked as deleted` });
};

const createUser = async (req, res) => {
  const { username, password, email, accountType, status } = req.body;

  if (![username, password, email, accountType, status].every(Boolean)) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const hashedPwd = await bcrypt.hash(password, 10);

  const userObject = {
    username,
    password: hashedPwd,
    email,
    accountType,
    status,
  };

  await User.create(userObject);

  res.status(201).json({ message: `New user created` });
};

const updateUser = async (req, res) => {
  const { id, username, email } = req.body;

  console.log(req.body);

  if (![id, username, email].every(Boolean)) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const foundUser = await User.findById(id).exec();

  if (!foundUser) {
    return res.status(400).json({ message: 'User not found' });
  }

  foundUser.username = username;
  foundUser.email = email;

  await foundUser.save();

  res.status(200).json({ message: 'User updated' });
};

module.exports = {
  getAllUsers,
  getAllAdmins,
  getUserDetails,
  deleteUser,
  createUser,
  updateUser,
};
