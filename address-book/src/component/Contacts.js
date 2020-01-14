import React from "react";
import PropTypes from "prop-types";

// const ContactsComponent = (props)=>(
const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map((contact, index) => (
      <li key={index}>
        {contact.name} - {contact.address}
      </li>
    ))}
  </ul>
);


Contacts.defaultProps = {
  contacts: []
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired
    })
  )
};
export default Contacts;
