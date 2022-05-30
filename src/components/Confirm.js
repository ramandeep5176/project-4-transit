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
      values: { FirstName, LastName, Address, Phone, Email, From, To },
    } = this.props;

    return (
      <Wrapper>
        <div>
          <h3 className="header">Personal Info.</h3>
          <p>FirstName</p> <h5>{FirstName}</h5>
          <p>LastName</p> <h5>{LastName}</h5>
          <p>Address</p> <h5>{Address}</h5>
          <p>Email</p> <h5>{Email}</h5>
          <p>Phone</p> <h5>{Phone}</h5>
          <br />
          <br />
          <h3 className="header">Load Info.</h3>
          <p>From</p> <h5>{From}</h5>
          <p>To</p> <h5>{To}</h5>
          {/* <p>Address</p> <h5>{Address}</h5>
          <p>Email</p> <h5>{Email}</h5>
          <p>Email</p> <h5>{Email}</h5> */}
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
            Edit
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

  .header {
    text-decoration: underline;
  }
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
