'use strict';
const axios = require('axios');

const { db } = require('../db');

const createJoinProjectRequest = async (req, res) => {
    const { email, projectID } = req.body;
    const scriptUrl = `https://script.google.com/macros/s/AKfycbyiVVqSYrlaAiPULTYxnZxqhT-P4qhMsBNTM4ywEM4osfYKj4a0VSuwN3FtVd6TA_H69w/exec?email=${email}`;
    
    try {
      const response = await axios.get(scriptUrl);
      const { latestEntry } = response.data;
      console.log(latestEntry);
      const {
        'Full Name': fullName,
        'Email(institute id)': emailInstituteId,
        'Contact Number': contactNumber,
        'LinkedIn Profile Link': linkedinProfileLink,
        'Github Profile Link': githubProfileLink,
        'Drive Link for Resume': driveLinkForResume,
        'Number of hours to dedicate': hoursCanDedicate,
        'Reason to join project': ReasonToJoin,
        'Timestamp': timestamp
      } = latestEntry;
  
      // Reference the "RequestsAdmin" collection
      const requestsPMCollection = db.collection('RequestsProjectManager');
  
      // Create a new document in the "RequestsAdmin" collection
      await requestsPMCollection.add({
        projectID,
        fullName,
        emailInstituteId,
        contactNumber,
        linkedinProfileLink,
        githubProfileLink,
        driveLinkForResume,
        hoursCanDedicate,
        ReasonToJoin,
        timestamp,
        isPending: true,
        isApproved: false
      });
  
      console.log('Request data with status added to Firestore');
      res.json({ success: 'Request sent to Project Manager' });
    } catch (error) {
      console.error('Error sending data:', error);
      res.status(400).send(error);
    }
  };

  const confirmCollaborator = async (req, res) => {
    const { requestID } = req.body;
    try {
      // Reference the "RequestsAdmin" collection
      const requestsPMCollection = db.collection('RequestsProjectManager');
      
      // Get the specific request document by requestID
      const requestDocRef = requestsPMCollection.doc(requestID);
      const requestDoc = await requestDocRef.get();
  
      if (!requestDoc.exists) {
        return res.status(404).json({ error: 'Request not found' });
      }
  
      // Update the request document's status fields
      await requestDocRef.update({
        isApproved: true,
        isPending: false
      });
      
      //*******************update the role of user,add this projectid to the user's project collaborated field****************
      //******************add this collaborator to the collaborators array of the projectID */
      console.log('Collaborator confirmed');
      res.json({ success: 'Collaborator confirmed' });
    } catch (error) {
      console.error('Error confirming collaborator:', error);
      res.status(400).send(error);
    }
};
const declineCollaborator = async (req, res) => {
  const { requestID } = req.body;
  try {
    // Reference the "RequestsAdmin" collection
    const requestsPMCollection = db.collection('RequestsProjectManager');
    
    // Get the specific request document by requestID
    const requestDocRef = requestsPMCollection.doc(requestID);
    const requestDoc = await requestDocRef.get();

    if (!requestDoc.exists) {
      return res.status(404).json({ error: 'Request not found' });
    }

    // Update the request document's status fields
    await requestDocRef.update({
      isApproved: false,
      isPending: false
    });
    
    console.log('Collaborator request declined');
    res.json({ success: 'Collaborator request declined' });
  } catch (error) {
    console.error('Error declining collaborator:', error);
    res.status(400).send(error);
  }
};

  module.exports = {
    
    createJoinProjectRequest,
    confirmCollaborator,
    declineCollaborator
   
}