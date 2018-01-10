import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//Я немножко идиот) Чтобы посмотреть как и что работает нужно
//что-то коментировать а что-то наоборот

//Вывести несколько заметок
//import Article from './Article' 

//Сделать Привет мир который будет выводить ия из инпута
//import App from './App';

//Cкрывать и показывать дополнительную информацию
import ContactList from './Contact/ContactList';


ReactDOM.render(
  //<Article />,
  //<App />,
  <ContactList />, 
  document.getElementById('root'));
registerServiceWorker();
