import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    let localContacts = JSON.parse(localStorage.getItem("contacts"));
    if (localContacts) {
      this.setState(() => {
        return { contacts: localContacts };
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deleteContact = (taskId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== taskId),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  findContact = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  render() {
    const { filter, contacts } = this.state;
    const foundContacts = this.findContact();
    return (
      <>
        <CSSTransition in={true} appear={true} timeout={500} classNames="Header">
          <h1>Phonebook</h1>
        </CSSTransition>

        <ContactForm onSubmit={this.addContact} contactName={contacts} />

        <h2>Contacts</h2>
        <Filter contacts={contacts} changeFilter={this.changeFilter} filterValue={filter} />
        <ContactList contactsItem={foundContacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
