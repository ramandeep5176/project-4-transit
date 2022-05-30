import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BigRig = () => {
  return (
    <Wrapper className="section-center">
      <h1>Coming Soon...</h1>
      <Link to="/" className="btn">
        back home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  min-width: 60vw;
  display: grid;
  place-items: center;
`;

export default BigRig;
