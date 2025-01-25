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
`;

const StyledSagaLogo = styled.img`
  max-width: 60px;
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
`;

const ListItemSmall = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
                Alături de serviciile de contabilitate clasice pe care le
                oferim, ne-am folsit de experiența cumulată de-a lungul timpului
                pentru a integra și consultanța.
              </StyledParagraph>
              <StyledParagraph>
                De la asistență în implementarea măsurilor impuse de legislația
                în vigoare și până la explicarea conceptelor de business și
                contabilitate, ne străduim să oferim consultanță personalizată
                astfel încât fiecare client să aibă parte de suportul necesar
                pentru a naviga
              </StyledParagraph>
              <ul className="list-group list-group-flush lh-lg">
                <li className="list-group-item">
                  <Title>
                    <i class="fa-solid fa-laptop fa-2x text-primary"></i>
                    <strong>Asistență program de contabilitate SAGA</strong>
                  </Title>
                  <div>
                    <ul>
                      <ListItem>
                        <i class="fa-solid fa-circle-check text-primary"></i>
                        <span>Instalare program SAGA</span>
                      </ListItem>
                      <ListItem>
                        <i class="fa-solid fa-circle-check text-primary"></i>
                        <span>Instalare licență</span>
                      </ListItem>
                      <ListItem>
                        <i class="fa-solid fa-circle-check text-primary"></i>
                        <span>Asistență la creare facturilor</span>
                      </ListItem>
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
                    Punem la dispoziție sprijin pentru alegerea formei juridice
                    potrivite, elaborarea actelor necesare și organizarea
                    proceselor interne.
                  </StyledParagraph>
                </li>
              </ul>
              <Modal>
                <Modal.Open opens="modal-2">
                  <button className="btn btn-primary text-white mt-4 align-self-start">
                    Află mai mult
                  </button>
                </Modal.Open>
                <Modal.Window name="modal-2">
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
                              vorba despre instalare, configurarea conturilor
                              contabile sau utilizarea avansată a funcțiilor
                              software-ului, suntem aici să vă ghidăm pas cu
                              pas.
                            </StyledParagraph>

                            <ul>
                              <ListItemSmall>
                                <i class="fa-solid fa-circle-check text-primary"></i>
                                <span>
                                  Economisiți timp prin utilizarea eficientă a
                                  programului.
                                </span>
                              </ListItemSmall>
                              <ListItemSmall>
                                <i class="fa-solid fa-circle-check text-primary"></i>
                                <span>
                                  Evitați erorile contabile frecvente.
                                </span>
                              </ListItemSmall>
                              <ListItemSmall>
                                <i class="fa-solid fa-circle-check text-primary"></i>
                                <span>
                                  Configurație personalizată pentru afacerea
                                  dvs.
                                </span>
                              </ListItemSmall>
                            </ul>
                          </div>
                        </ListItem>
                        <ListItem className="list-group-item">
                          <div>
                            <i class="fa-solid fa-gavel fa-3x text-primary"></i>
                          </div>
                          <div>
                            <h4>Conformitate cu legislația în vigoare</h4>
                            <StyledParagraph>
                              Vă ajutăm să respectați toate cerințele legale și
                              reglementările fiscale în vigoare. Rămânem mereu
                              la curent cu modificările legislative pentru a vă
                              oferi consultanță actualizată și soluții care să
                              vă protejeze afacerea.
                            </StyledParagraph>
                            <ul>
                              <ListItemSmall>
                                <i class="fa-solid fa-circle-check text-primary"></i>
                                <span>
                                  Verificare periodică a documentelor și
                                  proceselor contabile.
                                </span>
                              </ListItemSmall>
                              <ListItemSmall>
                                <i class="fa-solid fa-circle-check text-primary"></i>
                                <span>
                                  Consultanță pentru întocmirea declarațiilor
                                  fiscale.
                                </span>
                              </ListItemSmall>
                              <ListItemSmall>
                                <i class="fa-solid fa-circle-check text-primary"></i>
                                <span>
                                  Sprijin în pregătirea pentru controalele
                                  autorităților fiscale.
                                </span>
                              </ListItemSmall>
                            </ul>
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
                              Aveți o idee de afacere, dar nu știți de unde să
                              începeți? Vă oferim sprijin complet pentru
                              înființarea firmei, de la alegerea formei juridice
                              potrivite până la întocmirea actelor necesare și
                              deschiderea contului bancar.
                            </StyledParagraph>
                            <ul>
                              <ListItemSmall>
                                <i class="fa-solid fa-circle-check text-primary"></i>
                                Alegerea tipului de firmă (SRL, PFA, etc.)
                              </ListItemSmall>
                              <ListItemSmall>
                                <i class="fa-solid fa-circle-check text-primary"></i>
                                Întocmirea și depunerea dosarului la Registrul
                                Comerțului.
                              </ListItemSmall>
                              <ListItemSmall>
                                <i class="fa-solid fa-circle-check text-primary"></i>
                                Consiliere privind codurile CAEN și specificul
                                activității.
                              </ListItemSmall>
                            </ul>
                          </div>
                        </ListItem>
                      </ul>
                    </div>
                  </div>
                </Modal.Window>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
