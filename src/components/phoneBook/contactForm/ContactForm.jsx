import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ onHandleSubmit }) => {
  const nameId = nanoid();
  const numberId = nanoid();
  return (
    <div className={css.container}>
      {' '}
      <form onSubmit={onHandleSubmit} className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          <p className={css.text}>Name</p>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={nameId}
            required
          />
        </label>
        <label className={css.label} htmlFor={numberId}>
          <p className={css.text}>Number</p>
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={numberId}
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = { onHandleSubmit: PropTypes.func.isRequired };

export { ContactForm };
