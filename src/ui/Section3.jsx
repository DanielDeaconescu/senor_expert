import ConsultingPic from "../data/images/consulting-pic.jpg";
import SagaLogo from "../data/images/saga_logo.png";
import Modal from "./Modal";
import styled from "styled-components";

const StyledImage = styled.img`
  border-radius: 1rem;
`;

const StyledText = styled.div`
  text-align: justify;
`;

const StyledParagraph = styled.p`
  text-align: justify;
  line-height: 1.4;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    flex-direction: column;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    flex-direction: column;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    flex-direction: column;
  }

  @media (min-width: 1400px) {
    flex-direction: column;
  }
`;

const StyledSagaLogo = styled.img`
  @media (max-width: 576px) {
    max-width: 40px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    max-width: 45px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    max-width: 50px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    max-width: 55px;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    max-width: 60px;
  }

  @media (min-width: 1400px) {
    max-width: 60px;
  }
`;

const ListItemSmall = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 576px) {
    display: block;
    text-align: left;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    display: block;
    text-align: left;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    display: block;
    text-align: left;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    display: block;
    text-align: left;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    display: block;
    text-align: left;
  }

  @media (min-width: 1400px) {
    display: block;
    text-align: left;
  }
`;

const ListItemSmallIcon = styled.i`
  color: green;
`;

const UnorderedListModal = styled.ul`
  padding: 0;
