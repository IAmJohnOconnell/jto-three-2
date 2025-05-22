import styled from "styled-components";

const StyledHero = styled.div`
  font-family: "Roboto Serif";

  .heroContainer {
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    position: absolute;
    z-index: 1;
    padding-left: 5%;
    padding-top: 1%;
    text-shadow: 0px 0px 4px #2d2d2d;

    @media (max-width: 499px) {
      position: relative;
      text-shadow: none;
      margin-block: 1rem;
    }
  }

  h1 {
    font-size: 48px;
    // line-height: initial;
    @media (max-width: 499px) {
      font-size: 8vw;
    }
  }

  h2 {
    font-size: 36px;
    // line-height: initial;

    @media (max-width: 499px) {
      font-size: 7vw;
    }
  }

  h3 {
    font-size: 30px;
    // line-height: initial;

    @media (max-width: 499px) {
      font-size: 6vw;
    }
  }

  span.space {
    color: #ffc86b;
    margin-left: 8px;
  }
  .yellow {
    color: #ffc86b;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <div className="heroContainer">
        <h1>
          I'm
          <span className="space">
            {/* <i> */}
            John O'Connell
            {/* </i> */}
          </span>
        </h1>
        <h2>
          <span className="yellow">
            <i>Full-Stack</i>
          </span>{" "}
          Skills,
          <span className="yellow">
            <i> Front-End</i>{" "}
          </span>{" "}
          Focus.
        </h2>
        <h3>
          Web Developer <span className="yellow">|</span> UX/UI{" "}
          <span className="yellow">|</span> Graphic Design <br />
        </h3>
      </div>
    </StyledHero>
  );
};

export default Hero;
