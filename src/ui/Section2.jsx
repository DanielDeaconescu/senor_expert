import { useState } from "react";
import Section2Modal from "../data/images/section2-modal.jpg";
import Modal from "./Modal";
import Section2SideImage from "../data/images/section2-side-image.jpg";
import styled from "styled-components";

const StyledText = styled.div`
  text-align: justify;
`;

const StyledTextModal = styled.div`
  text-align: left;
  @media (max-width: 576px) {
    text-align: center;
  }
`;

const ModalTitle = styled.h4`
  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

const ItemText = styled.div`
  display: flex;
  line-height: 1.5;
  @media (max-width: 576px) {
    text-align: center;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    text-align: left;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    text-align: left;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    text-align: left;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    text-align: left;
  }

  @media (min-width: 1400px) {
    text-align: justify;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledSection2SideImage = styled.img`
  border-radius: 1rem;
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ValuesTitle = styled.h3`
  padding-top: 1rem;
`;

const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & h4 {
    margin-bottom: 0;
  }

  @media (max-width: 576px) {
    justify-content: center;
    white-space: nowrap;
  }
`;

const ListItem = styled.li`
  text-align: center;
`;

const OurValuesContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StrongText = styled.i`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--clr-primary);
`;

function Section2() {
  return (
    <>
      <section id="details" className="details my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container d-flex flex-column justify-content-center h-100">
                <h2 className="display-6">
                  Despre <StrongText>Senor Expert</StrongText>
                </h2>
                <StyledText>
                  Vă oferim soluții complete pentru gestionarea financiară a
                  afacerii dumneavoastră. Dispunând de experiență vastă în
                  domeniul contabilității și de o echipă dedicată, vă oferim
                  servicii contabile de înaltă calitate, astfel încât afacerea
                  dumneavoastră să prospere.
                </StyledText>
                <ul className="list-group list-group-flush lh-lg">
                  <li className="list-group-item">
                    <Title>
                      <span>
                        <i class="fa-solid fa-calculator"></i>
                      </span>
                      <span>
                        <strong>Contabilitate financiară</strong>
                      </span>
                    </Title>

                    <StyledText>
                      Asigurăm înregistrarea și gestionarea tuturor
                      operațiunilor contabile, întocmirea situațiilor financiare
                      și raportarea conform legislației în vigoare.
                    </StyledText>
                  </li>
                  <li className="list-group-item">
                    <Title>
                      <span>
                        <i class="fa-solid fa-coins"></i>
                      </span>
                      <span>
                        <strong>Consultanță fiscală</strong>
                      </span>
                    </Title>

                    <StyledText>
                      Vă oferim soluții personalizate pentru optimizare fiscală
                      și respectarea obligațiilor legale, contribuind la
                      reducerea riscurilor și costurilor inutile.
                    </StyledText>
                  </li>
                  <li className="list-group-item">
                    <Title>
                      <span>
                        <i class="fa-solid fa-chart-simple"></i>
                      </span>
                      <span>
                        <strong>Contabilitate de gestiune</strong>
                      </span>
                    </Title>
                    <StyledText>
                      Analizăm și monitorizăm costurile și veniturile,
                      ajutându-vă să luați decizii strategice bazate pe o
                      imagine clară a performanței afacerii dumneavoastră.
                    </StyledText>
                  </li>
                  <li className="list-group-item">
                    <Title>
                      <span>
                        <i class="fa-solid fa-money-bill"></i>
                      </span>
                      <span>
                        <strong>
                          Salarizare și administrare resurse umane
                        </strong>
                      </span>
                    </Title>

                    <StyledText>
                      Gestionăm calculul salariilor, întocmirea declarațiilor și
                      administrarea dosarelor de personal, astfel încât să
                      puteți economisi timp și să vă puteți concentra pe echipa
                      dumneavoastră.
                    </StyledText>
                  </li>
                </ul>

                <button
                  className="btn btn-primary text-white mt-4 align-self-start"
                  data-bs-toggle="modal"
                  data-bs-target="#ourValuesModal"
                >
                  Valorile noastre
                </button>

                <div
                  class="modal fade"
                  id="ourValuesModal"
                  tabindex="-1"
                  aria-labelledby="ourValuesModal"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body modal-body-custom text-center">
                        <h4>Valorile noastre</h4>
                        <p>
                          Valorile noastre stau la baza fiecărei colaborări:
                          profesionalismul în tot ceea ce facem, transparența în
                          comunicare și acțiuni și angajamentul pe care ni-l
                          luăm față de relațiile de lungă durată.
                        </p>
                        <ul className="list-group list-group-flush lh-lg">
                          <li className="list-group-item">
                            <ItemTitle>
                              <i class="fa-solid fa-address-card"></i>
                              <h4>Profesionalism</h4>
                            </ItemTitle>
                            <ItemText>
                              Ne dedicăm oferirii unor servicii contabile înalt
                              calitative, respectând legislația în vigoare și
                              bunele practici din domeniu.
                            </ItemText>
                          </li>
                          <li className="list-group-item">
                            <ItemTitle>
                              <i class="fas fa-eye"></i>
                              <h4>Transparență</h4>
                            </ItemTitle>
                            <ItemText>
                              Construim relații bazate pe încredere, oferind
                              soluții contabile clare, corecte și transparente
                              pentru afacerea dumneavoastră.
                            </ItemText>
                          </li>

                          <li className="list-group-item ">
                            <ItemTitle>
                              <i class="fas fa-handshake"></i>
                              <h4>Relații de Lungă Durată</h4>
                            </ItemTitle>
                            <ItemText>
                              Construim parteneriate durabile, bazate pe
                              comunicare eficientă și sprijin constant, pentru
                              succesul clienților noștri.
                            </ItemText>
                          </li>
                        </ul>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Închide
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container p-5">
                <StyledSection2SideImage
                  src={Section2SideImage}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
