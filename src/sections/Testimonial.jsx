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
	}

	div {
		display: flex;
		justify-content: space-between;
	}

	.line {
		max-width: 85px;
		width: 100%;
		border: 1px solid #ffc86b;
		// transform: translateX(-100px) translateY(10px);
	}

	.testimonialContainer {
		max-width: 65ch;
		margin: 5% auto;
		display: flex;
		flex-direction: column;
		font-size: 20px;
	}

	.stakeholder {
		color: #ffffff;
		font-weight: 500;
		font-size: 20px;
	}

	.company {
		color: #c9cdcf;
		font-weight: 300;
		font-size: 20px;
	}

	.blob {
		// margin-left: auto;
	}
`;

function Testimonial() {
	return (
		<StyledTestimonial>
			<h3>Testimonial</h3>
			<div className='testimonialContainer'>
				<div className='line'></div>
				<p className='textContent'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Magnam ut hic libero. Veritatis at a officiis incidunt
					ratione! Deleniti, culpa. Et quisquam eligendi ullam quidem
					repellat minus temporibus facere iusto!
				</p>
				<p className='stakeholder'>Some Name</p>
				<p className='company'>Business Owner, FLWP</p>
			</div>
			<svg
				className='blob'
				// width='500'
				// height='395'
				// viewBox='0 0 500 395'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M0 64C0 28.6538 28.6538 0 64 0H500V395H64C28.6538 395 0 366.346 0 331V64Z'
					fill='#FFC86B'
				/>
			</svg>
		</StyledTestimonial>
	);
}

export default Testimonial;
