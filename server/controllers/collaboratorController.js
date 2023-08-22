'use strict';
const axios = require('axios');
const admin = require("firebase-admin");
const { FieldValue } = admin.firestore;

const { db } = require('../db');

const createJoinProjectRequest = async (req, res) => {
    const { email, projectID } = req.body;
    const scriptUrl = `https://script.google.com/macros/s/AKfycbyZHFpLojRhTgBrr9_xFv6kbhUF4j9OfDWeo3a26ut5pe1RlvYf39glHBAfU6_GRjfZ1Q/exec?email=${email}`;
    
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
        'Number of hours to dedicate': hoursCanDedicate,
        'Reason to join project': ReasonToJoin,
        'Timestamp': timestamp
      } = latestEntry;
  
       
      const requestsPMCollection = db.collection('RequestsProjectManager');
     const requestsProjectscollection = db.collection("Projects");
      const projectDocRef = requestsProjectscollection.doc(projectID);
      const projectDoc = await projectDocRef.get();
      if (!projectDoc.exists) {
          return res.status(404).json({ error: 'Project not found' });
      }
      const projectData = projectDoc.data();
      const projectManagerEmail = projectData?.email;
   (projectData);
      
      await requestsPMCollection.add({
        projectID,
        projectManagerEmail,
        fullName,
        email,
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
  
       ('Request data with status added to Firestore');
      res.json({ success: 'Request sent to Project Manager' });
    } catch (error) {
      console.error('Error sending data:', error);
      res.status(400).send(error);
    }
  };

  const confirmCollaborator = async (req, res) => {
    const { requestID } = req.body;
    try {
         
        const requestsPMCollection = db.collection('RequestsProjectManager');

        
        const requestDocRef = requestsPMCollection.doc(requestID);
        const requestDoc = await requestDocRef.get();

        if (!requestDoc.exists) {
            return res.status(404).json({ error: 'Request not found' });
        }

        
        await requestDocRef.update({
            isApproved: true,
            isPending: false
        });

        const requestData = requestDoc.data();
        const projectID = requestData.projectID;

        
        const projectsCollection = db.collection('Projects');
        const projectDocRef = projectsCollection.doc(projectID);

        
        const projectDoc = await projectDocRef.get();

        if (!projectDoc.exists) {
            return res.status(404).json({ error: 'Project not found' });
        }

         
        const clientCollection = db.collection('Client');

        let userDocRef;  

         
        const userQuery = await clientCollection.where('email', '==', requestData.email).get();

        if (!userQuery.empty) {
            userDocRef = userQuery.docs[0].ref;  
            await userDocRef.update({
                isCollaborator: true,
                projectCollaborated: FieldValue.arrayUnion(projectDocRef.id)
            });
        }

         
        await projectDocRef.update({
            collaborators: FieldValue.arrayUnion(userDocRef.id)
        });

         ('Collaborator confirmed');
        res.json({ success: 'Collaborator confirmed' });
    } catch (error) {
        console.error('Error confirming collaborator:', error);
        res.status(400).send(error);
    }
};

const declineCollaborator = async (req, res) => {
  const { requestID } = req.body;
  try {
     
    const requestsPMCollection = db.collection('RequestsProjectManager');
    
     
    const requestDocRef = requestsPMCollection.doc(requestID);
    const requestDoc = await requestDocRef.get();

    if (!requestDoc.exists) {
      return res.status(404).json({ error: 'Request not found' });
    }

    
    await requestDocRef.update({
      isApproved: false,
      isPending: false
    });
    
     ('Collaborator request declined');
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