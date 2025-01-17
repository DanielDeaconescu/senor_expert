import logoImg from "../data/images/logo_test.png";
import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router";

const StyledNavigation = styled.nav`
  background-color: var(--clr-my-grey-0);
`;
const StyledImage = styled.img`
  width: 225px;
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledNavigation className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          <StyledImage src={logoImg} alt="" />
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Acasă
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link">
                Servicii
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/connect" className="nav-link">
                Conectare
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </StyledNavigation>
  );
}

export default Navigation;
