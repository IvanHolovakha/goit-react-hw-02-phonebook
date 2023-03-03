import React, { Component } from "react";
import { nanoid } from 'nanoid';

import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  handleChange = (evt) => {
    return this.setState({filter: evt.target.value})
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const normalizedName = name.toLowerCase();

    if(this.state.contacts.some(contact => contact.name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {contacts: [...prevState.contacts, {name: name, id: nanoid(), number: number}]};
    })

    // this.resetForm();
  };

  handleDelete = (id) => {
    this.setState(({contacts}) => {
      return {contacts: contacts.filter(contact => contact.id !== id)};
    })
  };

  render() {
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit}/>

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChange}/>
        <ContactList state={this.state} onDelete={this.handleDelete}/> 
      </div>
    );
  }
}
