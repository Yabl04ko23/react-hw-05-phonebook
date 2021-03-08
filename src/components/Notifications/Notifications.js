import React, { Component } from "react";
import PropTypes from "prop-types";

let id;
class Notifications extends Component {
  disableAlert = () => {
    const { doWarning } = this.props;
    doWarning(false);
  };

  componentDidMount() {
    clearTimeout(id);
  }

  render() {
    id = setTimeout(() => {
      this.disableAlert();
    }, 3000);

    return <h2>Contact alredy exsist!</h2>;
  }
}

Notifications.propTypes = {
  doWarning: PropTypes.func,
};
export default Notifications;
