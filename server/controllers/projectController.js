'use strict';
const axios = require('axios');
const admin = require("firebase-admin");
const { FieldValue } = admin.firestore;

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
        'Email': email,
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
        'Difficulty level of Project' : difficultyLevel,
        'Subtask 1 - Description' : subtask1,
        'Subtask 2 - Description' : subtask2,
        'Subtask 3 - Description' : subtask3,
        'Subtask 1 - tentative deadline' : subtask1Deadline,
        'Subtask 2 - tentative deadline' : subtask2Deadline,
        'Subtask 3 - tentative deadline' : subtask3Deadline,

        'Timestamp': timestamp
      } = latestEntry;
  
      // Reference the "RequestsAdmin" collection
      const requestsAdminCollection = db.collection('RequestsAdmin');
  
      // Create a new document in the "RequestsAdmin" collection
      await requestsAdminCollection.add({
        fullName,
        email,
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
        difficultyLevel,
        durationOfProject,
        githubLinkOfProject,
        slackLinkOfProject,
        timestamp,
        isPending: true,
        isApproved: false,
        subtask1,
        subtask1Deadline,
        subtask2,
        subtask2Deadline,
        subtask3,
        subtask3Deadline
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
      // console.log("id====",newProjectDocRef.id);

      console.log("helooooooo",newProjectDocRef)

      //******adding the link to user with this project in the projectHosted field and updating the role of user ************


      const userEmail = requestData.email;
      console.log(userEmail);
      const clientCollection = db.collection('Client');
      // Find the user document based on the fetched email
      const userQuery = await clientCollection.where('email', '==', userEmail).get();
      console.log(userQuery);


       // Update the user's "projectHosted" field with the new project document reference
       if (!userQuery.empty) {
        const userDocRef = userQuery.docs[0].ref;

        // Push the projectID of the newly added project to the user's "projectHosted" array
        await userDocRef.update({
            projectHosted: FieldValue.arrayUnion(newProjectDocRef.id), // Push projectID
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