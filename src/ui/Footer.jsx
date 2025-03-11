import { NavLink } from "react-router";
import { useState } from "react";
import styled from "styled-components";
import AuthorizationImage from "../data/images/certificat_ceccar.jpg";

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
  color: inherit;
  text-decoration: none;
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
              <li>
                <a href="mailto:stefan.1mihai@yahoo.com">Test Email</a>
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
              <StyledEmailLink
                onClick={(e) => e.stopPropagation()}
                href="mailto:stefan.1mihai@yahoo.com"
              >
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
                <table border="1" cellSpacing="0" cellPadding="5">
                  <thead>
                    <tr>
                      <th>Serviciu</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="2">
                        <strong>Obținere certificat TVA</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Pentru cetățeni români</td>
                      <td>100 EURO</td>
                    </tr>

                    <tr>
                      <td colSpan="2">
                        <strong>Prețuri servicii contabile</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Contabilitate cu volum redus - 20 facturi</td>
                      <td>300 - 450 RON</td>
                    </tr>
                    <tr>
                      <td>
                        Contabilitate cu complexitate medie - 11-50 facturi
                      </td>
                      <td>450 - 700 RON</td>
                    </tr>
                    <tr>
                      <td>
                        Contabilitate cu complexitate mare - 50-200 facturi
                      </td>
                      <td>700 - 1200 RON</td>
                    </tr>
                    <tr>
                      <td>Contabilitate foarte complexă - peste 200 facturi</td>
                      <td>Negociabil</td>
                    </tr>

                    <tr>
                      <td colSpan="2">
                        <strong>Costuri pentru gestionarea salarizării</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>1-5 angajați</td>
                      <td>150 RON</td>
                    </tr>
                    <tr>
                      <td>6-10 angajați</td>
                      <td>200 RON</td>
                    </tr>
                    <tr>
                      <td>11-20 angajați</td>
                      <td>250 RON</td>
                    </tr>
                    <tr>
                      <td>Peste 20 angajați</td>
                      <td>Negociabil</td>
                    </tr>
                    <tr>
                      <td>Elaborare contracte, decizii (1-5 angajați)</td>
                      <td>50 RON</td>
                    </tr>
                    <tr>
                      <td>Elaborare contracte, decizii (6-11 angajați)</td>
                      <td>100 RON</td>
                    </tr>
                    <tr>
                      <td>Elaborare contracte, decizii (11-20 angajați)</td>
                      <td>200 RON</td>
                    </tr>
                    <tr>
                      <td>Elaborare contracte, decizii (peste 20 angajați)</td>
                      <td>Negociabil</td>
                    </tr>
                    <tr>
                      <td>Întocmire fișă fiscală/salariat</td>
                      <td>25 RON</td>
                    </tr>

                    <tr>
                      <td colSpan="2">
                        <strong>Servicii de certificare a bilanțului</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Cifra de afaceri până la 100.000 RON</td>
                      <td>250 RON</td>
                    </tr>
                    <tr>
                      <td>100.001 - 200.000 RON</td>
                      <td>400 RON</td>
                    </tr>
                    <tr>
                      <td>200.001 - 450.000 RON</td>
                      <td>600 RON</td>
                    </tr>
                    <tr>
                      <td>Peste 450.001 RON</td>
                      <td>Negociabil</td>
                    </tr>

                    <tr>
                      <td colSpan="2">
                        <strong>Servicii adiționale</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Deplasare pentru colectarea actelor</td>
                      <td>200 RON</td>
                    </tr>
                    <tr>
                      <td>Depunerea declarațiilor de șomaj</td>
                      <td>200 RON</td>
                    </tr>
                    <tr>
                      <td>Servicii pentru licitații publice</td>
                      <td>250 - 350 RON</td>
                    </tr>
                    <tr>
                      <td>Analiză financiar-contabilă</td>
                      <td>400 - 650 RON</td>
                    </tr>
                  </tbody>
                </table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
