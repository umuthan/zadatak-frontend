/**
 * Zadatak Frontend - Contact Page
 * https://github.com/umuthan/zadatak-frontend
 *
 * Author: Umuthan Uyan
 *
 */

import React, { Component } from 'react';

class Contact extends Component {

  constructor(props) {

    super(props);

    this.state = {
      responseClassName: '',
      response: ''
    };

  }

  componentDidMount() {

    document.title = 'Contact Us';

  }

  updateMessage = (response, responseClassName) => {

    this.setState({
      response: response,
      responseClassName: responseClassName
    });

  }

  handleFormSubmit = (event) => {

    const creds = require('../config');

    let email = event.target.email.value;
    let message = event.target.message.value;

    const requestURL = creds.REQUESTURL;

    fetch(requestURL, {
        method: 'post',
        body: JSON.stringify({
          "email": email,
          "message": message
        }),
        headers: {"Content-Type": "application/json"}
    }).then(response => response.json())
      .then(resData => {

        this.updateMessage(resData.response, resData.responseClassName);

        if(resData.responseClassName === 'success') document.getElementById("contactForm").reset();

    }).catch(error => {

        let response = 'There was an error on server-side.\nPlease check your Nodejs Server';
        let responseClassName = 'alert';

        this.updateMessage(response, responseClassName);

    });

    event.preventDefault();

  }

  render() {

    const {
      responseClassName,
      response
    } = this.state;

    return(
      <>
        { response && (
          <p className={responseClassName + " response"}>
            {response}
          </p>
        ) }
        <form id="contactForm" onSubmit={this.handleFormSubmit} type="POST">
          <label>E-mail
            <input name="email" type="text" />
          </label>
          <label>Message
            <textarea name="message">
            </textarea>
          </label>
          <input type="submit" value="SEND" />
        </form>
      </>
    );

  }

}

export default Contact;
