import logoImg from "../data/images/logo_test.png";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router";
import { useUser } from "../services/UserContext";
import { getCurrentUser, logout } from "../services/apiAuth";

const StyledNavigation = styled.nav`
  background-color: var(--clr-my-grey-0);
`;
const StyledImage = styled.img`
  width: 225px;
`;

function Navigation() {
  // const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser); // Update the user state
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    }

    fetchUser();
  }, [user]);

  async function handleLogout() {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error("Error during logout: ", error.message);
    }
  }

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
            <li className="nav-item">
              <NavLink to="/connect" className="nav-link">
                Conectare
              </NavLink>
            </li>
            {/* Conditionally render Admin Link */}
            {user?.email === "mona@senorexpert.ro" && (
              <li className="nav-item">
                <NavLink to="/admin" className="nav-link">
                  Admin
                </NavLink>
              </li>
            )}
            {/* Logout button */}
            {user && (
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn btn-link nav-link"
                >
                  Deconectare
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </StyledNavigation>
  );
}

export default Navigation;
