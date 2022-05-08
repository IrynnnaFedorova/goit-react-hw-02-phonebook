import React from 'react';
import c from './ContactList.module.css';
import ContactListItem from '../ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={c.item}>
            <ContactListItem
              name={name}
              number={number}
              id={id}
              onDeleteContact={onDeleteContact}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),

  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
