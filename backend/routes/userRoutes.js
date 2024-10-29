const express = require('express');
const {
  getAllUsers,
  performUserAction,
  getUserDetails,
  deleteUser,
  createUser,
} = require('../controllers/userControllers');

const router = express.Router();

router
  .route('/')
  .get(getAllUsers)
  .put(performUserAction)
  .get(getUserDetails)
  .delete(deleteUser)
  .post(createUser);

module.exports = router;
