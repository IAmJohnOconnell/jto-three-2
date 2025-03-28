import React from "react";
import styled from "styled-components";

const StyledPortfolioCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border-radius: 10px;
  gap: 0.5rem;
  transition: all 0.3s ease;

  p {
    color: #ffc86b;
  }

  img {
    border-radius: 10px;
    max-height: 225px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const PortfolioCard = ({ title, icon, url }) => {
  return (
    <StyledPortfolioCard>
      <p>{title}</p>
      <a href={url}>
        <img src={icon} alt="" />
      </a>
    </StyledPortfolioCard>
  );
};

export default PortfolioCard;
