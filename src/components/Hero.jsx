import styled from "styled-components";

const StyledHero = styled.div`
	font-family: "Roboto Serif";

	.heroContainer {
		display: flex;
		flex-direction: column;
		max-width: fit-content;
		position: absolute;
		z-index: 1;
		padding-left: 5%;
		padding-top: 2%;
		text-shadow: 0px 0px 4px #2d2d2d;

		@media (max-width: 499px) {
			position: relative;
			text-shadow: none;
			margin-block: 1rem;
		}
	}

	h1,
	h2 {
		font-weight: 700;
		font-size: 44px;
		line-height: initial;

		@media (max-width: 499px) {
			font-size: 8vw;
		}
	}

	span {
		font-family: "Roboto Serif";
		color: #ffc86b;
		margin-left: 8px;
	}
`;

const Hero = () => {
	return (
		<StyledHero>
			<div className='heroContainer'>
				<h1>
					I'm<span>John O'Connell</span>
				</h1>
				<h2>
					Web Developer <br />& Consultant
				</h2>
			</div>
		</StyledHero>
	);
};

export default Hero;
