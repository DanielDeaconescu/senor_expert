import { NavLink } from "react-router";
import BackgroundImage from "../data/images/header-background.jpg";
import UploadImage from "../data/images/upload-image.jpg";
import styled from "styled-components";

const StyledCallToActionServices = styled.div`
  background-image: url(${BackgroundImage});
  padding: 4rem 0.5rem;
`;

const ConnectButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--color-red-700);
`;

function CallToActionServices() {
  return (
    <StyledCallToActionServices>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="text-container text-white d-flex flex-column justify-content-center h-100 mb-5">
              <h2 className="fw-bold">Încărcați Fișerele Contabile</h2>
              <p>
                Simplificați procesul de contabilitate și economisiți timp
                încarcând fișierele contabile în format electronic.
              </p>
              <NavLink
                to="/connect"
                className="text-white text-decoration-none"
              >
                <ConnectButton>Conectare</ConnectButton>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="image-container mb-5">
              <img src={UploadImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </StyledCallToActionServices>
  );
}

export default CallToActionServices;
