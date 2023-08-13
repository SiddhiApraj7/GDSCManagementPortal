'use strict';
const axios = require('axios');

const { db } = require('../db');

const createHostProjectRequest = async (req, res) => {
    const { email } = req.body;
    const scriptUrl = `https://script.google.com/macros/s/AKfycbzZpwbsP--KmZWyFL3cLcs4PZ0FA10JZrSEPF4b149IGNFjnGHozoHF_hBbvY1RNTid/exec?email=${email}`;
  
    try {
      const response = await axios.get(scriptUrl);
      const jsonData = response.data;
  
      const modifiedData = {
        ...jsonData,
        isPending: true,
        isApproved: false,
      };
  
      // Reference the "requestData" document
      const requestDataDocRef = db.collection('RequestsAdmin').doc('requestData');
  
      // Set the modified fields within the "requestData" document
      await requestDataDocRef.set(modifiedData, { merge: true });
  
      console.log('Request data updated as "requestData"');
      res.json({ success: 'Request sent to Admin', modifiedData });
    } catch (error) {
      console.error('Error sending data:', error);
      res.status(400).send(error);
    }
  };
  
// const createJoinProjectRequest = async (email, req, res) => {
//     const scriptUrl = `https://script.google.com/macros/s/AKfycby85PCQ-RTXmDFFp9-LF9vEM3dcdbR3xboWWfTuoWEF1ht9hredrLCCpV28jU1XNCvGpg/exec?email=${email}`;
  
//     try {
//       const response = await axios.get(scriptUrl);
//       const jsonData = response.data;
//       const requestsCollection = db.collection('RequestsPM'); 
//       await requestsCollection.add(jsonData);
      
//       res.json({ success: 'Request sent to Project Manager', jsonData });
  
//       console.log('Request sent to Project Manager');
//     } catch (error) {
//       console.error('Error sending data:', error);
//       res.status(400).send(error);
//     }
// }
//id request collection
// const confrimProject = async (projectId, req, res) => {
//     const scriptUrl = `https://script.google.com/macros/s/AKfycbzZpwbsP--KmZWyFL3cLcs4PZ0FA10JZrSEPF4b149IGNFjnGHozoHF_hBbvY1RNTid/exec?email=${email}`;
  
//     try {
//       const response = await axios.get(scriptUrl);
//       const jsonData = response.data;
  
// // ongoing true
// //is apporved true
// // is pending false
//       const requestsCollection = db.collection('Projects'); 
//       await requestsCollection.add(jsonData);
//       res.json({ success: 'Project Approved', jsonData });
//       console.log('Data sent to Firestore successfully.');
//     } catch (error) {
//       console.error('Error sending data:', error);
//     }
//   };
// const confirmCollaorator = async (email, req, res) => {
//     const scriptUrl = `https://script.google.com/macros/s/AKfycby85PCQ-RTXmDFFp9-LF9vEM3dcdbR3xboWWfTuoWEF1ht9hredrLCCpV28jU1XNCvGpg/exec?email=${email}`;
  
//     try {
//       const response = await axios.get(scriptUrl);
//       const jsonData = response.data;
  
      
//       const requestsCollection = db.collection('Collaborators'); 
//       await requestsCollection.add(jsonData);
//       const projectsCollection = db.collection('Projects');
//       const projectDocRef = projectsCollection.doc(projectId);
    
//       await db.runTransaction(async (transaction) => {
//         const projectDoc = await transaction.get(projectDocRef);
//         if (!projectDoc.exists) {
//           throw new Error('Project not found');
//         }
  
//         const collaborators = projectDoc.data().collaborators || [];
//         collaborators.push(jsonData);
  
//         transaction.update(projectDocRef, { collaborators });
//       });
  
//       res.json({ success: 'Collaborator Approved', jsonData });
//       console.log('Collaborator data added to project successfully.');
//     } catch (error) {
//       console.error('Error adding collaborator data to project:', error);
//       res.status(500).json({ error: 'An error occurred' });
//     }
// }

module.exports = {
    
    createHostProjectRequest,
   
}