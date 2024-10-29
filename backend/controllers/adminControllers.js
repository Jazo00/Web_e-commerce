const Admin = require('../models/Admin');

const getAllAdmins = async (req, res) => {
  const admins = await Admin.find().lean();

  if (!admins?.length) {
    return res.status(400).json({ message: 'No admins found' });
  }

  res.status(200).json(admins);
};

const createAdmin = async (req, res) => {
  const { userId, userManagement, reports, tradeMonitoring } = req.body;

  if (![userId, userManagement, reports, tradeMonitoring].every(Boolean)) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const adminObject = {
    userId,
    userManagement,
    reports,
    tradeMonitoring,
  };

  await Admin.create(adminObject);

  res.status(201).json({ message: `New admin created` });
};

const updateAdmin = async (req, res) => {
  const { id, userId, userManagement, reports, tradeMonitoring } = req.body;

  if (![id, userId, userManagement, reports, tradeMonitoring].every(Boolean)) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const foundAdmin = await Admin.findById(id).exec();

  if (!foundAdmin) {
    return res.status(400).json({ message: 'Admin not found' });
  }

  foundAdmin.userId = userId;
  foundAdmin.userManagement = userManagement;
  foundAdmin.reports = reports;
  foundAdmin.tradeMonitoring = tradeMonitoring;

  res.status(201).json({ message: `Admin updated` });
};

const deleteAdmin = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'Admin ID is required' });
  }

  const foundAdmin = await Admin.findById(id).exec();

  if (!foundAdmin) {
    return res.status(400).json({ message: 'Admin not found' });
  }

  await foundAdmin.deleteOne();

  res.status(200).json({ message: 'Admin deleted' });
};

module.exports = { getAllAdmins, createAdmin, updateAdmin, deleteAdmin };
