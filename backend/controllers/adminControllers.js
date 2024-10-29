const Admin = require('../models/Admin');

const getAllAdmins = async (req, res) => {
  const admins = await Admin.find().lean();

  if (!admins?.length) {
    return res.status(400).json({ message: 'No admins found' });
  }

  res.status(200).json(admins);
};

const createAdmin = async (req, res) => {};

const updateAdmin = async (req, res) => {};

const deleteAdmin = async (req, res) => {};

module.exports = { getAllAdmins, createAdmin, updateAdmin, deleteAdmin };
