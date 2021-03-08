import React, { Component } from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "../Notifications/Notifications.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    isInContacts: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { contactName, onSubmit } = this.props;
    const { name, number } = this.state;
    contactName.filter((contact) => contact.name.toLowerCase() === name.toLowerCase()).length === 0
      ? onSubmit(name, number)
      : this.setState({ isInContacts: true });
    this.setState({ name: "", number: "" });
  };

  doWarning = () => {
    this.setState({ isInContacts: false });
  };

  render() {
    const { name, number, isInContacts } = this.state;
    return (
      <>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <label className="contact-label">
            Name
            <input
              className="contact-input"
              required
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label className="contact-label">
            Number
            <input
              className="contact-input"
              required
              type="text"
              placeholder="Enter number"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button className="submit-Btn" type="submit">
            Add contact
          </button>
        </form>
        <TransitionGroup className={styles.notification}>
          {isInContacts && (
            <CSSTransition timeout={500} classNames={styles}>
              <Notifications doWarning={this.doWarning} msg="Contact is already exist!" />
            </CSSTransition>
          )}
        </TransitionGroup>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  contactName: PropTypes.array,
};

export default ContactForm;
