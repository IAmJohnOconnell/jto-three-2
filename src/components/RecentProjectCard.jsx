import React from "react";
import styled from "styled-components";

const StyledPortfolioCard = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  align-items: flex-start;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};

  &:hover {
    .projectDescription {
      h4 {
        border-bottom: 2px solid white;
        width: fit-content;
        color: #ffc86b;
        transform: scale(1.05);
        transition: all 0.3s ease;
      }
    }

    img {
      transform: scale(1.05);
      border: 2px solid #ffc86b;
      border-radius: 5px;
      transition: all 0.3s ease;
    }
  }

  .projectImage {
    flex: 1;
  }

  img:hover {
    transform: scale(1.05);
    border: 2px solid #ffc86b;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .projectDescription {
    @media (min-width: 769px) {
      max-width: 50%;
    }

    h4 {
      font-size: 28px;
      color: white;
      margin-bottom: 0.5rem;
      border-bottom: 2px solid #ffc86b;
      width: fit-content;
    }

    a {
      text-decoration: none;
      color: white;
    }

    a:visited {
      color: white;
    }

    p {
      cursor: initial;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .projectdescription: {
      max-width: unset;
      max-width: 100%;
    }
  }
`;

const RecentProjectCard = ({ title, image, url, description, reversed }) => {
  return (
    <StyledPortfolioCard reversed={reversed}>
      <div className="projectImage">
        {" "}
        <a href={url}>
          <img src={image} alt="" />
        </a>
      </div>
      <div className="projectDescription">
        <a href={url}>
          <h4>{title}</h4>
          <p>{description}</p>
        </a>
      </div>
    </StyledPortfolioCard>
  );
};

export default RecentProjectCard;
