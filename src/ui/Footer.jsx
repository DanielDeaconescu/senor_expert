import { NavLink } from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 4px solid var(--clr-primary);
`;

const TableContainer = styled.div``;

const NavListFooter = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
`;

const StyledNavLink = styled(NavLink)`
  &:hover {
    text-decoration: underline var(--clr-primary) !important;
    text-decoration-thickness: 3px;
  }
`;

function Footer() {
  return (
    <StyledFooter className="bg-light text-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Link-uri utile</h3>
            <NavListFooter className="nav-list-footer">
              <li className="nav-item">
                <StyledNavLink to="/" className="nav-link link-dark">
                  Acasă
                </StyledNavLink>
              </li>
              <li className="nav-item">
                <StyledNavLink to="/services" className="nav-link link-dark">
                  Servicii
                </StyledNavLink>
              </li>
              <li className="nav-item">
                <StyledNavLink to="/connect" className="nav-link link-dark">
                  Conectare
                </StyledNavLink>
              </li>
              <li className="nav-item">
                <StyledNavLink
                  data-bs-toggle="modal"
                  data-bs-target="#pricesList"
                  className="nav-link link-dark"
                >
                  Lista de prețuri
                </StyledNavLink>
              </li>
            </NavListFooter>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <p className="text-end d-none d-md-block">
              Toate drepturile rezervate &copy; 2025 - Senor Expert
            </p>
          </div>
        </div>
      </div>
      <div
        class="modal fade modal-prices-list"
        id="pricesList"
        aria-labelledby="pricesList"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="pricesList">
                Vezi lista orientativă de prețuri
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body modal-dialog-prices-list">
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
