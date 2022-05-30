import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="container">
        <Link to="/Courier">
          <img className="img img1" src={one} alt="" />
          <h3>Courier</h3>
        </Link>
      </article>
      <article className="container">
        <Link to="/BigRig">
          <img className="img img2" src={two} alt="" />
          <h3>Big Rig</h3>
        </Link>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 80vw;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  gap: 2rem;

  .img {
    height: 100%;
    width: 100%;
    border-radius: 01.725rem;
    object-fit: cover;
  }
  h3 {
    text-align: center;
    text-decoration: none;
  }

  @media (min-width: 655px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    .img {
      height: 50vh;
    }
  }
`;

export default Hero;
