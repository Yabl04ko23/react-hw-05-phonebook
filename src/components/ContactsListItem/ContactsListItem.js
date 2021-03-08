import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../ContactList/ContactList.module.css";

class ContactsListItem extends Component {
  render() {
    const { id, name, number, onDelete } = this.props;
    return (
      <li className={styles.contactItem} id={id}>
        {name}: {number}{" "}
        <button className="deleteBtn" onClick={onDelete}>
          Delete
        </button>
      </li>
    );
  }
}

ContactsListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ContactsListItem;
