const express = require('express');
const {createHostProjectRequest,confirmProject, declineProject} = require('../controllers/projectController.js');
const router = express.Router();



router.post('/create-project-request', createHostProjectRequest);
router.post('/approve-project-request', confirmProject);
router.post('/decline-project-request', declineProject);


module.exports = {
    routes: router
}