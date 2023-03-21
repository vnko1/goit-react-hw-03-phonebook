import { Component } from 'react';
import { PhoneBookForm } from './phoneBook';

export class App extends Component {
  state = { contacts: [], name: '', number: '' };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',

          fontSize: 40,
          color: '#010101',
        }}
      >
        <section>
          <h1>Phonebook</h1>
          <PhoneBookForm />
        </section>
      </div>
    );
  }
}
