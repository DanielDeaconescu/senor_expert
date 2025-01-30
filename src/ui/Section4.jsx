import CallToActionImage from "../data/images/call-to-action-image.jpg";
import styled from "styled-components";
import BackgroundImage from "../data/images/header-home-background.jpg";
import { NavLink } from "react-router";

const StyledSection4 = styled.section`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  & .text-container {
    position: relative;
    z-index: 100;
  }

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
`;

const StyledImage = styled.img`
  border-radius: 1rem;
  z-index: 100;
`;

const CallToActionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CTAParagraph = styled.p`
  width: 75%;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

function Section4() {
  return (
    <StyledSection4 className="download">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="image-container mt-5 mb-5">
              <StyledImage src={CallToActionImage} alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <CallToActionTextContainer className="text-container text-white mb-5">
              <h2 className="fw-bold">
                Încărcați documentele contabile rapid și sigur
              </h2>
              <CTAParagraph>
                Folosiți contul de acces transmis de echipa noastră și aveți
                acces la funcționalitatea de încărcare a documentelor online.
              </CTAParagraph>

              <NavLink to="/connect" className="btn btn-primary text-white">
                Încărcare documente
              </NavLink>
            </CallToActionTextContainer>
          </div>
        </div>
      </div>
    </StyledSection4>
  );
}

export default Section4;
