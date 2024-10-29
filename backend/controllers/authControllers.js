const User = require('../models/User');
const bcrypt = require('bcrypt');

// @desc Login
// @route POST /auth
// @access Public
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const foundUser = await User.findOne({ email }).exec();

  if (!foundUser) {
    return res.status(400).json({ message: 'Unauthorized' });
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) return res.status(400).json({ message: 'Unauthorized' });

  res.status(200).json({ message: 'Login successfully' });
};

module.exports = {
  login,
};
