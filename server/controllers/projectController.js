'use strict';
const axios = require('axios');
const admin = require("firebase-admin");
const { FieldValue } = admin.firestore;

const { db } = require('../db');
 
const createHostProjectRequest = async (req, res) => {
    const { email } = req.body;
    const scriptUrl = `https://script.google.com/macros/s/AKfycbw5UfLcjEOcC-YRvEjDKOT7Qe7VkDkR797XkgOyQ0dz4Jzp7QWooDonvawp_aVLxDHK/exec?email=${email}`;
    
    try {
      const response = await axios.get(scriptUrl);
      const { latestEntry } = response.data;
   (latestEntry);
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
  
        
      const requestsAdminCollection = db.collection('RequestsAdmin');
  
       
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
  
       ('Request data with status added to Firestore');
      res.json({ success: 'Request sent to Admin' });
    } catch (error) {
      console.error('Error sending data:', error);
      res.status(400).send(error);
    }
  };
 
const confirmProject = async (req, res) => {
    const { requestID } = req.body;
    try {
       
      const requestsAdminCollection = db.collection('RequestsAdmin');
      
       
      const requestDocRef = requestsAdminCollection.doc(requestID);
      const requestDoc = await requestDocRef.get();
  
      if (!requestDoc.exists) {
        return res.status(404).json({ error: 'Request not found' });
      }
  
      
      await requestDocRef.update({
        isApproved: true,
        isPending: false
      });
  
      
      const requestData = requestDoc.data(); 
      requestData.isApproved = true;
      requestData.isPending = false;
       ('requestData:', requestData); 
      
      const projectsCollection = db.collection('Projects');
  
      
      const newProjectDocRef = await projectsCollection.add({
        ...requestData,
        collaborators : []
        
      });
      

       ("helooooooo",newProjectDocRef)

      


      const userEmail = requestData.email;
       (userEmail);
      const clientCollection = db.collection('Client');
      
      const userQuery = await clientCollection.where('email', '==', userEmail).get();
       (userQuery);


       
       if (!userQuery.empty) {
        const userDocRef = userQuery.docs[0].ref;

        
        await userDocRef.update({
            projectHosted: FieldValue.arrayUnion(newProjectDocRef.id),
            isProjectManager: true
        });
    }
    
    
  
       ('Project confirmed and added to Projects collection');
      res.json({ success: 'Project confirmed' });
    } catch (error) {
      console.error('Error confirming project:', error);
      res.status(400).send(error);
    }
};


const declineProject = async (req, res) => {
    const { requestID } = req.body;
    try {
     
      const requestsAdminCollection = db.collection('RequestsAdmin');
      
     
      const requestDocRef = requestsAdminCollection.doc(requestID);
      const requestDoc = await requestDocRef.get();
  
      if (!requestDoc.exists) {
        return res.status(404).json({ error: 'Request not found' });
      }
  
      
      await requestDocRef.update({
        isApproved: false,
        isPending: false
      });
  
      
       ('Project request declined');
      res.json({ success: 'Project request decliined by admin' });
    } catch (error) {
      console.error('Error declining project:', error);
      res.status(400).send(error);
    }
};




module.exports = {
    
    createHostProjectRequest,
    confirmProject,
    declineProject
   
}