import styled from "styled-components";
const StyledSkillCard = styled.div`
	display: flex;
	font-family: "Roboto";
	flex-direction: row;
	align-items: center;
	padding: 5px 10px;
	background-color: #3d3e41;
	border-radius: 10px;
	gap: 8px;

	p {
		color: #fff;
	}

	img {
		max-width: 80px;
		min-width: 60px;
		max-height: 80px;
		min-height: 60px;
		height: 100%;
		width: 100%;
	}

	&:hover {
		background-color: #6d5e48;
	}

	@media (max-width: 786px) {
		flex-direction: column;
	}
`;

function SkillCard({ name, icon }) {
	return (
		<StyledSkillCard>
			<img
				src={icon}
				alt=''
			/>
			<p>{name}</p>
		</StyledSkillCard>
	);
}

export default SkillCard;
