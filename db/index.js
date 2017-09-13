const firebase = require('firebase');
const config = require('../config/config.js');

const firebaseConfig = {
  apiKey: process.env.API_KEY || config.firebase.apiKey,
  authDomain: process.env.authDomain || config.firebase.authDomain,
  databaseURL: process.env.databaseURL || config.firebase.databaseURL,
  storageBucket: process.env.storageBucket || config.firebase.storageBucket,
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database().ref();


module.exports = database;
