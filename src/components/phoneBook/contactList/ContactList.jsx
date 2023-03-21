import PropTypes from 'prop-types';
import { AiFillContacts } from 'react-icons/ai';
import { Contact } from './Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              <div className={css.itemContainer}>
                <AiFillContacts />
                <Contact name={name} number={number} />
              </div>
              <button
                className={css.button}
                type="button"
                onClick={() => deleteContacts(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};

export { ContactList };
