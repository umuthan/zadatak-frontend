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

  handleFormSubmit = (event) => {

    let response = '';
    let responseClassName = '';

    let email = event.target.email.value;
    let emailCheck = false;

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailCheck = true;
    } else {
      response = 'Must have a valid email address\n';
      responseClassName = 'alert';
    }

    let message = event.target.message.value;
    let messageCheck = false;

    if(message.length > 30) {
      messageCheck = true;
    } else {
      response += 'The message must be longer than 30 characters\n';
      responseClassName = 'alert';
    }

    if( messageCheck && emailCheck === true) {
      response = 'Your message has been sent!';
      responseClassName = 'success';

      event.target.email.value = '';
      event.target.message.value = '';
    }

    this.setState({
      response: response,
      responseClassName: responseClassName
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
        <form onSubmit={this.handleFormSubmit} type="POST">
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
