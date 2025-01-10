import { useEffect } from "react";
import styled from "styled-components";

const StyledTimeline = styled.div`
	display: flex;
	font-family: "Roboto";
	flex-direction: column;
	margin-bottom: 5%;
	padding-inline: 5%;
	background-color: #3d3e41;

	h3 {
		font-family: "Roboto Serif";
		font-size: 48px;
		font-weight: 500;
		margin-block: 3%;

		@media (max-width: 760px) {
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

	.jobContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-block: 10%;
		gap: 44px;
	}

	.job {
		padding-left: 20px;
	}

	.hideBorder {
		border-left: 2px solid transparent;
		transition: all 3s ease;
	}

	.hidden {
		opacity: 0;
		filter: blur(5px);
		transform: translateX(-100%);
		transition: all .5s ease;
	}

	.jobTitle {
		font-size: 32px;
		font-weight: 500;
		font-family: "Roboto Serif";
		margin-bottom: 4px;

		@media (max-width: 499px) {
			font-size: 28px;
		}
	}
	
	.show {
		opacity: 1;
		filter: blur(0);
		transform: translateX(0);
	}

	.hidden:nth-of-type(2) { 
		transition-delay: 200ms;
	}

	.hidden:nth-of-type(3) { 
		transition-delay: 400ms;
	}

	.hidden:nth-of-type(4) { 
		transition-delay: 600ms;
	}

	.hidden:nth-of-type(5) { 
		transition-delay: 800ms;
	}

	.company {
		font-size: 28px;
		font-weight: 300;

		@media (max-width: 499px) {
			font-size: 24px;
		}
	}

	.jobLoc {
		font-size: 24px;
		font-weight: 200;

		@media (max-width: 499px) {
			font-size: 20px;
		}
	}

	.jobDesc {
		max-width: 65ch;
		margin-block: 12px;
		font-size: 20px;

		@media (max-width: 499px) {
			font-size: 18px;
		}
	}

	.hideDot {
		height: 14px;
		width: 14px;
		background-color: transparent;
		position: absolute;
		border-radius: 100%;
		transform: translateX(-28px) translateY(-5px);
		transition: all 1s ease;
	}

	.pill {
		opacity: 0;
		padding: 2px 10px;
		background-color: #5d5f61;
		position: absolute;
		border-radius: 15px;
		transform: translateX(-100px) translateY(-10px);
		transition: all 1s ease;

		@media (max-width: 960px) {
			display: none;
		}
	}

	.showDot {
		background-color: #ffc86b;
	}

	.showPill {
		opacity: 1;
	}

	.showBorder {
		border-left: 2px solid white;
	}
`;

const slideInAnimation = () => {
	const hiddenElements = document.querySelectorAll(".hidden");
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show'); }
			else {
				entry.target.classList.remove('show');
			}
		});
	});

	hiddenElements.forEach((el) => observer.observe(el));

	return () => {
		hiddenElements.forEach((el) => observer.unobserve(el));
	};
}

const fadeInAnimation = () => {
	const hiddenPills = document.querySelectorAll(".pill");
	const hiddenBorder = document.querySelectorAll(".hideBorder");
	const hiddenDot = document.querySelectorAll(".hideDot");

	const pillsObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('showPill'); }
			else {
				entry.target.classList.remove('showPill');
			}
		});
	});

	const borderObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('showBorder'); }
			else {
				entry.target.classList.remove('showBorder');
			}
		});
	});

	const dotObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('showDot'); }
			else {
				entry.target.classList.remove('showDot');
			}
		});
	});

	hiddenPills.forEach((el) => pillsObserver.observe(el));
	hiddenBorder.forEach((el) => borderObserver.observe(el));
	hiddenDot.forEach((el) => dotObserver.observe(el));
	
	return () => {
		hiddenPills.forEach((el) => pillsObserver.unobserve(el));
		hiddenBorder.forEach((el) => borderObserver.unobserve(el));
		hiddenDot.forEach((el) => dotObserver.unobserve(el));
	};
}

function Timeline() {
	useEffect(() => {
		slideInAnimation()
		fadeInAnimation()
	}, []);

	return (
		<StyledTimeline>
			<h3>Experience</h3>
			<div className='jobContainer'>
				<div className='job hideBorder'>
					<span className='pill'>2022</span>
					<span className='hideDot'></span>
					<p className='jobTitle hidden'>Front End Developer</p>
					<p className='company hidden'>Millennium Systems International</p>
					<p className='jobLoc hidden'>New Jersey, USA - (Remote)</p>
					<p className='jobDesc hidden'>
						At MSI, I enhanced usability for online booking and
						e-gift applications, raising System Usability Scale
						(SUS) scores by over 15% and significantly boosting user
						satisfaction. I redesigned and streamlined the mobile
						booking process, achieving a 46.3% increase in
						efficiency (Time To Completion).
					</p>
					<p className='jobDesc hidden'>
						As the lead for the PRISM design system, I directed
						branding, UI consistency, and responsiveness across the
						platform, accelerating development and delivering a
						cohesive user experience.
					</p>
				</div>
				<div className='job hideBorder'>
					<span className='pill'>2017</span>
					<span className='hideDot'></span>
					<p className='jobTitle hidden'>Configuration Modeler</p>
					<p className='company hidden'>E-One</p>
					<p className='jobLoc hidden'>Florida, USA - (Remote)</p>
					<p className='jobDesc hidden'>
						My favorite project was developing the sales application
						for VECTOR, the first North American-style fully
						electric fire truck: In an 8-month timeframe the app was
						deployed, resulting in a 25% reduction in configuration
						errors and a 90% user adoption rate in the first three
						months. This realized a 34% increase in customer
						satisfaction (System Usability Scale).
					</p>
					<p className='jobDesc hidden'>
						In addition to developing applications for other product
						lines, I refactored and modernized legacy systems to
						web-based technologies. This Increased NPS by over 28%
						and reduced load times by 42%.
					</p>
				</div>
				<div className='job hideBorder'>
					<span className='pill'>2016</span>
					<span className='hideDot'></span>
					<p className='jobTitle hidden'>Web Developer</p>
					<p className='company hidden'>Th!nk Technologies</p>
					<p className='jobLoc hidden'>Florida, USA</p>
					<p className='jobDesc hidden'>
						I supported the company’s email marketing campaigns by
						designing and coding custom templates, identifying new
						target demographics, and analyzing engagement metrics.
						These efforts increased open rates and customer
						retention, aligning with the company’s goal of growing
						brand recognition, and delivering consistent,
						value-driven communications to clients.
					</p>
				</div>
				<div className='job hideBorder'>
					<span className='pill'>2014</span>
					<span className='hideDot'></span>
					<p className='jobTitle hidden'>User Experience Specialist</p>
					<p className='company hidden'>Verizon</p>
					<p className='jobLoc hidden'>Florida, USA</p>
					<p className='jobDesc hidden'>
						"I conducted user research and usability testing to
						gather insights and create clear, educational
						documentation for clients, enhancing their understanding
						of technical processes. By applying these findings to
						the development process, I streamlined user flows and
						optimized online and in-store shopping experiences."
					</p>
				</div>
			</div>
		</StyledTimeline>
	);
}

const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show'); }
		else {
			entry.target.classList.remove('show');
		}
	});
});

hiddenElements.forEach((el) => observer.observe(el));
export default Timeline;
