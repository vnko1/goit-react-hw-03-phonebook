import { Component } from 'react';
import { ContactForm, ContactList, Filter } from './phoneBook';

export class App extends Component {
  state = { contacts: [], name: '', number: '', filter: '' };

  onSubmitChangeState = ({ contact, name, number }) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    this.setState({ name, number });
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
          <ContactForm onSubmitChangeState={this.onSubmitChangeState} />
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={this.state.contacts} />
        </section>
      </div>
    );
  }
}
