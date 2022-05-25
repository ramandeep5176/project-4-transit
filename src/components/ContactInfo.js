import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import LoadInfo from "./LoadInfo";
import Confirm from "./Confirm";
import Recipt from "./Recipt";

export class ContactInfo extends Component {
  state = {
    // add these to render aswell
    step: 1,
    FirstName: "",
    LastName: "",
    Address: "",
    Phone: "",
    Email: "",
    xx: "",
    yy: "",
  };

  // Go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  // Go to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //handle fiels changes
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { FirstName, LastName, Address, Phone, Email, xx, yy } = this.state;
    const values = { FirstName, LastName, Address, Phone, Email, xx, yy };

    switch (step) {
      case 1:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <LoadInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Recipt
        
        
        />;
    }
  }
}

export default ContactInfo;
