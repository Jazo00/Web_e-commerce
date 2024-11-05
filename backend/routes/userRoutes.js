const express = require('express');
const {
  getAllUsers,
  getUserDetails,
  deleteUser,
  createUser,
  getAllAdmins,
  updateUser,
} = require('../controllers/userControllers');

const router = express.Router();

router
  .route('/')
  .get(getAllUsers)
  .patch(updateUser)
  .delete(deleteUser)
  .post(createUser);

router.route('/admins').get(getAllAdmins);

router.route('/:id').get(getUserDetails);

module.exports = router;
