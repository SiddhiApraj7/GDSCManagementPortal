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
      const projectDocRef = db.collection('Projects').doc(projectID);
      const projectDoc = await projectDocRef.get();
      if (!projectDoc.exists) {
          return res.status(404).json({ error: 'Project not found' });
      }
      const projectData = projectDoc.data();
      const projectManagerEmail = projectData.email;
  
      // Create a new document in the "RequestsAdmin" collection
      await requestsPMCollection.add({
        projectID,
        projectManagerEmail,
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

      const requestData = requestDoc.data();
        const projectID = requestData.projectID;

        // Reference the "Projects" collection
        const projectsCollection = db.collection('Projects');
        const projectDocRef = projectsCollection.doc(projectID);

        // Get the specific project document by projectID
        const projectDoc = await projectDocRef.get();

        if (!projectDoc.exists) {
            return res.status(404).json({ error: 'Project not found' });
        }

        // Reference the "Client" collection
        const clientCollection = db.collection('Client');

        // Update user's role and add project to their projectCollaborated array
        const userQuery = await clientCollection.where('email', '==', requestData.emailInstituteId).get();

        if (!userQuery.empty) {
            const userDocRef = userQuery.docs[0].ref;
            await userDocRef.update({
              isCollaborator: true, // Update user role
              projectCollaborated: admin.firestore.FieldValue.arrayUnion(projectDocRef) // Add project to user's projectCollaborated array
            });
        }

        // Add user to the collaborators array of the corresponding project
        await projectDocRef.update({
          collaborators: admin.firestore.FieldValue.arrayUnion(userDocRef) // Add user to project's collaborators array
        });
      
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