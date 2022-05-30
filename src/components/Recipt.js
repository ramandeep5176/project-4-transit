import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export class Recipt extends Component {
  render() {
    return (
      <Wrapper className="section-center">
        <h3>You have Sucessufully submited your query</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </Wrapper>
    );
  }
}
const Wrapper = styled.section`
  min-height: 60vh;
  min-width: 60vw;
  display: grid;
  place-items: center;
`;

export default Recipt;
