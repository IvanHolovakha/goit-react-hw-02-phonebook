import React, { Component } from "react";
import { nanoid } from 'nanoid';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  onChangeFilter = (evt) => {
    return this.setState({filter: evt.target.value})
  };

  onAddContact = ({name, number}) => {
    const normalizedName = name.toLowerCase();

    if(this.state.contacts.some(contact => contact.name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {contacts: [...prevState.contacts, {name: name, id: nanoid(), number: number}]};
    })
  };

  onDeleteContact = (id) => {
    this.setState(({contacts}) => {
      return {contacts: contacts.filter(contact => contact.id !== id)};
    })
  };

  render() {  
    return (
      <div style={{marginLeft: "50px"}}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onAddContact}/>

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChangeFilter={this.onChangeFilter}/>
        <ContactList state={this.state} onDeleteContact={this.onDeleteContact}/> 
      </div>
    );
  }
}
