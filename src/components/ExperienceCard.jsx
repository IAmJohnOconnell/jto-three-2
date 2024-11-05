import styled from "styled-components";

const StyledExperienceCard = styled.div`
	display: flex;
	font-family: "Roboto";
	padding: 5%;
	max-height: 195px;
	background-color: #3d3e41;

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
			<img
				src={icon}
				alt=''
			/>
		</StyledExperienceCard>
	);
}

export default ExperienceCard;
