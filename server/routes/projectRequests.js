const express = require('express');
const {createHostProjectRequest,
    } = require('../controllers/projectController.js');
const router = express.Router();



router.post('/create-project-request', createHostProjectRequest);
// router.post('/approve-project-request', sendOtpMail);
// router.post('/verifyotp', verifyOtpMail);


module.exports = {
    routes: router
}