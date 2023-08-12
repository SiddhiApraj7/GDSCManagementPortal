'use strict';
const axios = require('axios');

const { db } = require('../db');

const getResponseHostProject = () => {
    
}
const getResponseJoinProject = () => {

}

const sendRequestHostProject = async (email) => {
    const scriptUrl = `https://script.google.com/macros/s/AKfycbzZpwbsP--KmZWyFL3cLcs4PZ0FA10JZrSEPF4b149IGNFjnGHozoHF_hBbvY1RNTid/exec?email=${email}`;
  
    try {
      const response = await axios.get(scriptUrl);
      const jsonData = response.data.latestEntry;
  

      const requestsCollection = db.collection('RequestsAdmin'); 
      await requestsCollection.add(jsonData);
  
      console.log('Data sent to Firestore successfully.');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
const sendRequestJoinProject = async (email) => {
    const scriptUrl = `https://script.google.com/macros/s/AKfycby85PCQ-RTXmDFFp9-LF9vEM3dcdbR3xboWWfTuoWEF1ht9hredrLCCpV28jU1XNCvGpg/exec?email=${email}`;
  
    try {
      const response = await axios.get(scriptUrl);
      const jsonData = response.data.latestEntry;
  
      
      const requestsCollection = db.collection('RequestsPM'); 
      await requestsCollection.add(jsonData);
  
      console.log('Data sent to Firestore successfully.');
    } catch (error) {
      console.error('Error sending data:', error);
    }
}

module.exports = {
    getResponseHostProject,
    getResponseJoinProject,
    sendRequestHostProject,
    sendRequestJoinProject
}