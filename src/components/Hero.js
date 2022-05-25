import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article>
        <Link to="/Courier">
          <img className="img img1" src={one} alt="" />
          <h3>Courier</h3>
        </Link>
      </article>
      <article>
        <Link to="/BigRig">
          <img className="img img2" src={two} alt="" />
          <h3>Big Rig</h3>
        </Link>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  min-width: 60vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  place-items: center;

  .img {
    height: 40vh;
    width: 40vw;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);

    gap: 9rem;

    .img {
      height: 70vh;
    }
  }
`;

export default Hero;
