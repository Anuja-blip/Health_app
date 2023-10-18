const express = require("express")
const {
    loginController, 
    registerController,
    authController,
    adharController} = require('../controllers/userCtrl');

    const authMiddleware = require("../middleware/authMiddleware");
    const { otpController } = require("../controllers/otpCtrl");
    

//router object
const router = express.Router();
    


router.post('/register',registerController);
router.post('/login',loginController);
router.post("/getUserData", authMiddleware, authController);
//router.post('/adhar',adharController);
router.post('/sendOtp',authMiddleware,otpController);

module.exports = router;