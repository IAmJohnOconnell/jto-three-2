import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const StyledNavbar = styled.div`
  font-family: "Roboto";
  font-weight: 500;
  margin-block: 1rem;
  width: 100%;
  padding: 0 5%;

  @media (max-width: 768px) {
    margin-inline: 5%;
    margin-inline: 0;
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
    color: #ffc86b;
  }
`;

const Logo = styled.li`
  color: #fff;
  font-family: "Homemade Apple", cursive;

  :hover {
    color: #ffc86b;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;

  .mobileHidden {
    @media (max-width: 450px) {
      display: none;
    }
  }

  @media (max-width: 786px) {
    gap: 1rem;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e, id) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/?section=${id}`);
    }
  };

  return (
    <StyledNavbar>
      <ul>
        <Logo>
          <span>{`< Jto / >`}</span>
        </Logo>
        <NavLinks>
          <li>
            <NavLink className="mobileHidden" to="/" href="#home">
              Home
            </NavLink>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavigation(e, "about")}>
              About
            </a>
          </li>
          {/* <li>
            <a href="#work" onClick={(e) => handleNavigation(e, "work")}>
              My Work
            </a>
          </li> */}
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavigation(e, "contact")}>
              Contact
            </a>
          </li>
        </NavLinks>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
