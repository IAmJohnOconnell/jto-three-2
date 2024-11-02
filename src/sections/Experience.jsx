import styled from "styled-components";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";

const StyledExperience = styled.div`
	display: flex;
	font-family: "Roboto";
	flex-direction: column;
	padding-inline: 5%;

	h3 {
		font-family: "Roboto Serif";
		font-size: 48px;
		font-weight: 500;
		text-align: center;
		margin-bottom: 2%;
	}

	.flexContainer {
		display: flex;
		gap: 12px;
		// justify-content: space-between;
		flex-wrap: wrap;

		@media (max-width: 760px) {
			justify-content: center;
			gap: 4px;
		}
	}
`;

function Experience() {
	return (
		<StyledExperience id='work'>
			<h3>Brands I've Worked With</h3>
			<div className='flexContainer'>
				<ExperienceCard icon={"FLWPLogo.png"} />
				<ExperienceCard icon={"MeevoLogo.svg"} />
				<ExperienceCard icon={"EOneLogo.png"} />
				<ExperienceCard icon={"Think.png"} />
			</div>
		</StyledExperience>
	);
}

export default Experience;
