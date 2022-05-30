import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
export class PersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <Wrapper>
        <h3 className="header">Personal Info.</h3>
        <TextField
          placeholder="First Name"
          onChange={handleChange("FirstName")}
          defaultValue={values.FirstName}
        />
        <br />
        <TextField
          placeholder="Last Name"
          onChange={handleChange("LastName")}
          defaultValue={values.LastName}
        />
        <br />
        <TextField
          placeholder="Email"
          onChange={handleChange("Email")}
          defaultValue={values.Email}
        />
        <br />
        <TextField
          placeholder="Address"
          onChange={handleChange("Address")}
          defaultValue={values.Address}
        />
        <br />
        <TextField
          placeholder="Phone"
          onChange={handleChange("Phone")}
          defaultValue={values.Phone}
        />
        <br />
        <div className="btn-container">
          <button className="btn" label="Continue" onClick={this.continue}>
            next
          </button>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.main`
  justify-content: center;
  align-items: center;
  text-align: center;

  .header {
    text-decoration: underline;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.31rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .btn {
    width: 5rem;
    place-self: center;
  }
`;

export default PersonalDetails;
