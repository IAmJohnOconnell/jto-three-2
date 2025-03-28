import React from "react";
import Navbar from "../components/Nav";
import styled from "styled-components";

const StyledOtherStuff = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto";

  .container {
    padding-left: 5%;
  }

  h3 {
    font-family: "Roboto Serif";
    font-size: 48px;
    font-weight: 500;
    max-width: fit-content;
    margin-top: 5%;
    padding-bottom: 40px;

    @media (max-width: 786px) {
      font-size: 40px;
    }
  }

  h3:before {
    position: absolute;
    padding-top: 8px;
    content: "";
    border-bottom: 2px solid #ffc86b;
    width: 80px;
    transform: translateY(58px);
  }

  .projectTitle {
    font-family: "Roboto Serif";
    font-size: 22px;
    font-weight: 500;
    max-width: fit-content;

    @media (max-width: 786px) {
      font-size: 30px;
    }
  }

  p {
    max-width: 65ch;
    font-size: 20px;
  }

  .link,
  .link:visited {
    color: #ffc86b;
  }
`;

const OtherStuff = () => {
  return (
    <StyledOtherStuff>
      <Navbar />
      <div className="container">
        <div>
          <h3>The Gallery</h3>
          <p>
            Check some of my other work on{" "}
            <a className="link" href="https://dribbble.com/johnathano619">
              Dribble
            </a>
            .
          </p>
        </div>
        <div>
          <h3>Case Studies</h3>
          <p className="projectTitle">
            <a
              className="link"
              href="https://www.figma.com/proto/rBBvw7ghNixZtTZ2VZhbnV/ServiceStream?node-id=390-3599&t=o9PgFbLIWoqJjxXu-1&scaling=min-zoom&content-scaling=fixed"
            >
              Florida Water Professionals
            </a>
          </p>
        </div>
      </div>
    </StyledOtherStuff>
  );
};

export default OtherStuff;
