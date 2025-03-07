import CallToActionImage from "../data/images/call-to-action-image.jpg";
import styled from "styled-components";
import BackgroundImage from "../data/images/header-home-background.jpg";
import { NavLink } from "react-router";
import { useQueryClient } from "react-query";

const StyledSection4 = styled.section`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  & .text-container {
    position: relative;
    z-index: 3;
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
  z-index: 3;
  max-width: 350px;
`;

const CallToActionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  height: 100%;
`;

const CTAParagraph = styled.p`
  text-align: center;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Section4() {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user"]);

  return (
    <StyledSection4 className="download">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-container mt-5 mb-5">
              <StyledImage src={CallToActionImage} alt="" />
            </div>
          </div>
          <OuterContainer className="col-lg-6">
            <CallToActionTextContainer className="text-container text-white mb-5">
              <h2 className="fw-bold text-center">
                Încărcați documentele contabile rapid și sigur
              </h2>
              <CTAParagraph>
                Folosiți <strong>contul de acces</strong> transmis de echipa
                noastră și aveți acces la funcționalitatea de încărcare a
                documentelor online.
              </CTAParagraph>

              <NavLink
                to={user ? "/upload" : "/connect"}
                className="btn btn-primary text-white"
              >
                Încărcare documente
              </NavLink>
            </CallToActionTextContainer>
          </OuterContainer>
        </div>
      </div>
    </StyledSection4>
  );
}

export default Section4;
