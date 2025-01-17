function Footer() {
  return (
    <footer className="border-top border-primary bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ul className="nav">
              <li className="nav-item">
                <a href="index.html" className="nav-link link-light">
                  Acasă
                </a>
              </li>
              <li className="nav-item">
                <a href="#details" className="nav-link link-light">
                  Despre
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link link-light">
                  Conectare
                </a>
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
