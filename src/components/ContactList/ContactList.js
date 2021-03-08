import React, { Component } from "react";
import ContactsListItem from "../ContactsListItem/ContactsListItem";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactList.module.css";

class ContactList extends Component {
  render() {
    const { contactsItem, onDeleteContact } = this.props;
    return (
      <TransitionGroup component="ul" className={styles.contactsUl}>
        {contactsItem.map((contactsItem) => {
          return (
            <CSSTransition key={contactsItem.id} timeout={250} classNames={styles}>
              <ContactsListItem
                className="contactItem"
                name={contactsItem.name}
                number={contactsItem.number}
                onDelete={() => onDeleteContact(contactsItem.id)}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}

ContactList.propTypes = {
  contactsItem: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
