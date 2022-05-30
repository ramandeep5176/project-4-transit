import React, { Component } from "react";
import TextField from "@mui/material/TextField";

export class PersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <TextField
          placholder="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={handleChange("FirstName")}
          defaultValue={values.FirstName}
        />
        <br />
        <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={handleChange("LastName")}
          defaultValue={values.LastName}
        />
        <br />
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={handleChange("Email")}
          defaultValue={values.Email}
        />
        <br />
        <TextField
          hintText="Enter Your Address"
          floatingLabelText="Address"
          onChange={handleChange("Address")}
          defaultValue={values.Address}
        />
        <br />
        <button className="btn" label="Continue" onClick={this.continue}>
          next
        </button>
      </React.Fragment>
    );
  }
}

export default PersonalDetails;
