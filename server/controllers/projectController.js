'use strict';
const axios = require('axios');

const { db } = require('../db');
// make sure the login with institute id
const createHostProjectRequest = async (req, res) => {
    const { email } = req.body;
    const scriptUrl = `https://script.google.com/macros/s/AKfycbzZpwbsP--KmZWyFL3cLcs4PZ0FA10JZrSEPF4b149IGNFjnGHozoHF_hBbvY1RNTid/exec?email=${email}`;
    
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
        'Project Name': projectName,
        'Project Domain': projectDomain,
        'Project Overview': projectOverview,
        'Problem Statement': problemStatement,
        'Tech Stack': techStack,
        'Prerequisites': prerequisites,
        'Start Date of Project': startDateOfProject,
        'Duration of Project': durationOfProject,
        'Github Link of Project': githubLinkOfProject,
        'Slack Link of Project': slackLinkOfProject,
        'Timestamp': timestamp
      } = latestEntry;
  
      // Reference the "RequestsAdmin" collection
      const requestsAdminCollection = db.collection('RequestsAdmin');
  
      // Create a new document in the "RequestsAdmin" collection
      await requestsAdminCollection.add({
        fullName,
        emailInstituteId,
        contactNumber,
        linkedinProfileLink,
        githubProfileLink,
        driveLinkForResume,
        projectName,
        projectDomain,
        projectOverview,
        problemStatement,
        techStack,
        prerequisites,
        startDateOfProject,
        durationOfProject,
        githubLinkOfProject,
        slackLinkOfProject,
        timestamp,
        isPending: true,
        isApproved: false
      });
  
      console.log('Request data with status added to Firestore');
      res.json({ success: 'Request sent to Admin' });
    } catch (error) {
      console.error('Error sending data:', error);
      res.status(400).send(error);
    }
  };
//id request collection
const confirmProject = async (req, res) => {
    const { requestID } = req.body;
    try {
      // Reference the "RequestsAdmin" collection
      const requestsAdminCollection = db.collection('RequestsAdmin');
      
      // Get the specific request document by requestID
      const requestDocRef = requestsAdminCollection.doc(requestID);
      const requestDoc = await requestDocRef.get();
  
      if (!requestDoc.exists) {
        return res.status(404).json({ error: 'Request not found' });
      }
  
      // Update the request document's status fields
      await requestDocRef.update({
        isApproved: true,
        isPending: false
      });
  
      // Get the requestData from the request document
      const requestData = requestDoc.data(); // Get the entire document data
      requestData.isApproved = true;
      requestData.isPending = false;
      console.log('requestData:', requestData); // Log the entire document data
      // Reference the "Projects" collection
      const projectsCollection = db.collection('Projects');
  
      // Create a new document in the "Projects" collection
      const newProjectDocRef = await projectsCollection.add({
        ...requestData,
        collaborators : []
        // Additional project-related fields if needed
      });



      //******adding the link to user with this project in the projectHosted field and updating the role of user ************


      const userEmail = requestData.emailInstituteId;
      const clientCollection = db.collection('Client');
      // Find the user document based on the fetched email
      const userQuery = await clientCollection.where('email', '==', userEmail).get();


       // Update the user's "projectHosted" field with the new project document reference
       if (!userQuery.empty) {
        const userDocRef = userQuery.docs[0].ref;
        await userDocRef.update({
          projectHosted: admin.firestore.FieldValue.arrayUnion(newProjectDocRef),
          isProjectManager: true
        });
    }
    // project manager role update 
  
      console.log('Project confirmed and added to Projects collection');
      res.json({ success: 'Project confirmed' });
    } catch (error) {
      console.error('Error confirming project:', error);
      res.status(400).send(error);
    }
};


const declineProject = async (req, res) => {
    const { requestID } = req.body;
    try {
      // Reference the "RequestsAdmin" collection
      const requestsAdminCollection = db.collection('RequestsAdmin');
      
      // Get the specific request document by requestID
      const requestDocRef = requestsAdminCollection.doc(requestID);
      const requestDoc = await requestDocRef.get();
  
      if (!requestDoc.exists) {
        return res.status(404).json({ error: 'Request not found' });
      }
  
      // Update the request document's status fields
      await requestDocRef.update({
        isApproved: false,
        isPending: false
      });
  
      
      console.log('Project request declined');
      res.json({ success: 'Project request decliined by admin' });
    } catch (error) {
      console.error('Error declining project:', error);
      res.status(400).send(error);
    }
};

// ...


module.exports = {
    
    createHostProjectRequest,
    confirmProject,
    declineProject
   
}