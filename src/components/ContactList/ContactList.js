import PropTypes from 'prop-types';
import { ContactItem } from "../ContactItem/ContactItem";

export const ContactList = ({state, onDeleteContact}) => {
    const normalizedFilter = state.filter.toLowerCase();
    const filteredContacts = state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return <ul>
        {filteredContacts.map( ({id, name, number}) => 
        <ContactItem 
        key={id}
        id={id} 
        name={name} 
        number={number}
        onDeleteContact={onDeleteContact}
        />)}
    </ul>;
}

ContactList.propTypes = {
    state: PropTypes.object.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}