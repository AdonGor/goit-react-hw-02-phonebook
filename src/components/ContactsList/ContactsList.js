import PropTypes from 'prop-types';
import ContactsItem from '../ContactsItem';

const ContactsList = ({ contacts, onDeleteContact}) => {
  return(
      <ul>
          {contacts.map(contact => (
              <li key = {contact.id}>
                  <ContactsItem contact={contact} onDeleteContact={onDeleteContact}/>
              </li>
          ))}
      </ul>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
      }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;