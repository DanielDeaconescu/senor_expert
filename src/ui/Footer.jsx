import { NavLink } from "react-router";

function Footer() {
  return (
    <footer className="border-top border-primary bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ul className="nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link link-light">
                  Acasă
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link link-light">
                  Servicii
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/connect" className="nav-link link-light">
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
    </footer>
  );
}

export default Footer;
