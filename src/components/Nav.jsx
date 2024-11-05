import styled from "styled-components";

const StyledNavbar = styled.div`
	font-family: "Roboto";
	font-weight: 500;
	margin-block: 1rem;
	margin-inline: 5%;

	ul {
		display: flex;
		list-style: none;
		width: 100%;
		padding: 0px;
		align-items: center;
		justify-content: space-between;
	}

	a {
		text-decoration: none;
		color: #798286;
	}

	a:active {
		color: #c9cdcf;
	}

	a:hover {
		color: #c9cdcf;
	}
`;

const Logo = styled.li`
	color: #fff;
	font-family: "Homemade Apple", cursive;
`;

const NavLinks = styled.div`
	display: flex;
	gap: 3rem;

	@media (max-width: 786px) {
		gap: 1rem;
	}
`;

const Navbar = () => {
	return (
		<StyledNavbar>
			<ul>
				<Logo>
					<span>{`< Jto / >`}</span>
				</Logo>
				<NavLinks>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#work'>My Work</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</NavLinks>
			</ul>
		</StyledNavbar>
	);
};

export default Navbar;
