const db = require('../db/index');

const Expo = require('expo-server-sdk');

const expo = new Expo();

exports.notification = (req, res) => {
  console.log(req.body);
  db.child(`users/${req.body.userid}`)
    .once('value')
    .then((user) => {
      console.log(user.val());
    });
  // console.log(db);
  res.send('test');
};
