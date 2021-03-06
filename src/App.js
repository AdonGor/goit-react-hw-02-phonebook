import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter),
    );
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  onSubmitData = data => {
    const { contacts } = this.state;

    const addContact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    if (contacts.find(contact => contact.name === addContact.name)) {
      alert(`${addContact.name} is already in contacts!`);
      return;
    }

    this.setState({
      contacts: [...contacts, addContact],
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { contacts, filter } = this.state;
    return (
      <>
        <Container>
          <h1>Phonebook:</h1>
          <ContactForm onSubmitData={this.onSubmitData} />
          {contacts.length !==0 && (
            <>
            {contacts.length > 1 && (
              <Filter value={filter} onChange={this.changeFilter} />
            )}
            <h2>Contacts:</h2>
            <ContactsList
              contacts={visibleContacts}
              onDeleteContact={this.onDeleteContact}
            />
            </>
          )}
        </Container>
      </>
    );
  }
}

export default App;
