import { NavLink } from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 4px solid var(--clr-primary);
`;

function Footer() {
  return (
    <StyledFooter className="bg-light text-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ul className="nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link link-dark">
                  Acasă
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link link-dark">
                  Servicii
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/connect" className="nav-link link-dark">
                  Conectare
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="text-end d-none d-md-block">
              Toate drepturile rezervate &copy; 2025 - Senor Expert
            </p>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
