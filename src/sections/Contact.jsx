import styled from "styled-components";

const StyledContact = styled.div`
	.contactContainer {
		background-color: #3d3e41;
		border-bottom: 2px solid #ffc86b;
		border-top: 2px solid #ffc86b;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-block: 5%;
		padding: 2%;
	}

	h3 {
		font-family: "Roboto Serif";
		font-size: 48px;
		font-weight: 500;
		text-align: center;

		@media (max-width: 786px) {
			font-size: 40px;
		}
	}

	.thanks {
		color: #ffc86b;
		font-size: 40px;
		text-align: center;
		margin-block: 5%;

		@media (max-width: 786px) {
			font-size: 32px;
			margin-block: 5%;
		}
	}

	.card {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #34383a;
		padding: 15px 40px;
		color: #ffc86b;
		font-size: 20px;
	}

	.card:hover {
		color: white;
	}

	.cards {
		display: flex;
		gap: 12px;
		padding-block: 2%;

		@media (max-width: 499px) {
			flex-direction: column;
		}
	}
`;

const Contact = () => {
	return (
		<StyledContact id='contact'>
			<div className='contactContainer'>
				<h3>Contact Me</h3>
				<div className='cards'>
					<div className='card'>
						<p>johnathano619@gmail.com</p>
					</div>
					<div className='card'>
						<p>Florida, United States</p>
					</div>
				</div>
			</div>
			<div>
				<p className='thanks'>Thanks for Scrolling!</p>
			</div>
		</StyledContact>
	);
};

export default Contact;
