const firebase = require ('firebase');
const config = require('../config/config.js');

const firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  storageBucket: config.firebase.storageBucket,
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database().ref();



module.exports = database;
