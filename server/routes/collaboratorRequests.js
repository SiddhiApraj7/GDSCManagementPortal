const express = require('express');
const { createJoinProjectRequest, confirmCollaborator, declineCollaborator } = require('../controllers/collaboratorController');

const router = express.Router();



router.post('/create-collaborator-request', createJoinProjectRequest);
router.post('/approve-collaborator-request', confirmCollaborator);
router.post('/decline-collaborator-request', declineCollaborator);



module.exports = {
    routes: router
}