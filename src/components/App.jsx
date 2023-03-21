import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, ContactList, Filter } from './phoneBook';

export class App extends Component {
  state = { contacts: [], filter: '' };

  onHandleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, number } = e.target.elements;

    const obj = {
      name: name.value.trim(),
      number: number.value.trim(),
      id: nanoid(),
    };
    const isIncluded = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.value.toLowerCase().trim()
    );
    if (isIncluded) {
      alert(`${name.value.trim()} is already in contacts`);
      form.reset();
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj],
    }));

    form.reset();
  };

  onHandleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <section>
          <h1>Phonebook</h1>
          <ContactForm onHandleSubmit={this.onHandleSubmit} />
          <h2>Contacts</h2>
          <Filter onHandleChange={this.onHandleChange} />
          <ContactList
            contacts={this.filterContacts()}
            deleteContacts={this.deleteContacts}
          />
        </section>
      </div>
    );
  }
}
