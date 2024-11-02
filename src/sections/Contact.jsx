import styled from "styled-components";

const StyledContact = styled.div`
	.contactContainer {
		background-color: #3d3e41;
		border-bottom: 2px solid #ffc86b;
		border-top: 2px solid #ffc86b;
		min-height: 150px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 12px;
		margin-top: 6%;
	}

	h3 {
		font-family: "Roboto Serif";
		font-size: 48px;
		font-weight: 500;
		text-align: center;
	}

	.thanks {
		color: #ffc86b;
		font-size: 40px;
		text-align: center;
		padding: 3%;
	}

	.card {
		display: flex;
		align-items: center;
		background-color: #34383a;
		padding: 10px 40px;
		color: #ffc86b;
	}

	.cards {
		display: flex;
		gap: 12px;
		padding-block: 2%;
	}
`;

const Contact = () => {
	return (
		<StyledContact id='contact'>
			<div className='contactContainer'>
				<h3>Contact Me</h3>
				<div className='cards'>
					<div className='card'>
						<p>Email</p>
					</div>
					<div className='card'>
						<p>Florida, United States</p>
					</div>
				</div>
			</div>
			<div>
				<p className='thanks'>"Thanks for Scrolling"</p>
			</div>
		</StyledContact>
	);
};

export default Contact;
