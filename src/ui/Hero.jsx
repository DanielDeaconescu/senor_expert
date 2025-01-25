import HeaderHomeBackground from "../data/images/header-home-background.jpg";
import HeaderHomeImage from "../data/images/header-home-image.jpg";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-image: url(${HeaderHomeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  & .text-container {
    position: relative;
    z-index: 100;
  }

  & .frame-decoration {
    position: relative;
    z-index: 2;
  }
`;

const StyledParagraph = styled.p`
  text-align: justify;
`;

const StyledHeaderHomeImage = styled.img`
  width: 420px;
  border-radius: 1rem;
  position: relative;
  z-index: 100;
`;

function Hero() {
  return (
    <StyledHeader className="hero">
      <div className="hero text-white pt-7">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container mb-5 px-4">
                <StyledHeaderHomeImage
                  src={HeaderHomeImage}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-5">
                <h1 className="display-3 fw-bold">
                  Bun venit la Senor Expert!
                </h1>
                <StyledParagraph className="lead">
                  Bun venit la Senor Expert! Suntem o echipă de profesioniști
                  dedicați care oferă soluții complete de contabilitate,
                  consultanță fiscală și salarizare, adaptate nevoilor afacerii
                  tale. Cu experiență vastă și un angajament ferm față de
                  excelență, ne asigurăm că afacerea ta se dezvoltă în
                  conformitate cu legislația în vigoare și îți oferim sprijinul
                  necesar pentru a lua cele mai bune decizii financiare. Alege
                  Senor Expert pentru un partener de încredere pe drumul
                  succesului tău.
                </StyledParagraph>

                <div className="form-container text-center">
                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg text-white">
                      Conectare
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="frame-decoration"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 192.275"
      >
        <defs>
          <style>
            {`.cls-1 {
        fill: #f3f6f9;
      }`}
          </style>
        </defs>
        <title>frame-decoration</title>
        <path
          className="cls-1"
          d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z"
          transform="translate(0 -158.755)"
        />
      </svg>
    </StyledHeader>
  );
}

export default Hero;
