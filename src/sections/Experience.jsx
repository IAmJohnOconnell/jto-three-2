import styled from "styled-components";
import ExperienceCard from "../components/ExperienceCard";

const StyledExperience = styled.div`
  display: flex;
  font-family: "Roboto";
  flex-direction: column;
  margin-block: 5%;

  h3 {
    font-family: "Roboto Serif";
    font-size: 48px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2%;

    @media (max-width: 786px) {
      font-size: 40px;
    }
  }

  .flexContainer {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      padding-inline: 5%;
      gap: 1rem;
    }

    @media (max-width: 499px) {
      gap: 12px;
    }

    @media (min-width: 1200px) {
      justify-content: space-between;
    }
  }
`;

function Experience() {
  return (
    <StyledExperience id="work">
      <h3>Brands I've Worked With</h3>
      <div className="flexContainer">
        <ExperienceCard icon={"CromLogo.png"} />
        <ExperienceCard icon={"FLWPLogo.png"} />
        <ExperienceCard icon={"MeevoLogo.svg"} />
        <ExperienceCard icon={"EOneLogo.png"} />
        <ExperienceCard icon={"Think.png"} />
        <ExperienceCard icon={"verizon.svg"} />
      </div>
    </StyledExperience>
  );
}

export default Experience;
