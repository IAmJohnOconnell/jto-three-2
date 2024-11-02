import styled from "styled-components";

const StyledHero = styled.div`
	font-family: "Roboto Serif";

	.heroContainer {
		display: flex;
		flex-direction: column;
		max-width: fit-content;
		// width: 100%;
		margin: 8% auto;
		position: absolute;
		z-index: 1;
		padding-inline: 5%;
	}

	h1,
	h2 {
		font-weight: 400;
		font-size: 32px;
	}

	span {
		font-family: "Homemade Apple";
		color: #ffc86b;
		margin-left: 8px;
		font-size: 40px;
	}
`;

const Hero = () => {
	return (
		<StyledHero>
			<div className='heroContainer'>
				<h1>
					I'm <span>John O'Connell</span>
				</h1>
				<h2>
					Web Developer and User Experience <br /> Consultant
				</h2>
			</div>
		</StyledHero>
	);
};

export default Hero;
