import React, { Component } from 'react';

class Contact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpened : false
    }
  }

  changeView = (event) => {
    let elem = event.target.nextSibling;
    elem.classList.toggle('hide');

    this.setState({
      isOpened: !this.state.isOpened
    })
  }

  render() {
    return (
      <li className="contact" >
          <div>
            <img className="contact-image" src={this.props.image} width="60px" height="60px" alt="img"/>
            <div className="contact-info">
                <div className="contact-name"> {this.props.name} </div>
                <div className="contact-number"> {this.props.phoneNumber} </div>
            </div>
          </div>
          <p onClick={this.changeView}>More +</p>
          <div className="hide">
            <p>Adress: {this.props.adress}</p>
            <p>E-mail: {this.props.email}</p>
          </div>
      </li>
    );
  }
}

export default Contact;