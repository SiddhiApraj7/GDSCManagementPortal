const express = require('express');
const {createHostProjectRequest,confirmProject, declineProject} = require('../controllers/projectController.js');
const router = express.Router();



router.post('/create-project-request', createHostProjectRequest);
router.post('/approve-project-request', confirmProject);
router.post('/decline-project-request', declineProject);
// router.post('/approve-project-request', sendOtpMail);
// router.post('/verifyotp', verifyOtpMail);


module.exports = {
    routes: router
}