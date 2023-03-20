const express = require('express');
const { apiWorking, createUserController, loginUserController, getUserController } = require('../controller/userController');
const userAuth = require('../middleware/userAuth');
const router = express.Router();

router.post('/u/createUser',createUserController)
router.post('/u/login',loginUserController)
router.get('/u/getUser',userAuth,getUserController)
router.get('/',apiWorking)

module.exports = router;