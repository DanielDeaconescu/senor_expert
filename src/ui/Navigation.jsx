import logoImg from "../data/images/senor_expert_logo_nobg.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router";
import { useUser } from "../features/authentication/useUser";
import { logout } from "../services/apiAuth";

const StyledNavigation = styled.nav`
  position: relative;
  width: 100%;
  background-color: var(--color-grey-0);
  border-bottom: 4px solid var(--clr-primary);
  margin-top: ${(props) => (props.$isSticky ? "0px" : "40px")};

  &.navbar-sticky {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }

  @media (max-width: 768px) {
    padding: 1.5rem !important;
  }

  transition: transform 0.3s ease, opacity 0.3s ease;
`;

const StyledImage = styled.img`
  width: 225px;
`;

const StyledNavLink = styled(NavLink)`
  padding: 1.5rem;
  transition: all 0.3s ease;
  color: black;

  &:hover {
    background-color: var(--clr-primary);
    color: var(--color-grey-0) !important;
  }

  &.active {
    background-color: var(--color-grey-0);
    color: var(--color-grey-900) !important;
  }
`;

const LogoutButton = styled.button`
  border: none;
  background: none;
  padding: 1.5rem;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;

  &:hover {
    background-color: var(--clr-primary);
    color: var(--color-grey-0) !important;
    cursor: pointer;
  }
`;

function Navigation({ isSticky }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const { user, isLoading, refetch } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const toggleMenu = useCallback((event) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      !event.target.closest(".navbar-toggler")
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  async function handleLogout() {
    try {
      await logout();

      setIsOpen(false);
      await refetch();

      navigate("/connect");

      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (error) {
      console.error("Error during logout: ", error.message);
    }
  }

  return (
    <StyledNavigation
      $isSticky={isSticky}
      className={`${
        isSticky ? "navbar-sticky" : ""
      } navbar navbar-expand-md navbar-light navbar-custom`}
    >
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <StyledImage src={logoImg} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={(e) => toggleMenu(e)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          ref={navRef}
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <StyledNavLink
                to="/"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Acasă
              </StyledNavLink>
            </li>
            <li className="nav-item">
              <StyledNavLink
                to="/services"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Servicii
              </StyledNavLink>
            </li>
            {user && user.email !== "mona@senorexpert.ro" && (
              <li className="nav-item">
                <StyledNavLink
                  to="/upload"
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Upload
                </StyledNavLink>
              </li>
            )}
            <li className="nav-item">
              {user ? (
                <LogoutButton onClick={handleLogout}>Deconectare</LogoutButton>
              ) : (
                <StyledNavLink
                  to="/connect"
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Conectare
                </StyledNavLink>
              )}
            </li>
            {user?.email === "mona@senorexpert.ro" && (
              <li className="nav-item">
                <StyledNavLink to="/admin" className="nav-link">
                  Admin
                </StyledNavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </StyledNavigation>
  );
}

export default Navigation;
