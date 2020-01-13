/**
 * Zadatak Frontend - API
 * https://github.com/umuthan/zadatak-frontend
 *
 * Author: Umuthan Uyan
 *
 */

const express = require('express');
const creds = require('./config');

const app = express();
const proxy = require('http-proxy-middleware');
const cors = require('cors');
const port = process.env.PORT || creds.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a POST route
app.post('/API/contact', ( req, res ) => {

    let response = '';
    let responseClassName = '';

    let email = req.body.email;
    let emailCheck = false;

    // Email field check
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailCheck = true;
    } else {
      response = 'Must have a valid email address\n';
      responseClassName = 'alert';
    }

    let message = req.body.message;
    let messageCheck = false;

    // Message check
    if(message.length > 30) {
      messageCheck = true;
    } else {
      response += 'The message must be longer than 30 characters\n';
      responseClassName = 'alert';
    }

    if( messageCheck && emailCheck === true) {
      response = 'Your message has been sent!';
      responseClassName = 'success';
    }

    // Set Response Status Code
    if (responseClassName === 'success') res.status(200);
    else res.status(422);

    // Set Repsonse Message
    res.json ({
      response: response,
      responseClassName: responseClassName
    });

});
