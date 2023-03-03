import React, { Component } from "react";
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = (evt) => {
    const name = evt.target.name;
    return this.setState({[name]: evt.target.value})
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    // console.log(evt.target)
    // const contact = evt.target.value;
    this.setState(prevState => {
      return {contacts: [...prevState.contacts, {name: name, id: nanoid(), number: number}]}
    })
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label htmlFor="">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label htmlFor="">
          Find contacts by name
          <input 
          type="text" 
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
          />
        </label>
        <ul>{this.state.contacts.map( contact => <li key={contact.id} >{contact.name}: {contact.number}</li>)}</ul>
      </div>
    );
  }
};
