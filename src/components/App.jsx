import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, ContactList, Filter } from './phoneBook';

export class App extends Component {
  state = { contacts: [], filter: '', name: '', number: '' };

  onHandleSubmit = e => {
    e.preventDefault();
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
      this.reset();
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj],
    }));

    this.reset();
  };

  onHandleChange = e => {
    const { name: key, value } = e.currentTarget;
    this.setState({ [key]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
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
      <div>
        <section>
          <div className="container">
            <h1>Phonebook</h1>
            <ContactForm
              onHandleSubmit={this.onHandleSubmit}
              onHandleChange={this.onHandleChange}
              name={this.state.name}
              number={this.state.number}
            />
            <h2>Contacts</h2>
            <Filter
              onHandleChange={this.onHandleChange}
              filter={this.state.filter}
            />
            <ContactList
              contacts={this.filterContacts()}
              deleteContacts={this.deleteContacts}
            />
          </div>
        </section>
      </div>
    );
  }
}
