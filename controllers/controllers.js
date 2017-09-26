const db = require('../db/index');

const Expo = require('expo-server-sdk');

const expo = new Expo();
const axios = require('axios');

exports.notification = (req, res) => {
  db.child(`users/${req.body.userid}`)
    .once('value')
    .then((data) => {
      const user = data.val();
      // Create a new Expo SDK client


      // Create the messages that you want to send to clents
      const messages = [];


      // Construct a message (see https://docs.expo.io/versions/latest/guides/push-notifications.html)
      // axios.post('https://exp.host/--/api/v2/push/send', {
      //   to: user.token,
      //   sound: 'default',
      //   body: req.body.message,
      //   data: { withSome: 'data' },
      // }).then((res) => {
      //   if (res) console.log('status', res);
      //   // console.log(res);
      // });


      messages.push({
        to: user.token,
        sound: 'default',
        body: req.body.message,
        data: { message: req.body.message },
      });
      const chunks = expo.chunkPushNotifications(messages);
      // console.log('chunk', chunk);
      for (const chunk of chunks) {
        try {
          expo.sendPushNotificationsAsync(chunk);
          console.log('chunk', chunk);
        } catch (error) {
          console.error(error);
        }
      }
    });

  res.send('test');
};
