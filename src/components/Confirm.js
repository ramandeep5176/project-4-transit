import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <Wrapper>
        <div>
          <h4>{FirstName}</h4>
          <h4>{LastName}</h4>
          <h4>{Address}</h4>
          <h4>{Phone}</h4>
          <h4>{Email}</h4>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            label="Confirm & Continue"
            onClick={this.continue}
          >
            Submit
          </button>
          <button className="btn" label="back" onClick={this.back}>
            back
          </button>
        </div>
        <p>**Please check info & click submit.</p>
      </Wrapper>
    );
  }
}
const Wrapper = styled.section`
  min-height: 60vh;
  min-width: 60vw;
  display: grid;
  place-items: center;

  .btn-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    text-align: center;
  }

  @media screen and (min-width: 655px) {
    .btn-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default Confirm;
