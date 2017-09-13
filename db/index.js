const firebase = require('firebase');
// const config = require('../config/config.js');

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database().ref();


module.exports = database;
