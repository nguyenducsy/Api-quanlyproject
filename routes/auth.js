const express = require('express');

const userController = require('../controllers/auth');
const { authenticate } = require('../middleware/auth');
const { checkInput } = require('../middleware/user.input');

const router = express.Router();
// POST /blog/post
// router.post('/register', userController.createUser);
router.post('/register', checkInput, userController.createUser);
router.post('/login', userController.login);
router.get('/admin', userController.testAuth);

module.exports = router;