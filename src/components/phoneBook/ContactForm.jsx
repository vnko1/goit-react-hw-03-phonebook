import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  onHandleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, number } = e.target.elements;
    const { onSubmitChangeState } = this.props;
    const data = {
      contact: { name: name.value, number: number.value, id: nanoid() },
      name: name.value,
      number: number.value,
    };
    onSubmitChangeState(data);
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export { ContactForm };
