import { NavLink } from "react-router";
import CTABackground from "../data/images/background_hero_services.jpg";
import UploadImage from "../data/images/upload-image.jpg";
import styled from "styled-components";
import HeroImage from "./HeroImage";
import LogoImage from "../data/images/senor_expert_logo_nobg.png";
import Logo from "./Logo";

const StyledCallToActionServices = styled.div`
  background-image: url(${CTABackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 4rem 0.5rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  & .text-container {
    position: relative;
    z-index: 3;
  }
`;

const StyledUploadImage = styled.img`
  border-radius: 1rem;
  position: relative;
  z-index: 98;
`;

const StyledTextContainer = styled.div`
  @media (max-width: 576px) {
    align-items: center !important;
  }
`;

function CallToActionServices() {
  return (
    <StyledCallToActionServices>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <StyledTextContainer className="text-container text-white d-flex flex-column justify-content-center h-100 mb-5 upload-accounting-docs">
              <h2 className="fw-bold">Încărcați Fișerele Contabile</h2>
              <p>
                Ați uitat să aduceți unele documente contabile? Nicio problemă!
                Autentificați-vă acum și încărcați fișierele direct în platforma
                noastră, rapid și sigur, pentru a le transmite contabilei.
              </p>
              <NavLink
                to="/connect"
                className="btn btn-primary btn-lg text-white text-decoration-none"
              >
                Conectare
              </NavLink>
            </StyledTextContainer>
          </div>
          <div className="col-lg-6">
            <div className="image-container mb-5">
              <HeroImage
                image={UploadImage}
                logo={LogoImage}
                text="Încărcați fișierele contabile rapid și în siguranță!"
              />
            </div>
          </div>
        </div>
      </div>
    </StyledCallToActionServices>
  );
}

export default CallToActionServices;
