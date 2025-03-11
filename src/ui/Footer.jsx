import { NavLink } from "react-router";
import { useState } from "react";
import styled from "styled-components";
import AuthorizationImage from "../data/images/certificat_ceccar.jpg";
import PricesTable from "./PricesTable";

const StyledFooter = styled.footer`
  border-top: 4px solid var(--clr-primary);
`;

const CopyrightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 992px) {
    align-items: flex-start;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  position: relative;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  @media (min-width: 768px) {
    &:hover {
      color: var(--clr-primary);
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

const NavListFooter = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
`;

const StyledEmailLink = styled.a`
  background: none;
  border: none;
  color: inherit;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    color: var(--clr-primary);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const PhoneButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    color: var(--clr-primary);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const StyledPhoneLink = styled.a`
  color: inherit;
  text-decoration: none;
  position: relative;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    color: var(--clr-primary);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const CopyrightText = styled.p`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
  text-align: right;
  color: var(--clr-dark);
`;

const TableContainer = styled.div``;

const DanielDevLink = styled.a`
  text-decoration: underline;
`;

const CloseButton = styled.button`
  flex: 1;
`;

const DownloadButton = styled.a`
  flex: 1;
`;

function Footer() {
  const [phoneVisible, setPhoneVisible] = useState(false);

  return (
    <StyledFooter className="bg-light text-dark py-4">
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Link-uri utile</h5>
            <NavListFooter>
              <li>
                <StyledNavLink to="/">Acasă</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/services">Servicii</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/connect">Conectare</StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  data-bs-toggle="modal"
                  data-bs-target="#pricesList"
                >
                  Lista de prețuri
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  data-bs-toggle="modal"
                  data-bs-target="#authorizationModal"
                  as="a"
                  href="/certificat-ceccar.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificat CECCAR
                </StyledNavLink>
              </li>

              <div
                className="modal fade"
                id="authorizationModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header text-center">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Autorizație C.E.C.C.A.R.
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src={AuthorizationImage}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="modal-footer">
                      <CloseButton
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Închide
                      </CloseButton>
                      <DownloadButton
                        href="/data/pdfs/certificat_ceccar.pdf"
                        download
                        className="btn btn-primary"
                      >
                        Descarcă PDF
                      </DownloadButton>
                    </div>
                  </div>
                </div>
              </div>
            </NavListFooter>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>
              <i className="fa-solid fa-envelope me-2"></i>
              <strong>Email:</strong>{" "}
              <StyledEmailLink href="mailto:stefan.1mihai@yahoo.com">
                stefan.1mihai@yahoo.com
              </StyledEmailLink>
            </p>
            <p>
              <i className="fa-solid fa-phone me-2"></i>
              <strong>Telefon:</strong>{" "}
              {phoneVisible ? (
                <StyledPhoneLink href="tel:+40751159264">
                  +40 751 159 264
                </StyledPhoneLink>
              ) : (
                <PhoneButton onClick={() => setPhoneVisible(true)}>
                  Click pentru a vedea
                </PhoneButton>
              )}
            </p>
            <p>
              <i className="fa-solid fa-clock me-2"></i>
              <strong>Program:</strong> Luni-Vineri: 09:00 - 17:00
            </p>
          </div>

          {/* Copyright Section */}
          <CopyrightSection className="col-md-4">
            <h5>Drepturi de autor & Credite</h5>
            <CopyrightText className="text-end">
              Toate drepturile rezervate &copy; {new Date().getFullYear()}
            </CopyrightText>
            <CopyrightText className="text-end">
              <StyledNavLink to="/privacy-policy" className="text-dark">
                Politica de confidențialitate
              </StyledNavLink>
            </CopyrightText>

            <CopyrightText className="text-end ">
              Website realizat de{" "}
              <DanielDevLink
                href="https://danieldeaconescu.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Daniel Dev
              </DanielDevLink>
            </CopyrightText>
            <CopyrightText className="text-end">
              Senor Expert | Servicii de contabilitate
            </CopyrightText>
          </CopyrightSection>
        </div>
      </div>

      <div
        className="modal fade modal-prices-list"
        id="pricesList"
        aria-labelledby="pricesList"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="pricesList">
                Lista orientativă de prețuri
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modal-dialog-prices-list">
              <TableContainer>
                <PricesTable />
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
