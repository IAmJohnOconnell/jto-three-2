import styled from "styled-components";

const StyledExperienceCard = styled.div`
  display: flex;
  font-family: "Roboto";
  padding: 5% 2%;
  height: 185px;
  width: 200px;
  background-color: #3d3e41;

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 425px) {
    height: 100px;
    padding: 3%;
  }

  img {
    max-width: 150px;
    max-height: 200px;
    width: 100%;
    margin: 0 auto;
  }

  &:hover {
    background-color: #6d5e48;
  }
`;

function ExperienceCard({ icon }) {
  return (
    <StyledExperienceCard>
      <img src={icon} alt="" />
    </StyledExperienceCard>
  );
}

export default ExperienceCard;
