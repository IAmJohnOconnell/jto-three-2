import styled from "styled-components";

const StyledTimeline = styled.div`
	display: flex;
	font-family: "Roboto";
	flex-direction: column;
	margin-block: 5%;
	padding-inline: 5%;
	background-color: #3d3e41;

	h3 {
		font-family: "Roboto Serif";
		font-size: 48px;
		font-weight: 500;
		margin-block: 3%;

		@media (max-width: 760px) {
			padding-left: unset;
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
		border-left: 2px solid white;
	}

	.jobTitle {
		font-size: 32px;
		font-weight: 500;
		font-family: "Roboto Serif";
	}

	.jobLoc {
		font-size: 24px;
	}

	.jobDesc {
		max-width: 65ch;
	}

	.dot {
		height: 14px;
		width: 14px;
		background-color: #ffc86b;
		position: absolute;
		border-radius: 100%;
		transform: translateX(-28px) translateY(-5px);
	}

	.pill {
		padding: 2px 10px;
		background-color: #5d5f61;
		position: absolute;
		border-radius: 15px;
		transform: translateX(-100px) translateY(-10px);
	}
`;

function Timeline() {
	return (
		<StyledTimeline>
			<h3>Experience</h3>
			<div className='jobContainer'>
				<div className='job'>
					<span className='pill'>2022</span>
					<span className='dot'></span>
					<p className='jobTitle'>Job Title</p>
					<p className='jobLoc'>Job Location</p>
					<p className='jobDesc'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Facere repudiandae nulla aspernatur voluptatum iure
						laborum, iusto, voluptatibus repellat dicta, maiores
						perspiciatis! Doloribus pariatur tempore asperiores
						libero quia aut deleniti voluptatibus.
					</p>
				</div>
				<div className='job'>
					<span className='pill'>2017</span>
					<span className='dot'></span>
					<p className='jobTitle'>Job Title</p>
					<p className='jobLoc'>Job Location</p>
					<p className='jobDesc'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Facere repudiandae nulla aspernatur voluptatum iure
						laborum, iusto, voluptatibus repellat dicta, maiores
						perspiciatis! Doloribus pariatur tempore asperiores
						libero quia aut deleniti voluptatibus.
					</p>
				</div>
			</div>
		</StyledTimeline>
	);
}

export default Timeline;
