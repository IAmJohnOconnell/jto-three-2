import styled from "styled-components";
import { NavLink } from "react-router";

const StyledNavbar = styled.div`
  font-family: "Roboto";
  font-weight: 500;
  margin-block: 1rem;

  @media (max-width: 768px) {
    margin-inline: 5%;
  }

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
            <NavLink to="/" href="#home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/#about">About</NavLink>
          </li>
          <li>
            <NavLink to="/#work">My Work</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/#contact">Contact</NavLink>
          </li>
        </NavLinks>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
