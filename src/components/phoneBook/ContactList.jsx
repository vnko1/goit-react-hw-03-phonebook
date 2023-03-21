import PropTypes from 'prop-types';
import { Contact } from './Contact';

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <Contact name={name} number={number} />
              <button type="button" onClick={() => deleteContacts(id)}>
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
