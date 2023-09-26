const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/users', UserController.createUser);

router.get('/users', UserController.getAllUsers);

router.delete('/users/:id', UserController.deleteUser);

router.put('/users/:id', UserController.updateUser);

module.exports = router;