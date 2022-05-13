import React from 'react';
import c from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <p>{name + ': ' + number}</p>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={c.btn__item}
      >
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
