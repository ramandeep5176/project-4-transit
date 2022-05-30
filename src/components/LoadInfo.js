import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
export class LoadInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <Wrapper>
        <h3 className="header">Load Info.</h3>

        <br />
        <TextField
          placeholder="From"
          onChange={handleChange("From")}
          defaultValue={values.From}
        />
        <br />
        <TextField
          placeholder="To"
          onChange={handleChange("To")}
          defaultValue={values.To}
        />
        <br />
        <div className="btn-container">
          <button className="btn" label="Continue" onClick={this.continue}>
            next
          </button>
          <button className="btn" label="back" onClick={this.back}>
            back
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
  gap: 2rem;

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

export default LoadInfo;
