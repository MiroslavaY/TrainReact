import React, { Component } from 'react';
import Contact from './Contact';

let CONTACTS = [
  {
      id: 1,
      name: 'Darth Vader',
      phoneNumber: '+250966666666',
      image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif',
      adress: 'Star of Death',
      email: 'Darth@i.ua'
  }, {
      id: 2,
      name: 'Princess Leia',
      phoneNumber: '+250966344466',
      image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif',
      adress: 'Planet 1',
      email: 'Leia@i.ua'
    }, {
      id: 3,
      name: 'Luke Skywalker',
      phoneNumber: '+250976654433',
      image: 'http://www.youshouldshare.me/wp-content/uploads/2015/03/14264215682890-anigif_enhanced-buzz-13518-1367608452-4.gif',
      adress: '2 planet',
      email: 'Luke@i.ua'
  }, {
      id: 4,
      name: 'Chewbacca',
      phoneNumber: '+250456784935',
      image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif',
      adress: '3 planet',
      email: 'Chewee@i.ua'
  }
];

class ContactList extends Component {
  constructor () {
    super();
    this.state = {
      displayedContacts: CONTACTS
    }; 
  }

  handleSearch = (event) => {
    let searchQuery = event.target.value.toLowerCase();
    let displayedContacts = CONTACTS.filter(function(el) {
        let searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
        displayedContacts: displayedContacts
    });
  }

  render() {
    return (
      <div className="contacts">
        <input type="text" className="search-field" onChange={this.handleSearch} />
        <ul className="contacts-list">
          {
            this.state.displayedContacts.map(function(el) {
              return <Contact
                key={el.id}
                name={el.name}
                phoneNumber={el.phoneNumber}
                image={el.image}
                adress={el.adress}
                email={el.email}
              />;
            })
          }
        </ul>
      </div>
    );
  }

}

export default ContactList;