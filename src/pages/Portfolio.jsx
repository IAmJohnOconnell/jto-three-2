import React from "react";
import Navbar from "../components/Nav";
import styled from "styled-components";
import PortfolioCard from "../components/PortfolioCard";

const StyledPortfolio = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto";

  .container {
    padding-inline: 5%;
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

  .dribbleCTA {
    font-style: italic;
  }

  .link,
  .link:visited {
    color: #ffc86b;
  }

  .portfolioCards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 786px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Navbar />
      <div className="container">
        <div>
          <h3>The Gallery</h3>
          <div className="portfolioCards">
            <PortfolioCard
              title={"Formula 1 Hub"}
              icon={"f1hubThumb.png"}
              url={"https://formula1hub.netlify.app/"}
            />
            <PortfolioCard
              title={"Meevo"}
              icon={"meevoThumb.png"}
              url={"https://www.meevo.com/"}
            />
            <PortfolioCard
              title={"E-One"}
              icon={"eoneThumb.png"}
              url={"https://e-one.com/vector/"}
            />
            <PortfolioCard
              title={"Pokedex"}
              icon={"pokedexThumb.png"}
              url={"https://pokedexv2-iamjoconnell.netlify.app/"}
            />
          </div>
          <p className="dribbleCTA">
            Check out my work on{" "}
            <a className="link" href="https://dribbble.com/johnathano619">
              Dribble
            </a>
            .
          </p>
        </div>
        <div>
          <h3>Case Studies</h3>
          <div className="portfolioCards">
            <PortfolioCard
              title={"Florida Water Professionals"}
              icon={"flwpThumb.png"}
              url={
                "https://www.figma.com/proto/rBBvw7ghNixZtTZ2VZhbnV/ServiceStream?node-id=390-3599&t=o9PgFbLIWoqJjxXu-1&scaling=min-zoom&content-scaling=fixed"
              }
            />
          </div>
        </div>
      </div>
    </StyledPortfolio>
  );
};

export default Portfolio;
