// import { Component } from 'react';
import { Contact } from './Contact';
const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <Contact name={contact.name} number={contact.number} />
              <button type="button" onClick={() => deleteContacts(contact.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export { ContactList };
