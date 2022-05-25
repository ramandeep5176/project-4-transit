import React, { Component } from "react";
// import { GetListUtilityClass, ListClasses } from "@mui/material/List";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    // Process form to API Express
    this.props.prevStep();
  };
  render() {
    const {
      values: { FirstName, LastName, Address, Phone, Email, xx, yy },
    } = this.props;

    return (
      <React.Fragment>
        <div>
          <h3>{FirstName}</h3>
          <h3>{LastName}</h3>
          <h3>{Address}</h3>
          <h3>{Phone}</h3>
          <h3>{Email}</h3>
        </div>
        <button label="Confirm & Continue" onClick={this.continue}>
          next
        </button>
        <button label="back" onClick={this.back}>
          back
        </button>
      </React.Fragment>
    );
  }
}

export default Confirm;
