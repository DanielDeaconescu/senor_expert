import heroServices from "../data/images/hero_services.jpg";
import backgroundHeroServices from "../data/images/background_hero_services.jpg";
import styled from "styled-components";
import { NavLink } from "react-router";
import HeroImage from "./HeroImage";
import LogoImage from "../data/images/senor_expert_logo_nobg.png";

const StyledHeader = styled.header`
  background-image: url(${backgroundHeroServices});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 3;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 576px) {
    /* padding: 5rem; */
  }
`;

const StyledTitle = styled.h1`
  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const StyledParagraph = styled.p`
  @media (max-width: 576px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const Image = styled.img`
  border-radius: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const StyledHeaderInner = styled.div`
  @media (max-width: 576px) {
    padding-top: 2.5rem !important;
  }
`;

function ServicesHeader() {
  return (
    <StyledHeader className="hero">
      <StyledHeaderInner className="hero text-white p-5">
        <div className="container-xl container-services-hero-custom">
          <div className="row">
            <div className="image-container col-md-6">
              <div className="mb-2 px-4">
                <HeroImage
                  image={heroServices}
                  logo={LogoImage}
                  text="Servicii contabile de încredere. Precizie, siguranță, eficiență."
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-container d-flex flex-column justify-content-center align-items-center h-100 mb-5">
                <StyledTitle className="display-3 fw-bold">
                  Servicii Senor Expert
                </StyledTitle>
                <StyledParagraph className="lead custom-paragraph">
                  Alături de serviciile de contabilitate și fiscalitate despre
                  care puteți citi mai jos, vă oferim posibilitatea de a încărca
                  documentele contabile online într-un mediu securizat.
                </StyledParagraph>

                <div className="text-center">
                  <div className="d-grid">
                    <StyledNavLink
                      to="/connect"
                      className="btn btn-primary btn-lg text-white"
                    >
                      Conectare
                    </StyledNavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledHeaderInner>

      {/* <svg
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
      </svg> */}
    </StyledHeader>
  );
}

export default ServicesHeader;
