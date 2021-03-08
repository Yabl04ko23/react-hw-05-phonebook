import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Filter extends Component {
  render() {
    const { filterValue, changeFilter, contacts } = this.props;
    return (
      <>
        <TransitionGroup component="div">
          {contacts.length > 1 && (
            <CSSTransition  timeout={250} classNames={styles}>
              <label className="contact-label">
                Find contacts by name
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Enter name"
                  name="filter"
                  value={filterValue}
                  onChange={(e) => changeFilter(e.target.value)}
                />
              </label>
            </CSSTransition>
          )}
        </TransitionGroup>
      </>
    );
  }
}

Filter.propTypes = {
  filterValue: PropTypes.string,
  changeFilter: PropTypes.func,
};

export default Filter;
