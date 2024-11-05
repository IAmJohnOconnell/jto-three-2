import styled from "styled-components";

const StyledTestimonial = styled.div`
	display: flex;
	font-family: "Roboto";
	flex-direction: column;
	margin-block: 5%;
	padding-inline: 5%;

	h3 {
		font-family: "Roboto Serif";
		font-size: 48px;
		font-weight: 500;
		padding-left: 5%;
		margin-bottom: 2%;

		@media (max-width: 760px) {
			padding-left: unset;
			font-size: 40px;
		}
	}

	div {
		display: flex;
		justify-content: space-between;
	}

	.line {
		max-width: 45px;
		width: 100%;
		border: 1px solid #ffc86b;
		transform: translateX(-75px) translateY(10px);

		@media (max-width: 499px) {
			transform: unset;
			max-width: unset;
			transform: translateY(-15px);
		}
	}

	.testimonialContainer {
		max-width: 65ch;
		margin: 5% auto;
		display: flex;
		flex-direction: column;
		font-size: 20px;
		gap: 2rem;

		@media (max-width: 499px) {
			font-size: 18px;
		}
	}

	.stakeholder {
		color: #ffffff;
		font-weight: 400;
		font-size: 20px;
		padding-top: 2%;
	}

	.company {
		color: #c9cdcf;
		font-weight: 300;
		font-size: 20px;
	}

	.testimonial {
		display: flex;
		flex-direction: column;
	}

	.textContent {
		font-style: italic;
	}
`;

function Testimonial() {
	return (
		<StyledTestimonial>
			<h3>Testimonial</h3>
			<div className='testimonialContainer'>
				<div className='testimonial'>
					<div className='line'></div>
					<p className='textContent'>
						"John is a rock star and was the voice of reason within
						our team. There's no way our project would have been
						successful without him."
					</p>
					<p className='stakeholder'>Kate Mossinger</p>
					<p className='company'>
						Principal UX Designer & Researcher @ Millennium Systems
						International
					</p>
				</div>
				<div className='testimonial'>
					<div className='line'></div>
					<p className='textContent'>
						"Honestly, working with John was a breath of fresh air.
						He understood what we were trying to do and took the
						time to make sure everything looked and worked just
						right. He even spotted a few things we hadn’t thought of
						that made the site far more user-friendly. Super
						professional, and easy to work with."
					</p>
					<p className='stakeholder'>Corey Hendricks</p>
					<p className='company'>
						Owner @ Forida Water Professionals
					</p>
				</div>
				<div className='testimonial'>
					<div className='line'></div>
					<p className='textContent'>
						"If we're spinning up another project, I want John to
						lead it. His commitment and knowledge are essential, and
						he has a proven track record of success"
					</p>
					<p className='stakeholder'>Drew Baldin</p>
					<p className='company'>Product Manager @ E-ONE</p>
				</div>
			</div>
		</StyledTestimonial>
	);
}

export default Testimonial;
