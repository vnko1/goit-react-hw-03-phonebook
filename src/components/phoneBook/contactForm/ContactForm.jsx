import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { AiTwotoneProject } from 'react-icons/ai';

class ContactForm extends Component {
  static propTypes = {
    onSubmitData: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  state = { name: '', number: '' };

  onHandleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const obj = {
      name: name.value.trim(),
      number: number.value.trim(),
      id: nanoid(),
    };

    const { onSubmitData, contacts } = this.props;

    const isIncluded = contacts.some(
      contact => contact.name.toLowerCase() === name.value.toLowerCase().trim()
    );

    if (isIncluded) {
      alert(`${name.value.trim()} is already in contacts`);
      this.reset();
      return;
    }

    onSubmitData(obj);
    this.reset();
  };

  onHandleChange = e => {
    const { name: key, value } = e.currentTarget;
    this.setState({ [key]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css.container}>
        <form onSubmit={this.onHandleSubmit} className={css.form}>
          <label className={css.label}>
            <p className={css.text}>Name</p>
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.onHandleChange}
              value={this.state.name}
              required
            />
          </label>
          <label className={css.label}>
            <p className={css.text}>Number</p>
            <input
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.onHandleChange}
              value={this.state.number}
              required
            />
          </label>
          <button
            className={css.button}
            type="submit"
            disabled={!this.state.name || !this.state.number}
          >
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export { ContactForm };
