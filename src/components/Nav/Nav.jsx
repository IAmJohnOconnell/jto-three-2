import styled from "styled-components";

const StyledNavbar = styled.div`
	display: flex;
	justify-content: center;
	font-family: "Roboto";
	font-weight: 500;
	margin-block: 1rem;

	ul {
		display: flex;
		list-style: none;
		width: 100%;
		padding: 0px;
		align-items: center;
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
	// padding-left: 40px;
`;

const NavLinks = styled.div`
	margin: 0 auto;
	display: flex;
	gap: 3rem;
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
						<a href='#home'>Home</a>
					</li>
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
