import logoImg from "../data/images/logo_test.png";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router";
import { useUser } from "../features/authentication/useUser";
import { getCurrentUser, logout } from "../services/apiAuth";

const StyledNavigation = styled.nav`
  background-color: var(--clr-my-grey-0);
`;
const StyledImage = styled.img`
  width: 225px;
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading, refetch } = useUser();

  useEffect(() => {
    refetch();
  }, [refetch]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  async function handleLogout() {
    try {
      await logout();
      refetch();
    } catch (error) {
      console.error("Error during logout: ", error.message);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(user);

  return (
    <StyledNavigation className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <NavLink href="#" className="navbar-brand">
          <StyledImage src={logoImg} alt="" />
        </NavLink>
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
            {user && user.email !== "mona@senorexpert.ro" ? (
              <li className="nav-item">
                <NavLink to="/upload" className="nav-link">
                  Upload
                </NavLink>
              </li>
            ) : (
              ""
            )}
            <li className="nav-item">
              <NavLink to="/connect" className="nav-link">
                {user ? (
                  <span onClick={handleLogout}>Deconectare</span>
                ) : (
                  "Conectare"
                )}
              </NavLink>
            </li>
            {user?.email === "mona@senorexpert.ro" && (
              <li className="nav-item">
                <NavLink to="/admin" className="nav-link">
                  Admin
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </StyledNavigation>
  );
}

export default Navigation;
