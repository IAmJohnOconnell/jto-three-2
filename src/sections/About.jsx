import styled from "styled-components";

const StyledAbout = styled.div`
	font-family: "Roboto";
	display: flex;
	flex-direction: column;
	padding-inline: 5%;

	h3 {
		font-family: "Roboto Serif";
		font-size: 48px;
		font-weight: 500;
		padding-left: 5%;
		max-width: fit-content;

		@media (max-width: 786px) {
			padding-left: unset;
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

	p {
		max-width: 65ch;
		margin: 5% auto;
		font-size: 20px;
	}
`;

const About = () => {
	return (
		<StyledAbout id='about'>
			<h3>About</h3>
			<div>
				<p>
					Throughout my 7 years in web and application development, I
					have had the privilege of working with innovative products
					like Meevo and E-ONE, where I evolved my skills in web
					development and UX/UI design. I’m a creative problem solver
					who thrives on collaboration and leading teams to achieve
					results. As I look for new opportunities, I am eager to
					leverage my expertise to drive meaningful projects that
					enhance user experiences and contribute to transformative
					solutions in technology.
				</p>
			</div>
		</StyledAbout>
	);
};

export default About;
