import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, ContactList, Filter } from './phoneBook';

export class App extends Component {
  state = { contacts: [], name: '', number: '', filter: '' };

  onSubmitChangeState = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, number } = e.target.elements;
    const obj = { name: name.value, number: number.value, id: nanoid() };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj],
      name: name.value,
      number: number.value,
    }));

    form.reset();
  };

  // onHandleChange(e) {
  //   this.setState({  });
  // }

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
          <Filter onHandleChange={this.onHandleChange} />
          <ContactList contacts={this.state.contacts} />
        </section>
      </div>
    );
  }
}
