import { ContactItem } from "./ContactItem";

export const ContactList = ({state, onDelete}) => {
    const normalizedFilter = state.filter.toLowerCase();
    const filteredContacts = state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return <ul>
        {filteredContacts.map( ({id, name, number}) => 
        <ContactItem 
        key={id}
        id={id} 
        name={name} 
        number={number}
        onDelete={onDelete}
        />)}
    </ul>;
}