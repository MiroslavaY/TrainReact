import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import Article from './Article'
//import App from './App';
import ContactList from './Contact/ContactList';


ReactDOM.render(
  <ContactList />, 
  document.getElementById('root'));
registerServiceWorker();