`;

function Section3() {
  return (
    <section className="details my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-container p-5">
              <StyledImage src={ConsultingPic} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-container d-flex flex-column justify-content-center h-100">
              <h2 className="display-6">Servicii de Consultanță Integrate</h2>

              <StyledParagraph>
                Ne remarcăm prin faptul că oferim clienților noștri servicii de
                consultanță integrate folosindu-ne de experiența vastă acumulată
                de-a lungul timpului.
              </StyledParagraph>
              <StyledParagraph>
                De la asistență în implementarea măsurilor impuse de legislația
                în vigoare și până la explicarea conceptelor de contabilitate și
                de business, oferim consultanță personalizată astfel încât
                fiecare client să aibă parte de suportul necesar pentru a naviga
                cu succes provocările antreprenoriatului.
              </StyledParagraph>
              <ul className="list-group list-group-flush lh-lg">
                <li className="list-group-item">
                  <Title>
                    <i className="fa-solid fa-laptop fa-2x text-primary"></i>
                    <strong>Asistență program de contabilitate SAGA</strong>
                  </Title>
                  <div>
                    <ul>
                      <li>
                        <i className="fa-solid fa-circle-check text-primary"></i>
                        <span className="ps-3">Instalare program SAGA</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check text-primary"></i>
                        <span className="ps-3">Instalare licență</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check text-primary"></i>
                        <span className="ps-3">
                          Asistență la creare facturilor
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list-group-item">
                  <Title>
                    <i class="fa-solid fa-gavel fa-2x text-primary"></i>
                    <strong>Conformitate cu legislația în vigoare</strong>
                  </Title>
                  <StyledParagraph>
                    În funcție de specifficul afacerii tale, ne informăm în
                    privința legislației aplicabile și oferim asistență pentru
                    aplicarea ei.
                  </StyledParagraph>
                </li>
                <li className="list-group-item">
                  <Title>
                    <i class="fa-solid fa-user fa-2x text-primary"></i>
                    <strong>
                      Consultanță pentru înființarea business-ului
                    </strong>
                  </Title>
                  <StyledParagraph>
                    Oferim asistență în alegerea formei juridice potrivite,
                    elaborarea actelor necesare, organizarea proceselor interne
                    și multe altele.
                  </StyledParagraph>
                </li>
              </ul>
              <button
                className="btn btn-primary text-white mt-4 align-self-start"
                data-bs-toggle="modal"
                data-bs-target="#modalConsulting"
              >
                Află mai mult
              </button>

              <div
                class="modal fade"
                id="modalConsulting"
                aria-labelledby="modalConsulting"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable ">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Consultanță Integrată</h4>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body modal-dialog-consulting">
                      <div className="container">
                        <div className="row">
                          <ul className="list-group list-group-flush lh-lg">
                            <ListItem className="list-group-item">
                              <div>
                                <StyledSagaLogo src={SagaLogo} alt="" />
                              </div>
                              <div>
                                <h4>Asistență program de contabilitate SAGA</h4>
                                <StyledParagraph>
                                  Echipa noastră vă oferă suport pentru
                                  configurarea, utilizarea și optimizarea
                                  programului de contabilitate SAGA. Fie că este
                                  vorba despre instalarea, configurarea
                                  conturilor contabile sau utilizarea avansată a
                                  funcțiilor software-ului, suntem aici să vă
                                  ghidăm pas cu pas.
                                </StyledParagraph>

                                <UnorderedListModal>
                                  <ListItemSmall>
                                    <i class="fa-solid fa-circle-check text-primary"></i>
                                    <span className="ps-2">
                                      Economisiți timp prin utilizarea eficientă
                                      a programului
                                    </span>
                                  </ListItemSmall>
                                  <ListItemSmall>
                                    <i class="fa-solid fa-circle-check text-primary"></i>
                                    <span className="ps-2">
                                      Evitați erorile contabile frecvente
                                    </span>
                                  </ListItemSmall>
                                  <ListItemSmall>
                                    <i class="fa-solid fa-circle-check text-primary"></i>
                                    <span className="ps-2">
                                      Configurație personalizată pentru afacerea
                                      dumneavoastră
                                    </span>
                                  </ListItemSmall>
                                </UnorderedListModal>
                              </div>
                            </ListItem>
                            <ListItem className="list-group-item">
                              <div>
                                <i class="fa-solid fa-gavel fa-3x text-primary"></i>
                              </div>
                              <div>
                                <h4>Conformitate cu legislația în vigoare</h4>
                                <StyledParagraph>
                                  Vă ajutăm să respectați toate cerințele legale
                                  și reglementările fiscale în vigoare. Rămânem
                                  mereu la curent cu modificările legislative
                                  pentru a vă oferi consultanță actualizată și
                                  soluții care să vă protejeze afacerea.
                                </StyledParagraph>
                                <UnorderedListModal>
                                  <ListItemSmall>
                                    <i class="fa-solid fa-circle-check text-primary"></i>
                                    <span className="ps-2">
                                      Verificare periodică a documentelor și
                                      proceselor contabile
                                    </span>
                                  </ListItemSmall>
                                  <ListItemSmall>
                                    <i class="fa-solid fa-circle-check text-primary"></i>
                                    <span className="ps-2">
                                      Consultanță pentru întocmirea
                                      declarațiilor fiscale
                                    </span>
                                  </ListItemSmall>
                                  <ListItemSmall>
                                    <i class="fa-solid fa-circle-check text-primary"></i>
                                    <span className="ps-2">
                                      Sprijin în pregătirea pentru controalele
                                      autorităților fiscale
                                    </span>
                                  </ListItemSmall>
                                </UnorderedListModal>
                              </div>
                            </ListItem>
                            <ListItem className="list-group-item">
                              <div>
                                <i class="fas fa-comments fa-3x text-secondary"></i>
                              </div>
                              <div>
                                <h4>
                                  Consultanță pentru înființarea business-ului
                                </h4>
                                <StyledParagraph>
                                  Aveți o idee de afacere, dar nu știți de unde
                                  să începeți? Vă oferim sprijin complet pentru
                                  înființarea firmei, de la alegerea formei
                                  juridice potrivite până la întocmirea actelor
                                  necesare și deschiderea contului bancar.
                                </StyledParagraph>
                                <UnorderedListModal>
                                  <ListItemSmall>
                                    <i class="fa-solid fa-circle-check text-primary"></i>
                                    <span className="ps-2">
                                      Alegerea tipului de firmă (SRL, PFA, etc.)
                                    </span>
                                  </ListItemSmall>
                                  <ListItemSmall>
                                    <i class="fa-solid fa-circle-check text-primary"></i>
                                    <span className="ps-2">
                                      Întocmirea și depunerea dosarului la
                                      Registrul Comerțului
                                    </span>
                                  </ListItemSmall>
                                  <ListItemSmall>
                                    <i class="fa-solid fa-circle-check text-primary"></i>
                                    <span className="ps-2">
                                      Consiliere privind codurile CAEN și
                                      specificul activității
                                    </span>
                                  </ListItemSmall>
                                </UnorderedListModal>
                              </div>
                            </ListItem>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
