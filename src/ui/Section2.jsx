import { useState } from "react";
import Section2Modal from "../data/images/section2-modal.jpg";
import Modal from "./Modal";
import Section2SideImage from "../data/images/section2-side-image.jpg";
import styled from "styled-components";

const StyledText = styled.div`
  text-align: justify;
`;

const StyledTextModal = styled.div`
  text-align: justify;
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
  @media (max-width: 768px) {
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
`;

const ListItem = styled.li`
  text-align: center;
`;

function Section2() {
  return (
    <>
      <section id="details" className="details my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container d-flex flex-column justify-content-center h-100">
                <h2 className="display-6">Despre Senor Expert</h2>
                <StyledText>
                  Senor Expert oferă soluții complete și profesioniste pentru
                  gestionarea financiară a afacerii tale. Cu o echipă dedicată
                  și o experiență vastă în domeniul contabilității, suntem aici
                  să te sprijinim în luarea celor mai bune decizii financiare.
                  Ne adaptăm nevoilor tale și îți oferim servicii personalizate
                  pentru succesul afacerii tale.
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
                      și raportarea conform legislației în vigoare
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
                      Îți oferim soluții personalizate pentru optimizarea
                      fiscală și respectarea obligațiilor legale, reducând
                      riscurile și costurile inutile.
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
                      ajutându-te să iei decizii strategice bazate pe o imagine
                      clară a performanței afacerii tale.
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
                      economisești timp și să te concentrezi pe echipa ta.
                    </StyledText>
                  </li>
                </ul>
                <Modal>
                  <Modal.Open opens="modal-1">
                    <button className="btn btn-primary text-white mt-4 align-self-start">
                      Află mai mult
                    </button>
                  </Modal.Open>
                  <Modal.Window name="modal-1">
                    <div className="container">
                      <ModalTitle>Valorile noastre</ModalTitle>
                      <StyledTextModal>
                        Valorile noastre stau la baza fiecărei colaborări:
                        profesionalismul în tot ceea ce facem, transparența în
                        comunicare și acțiuni, și angajamentul față de relații
                        de lungă durată. Aceste principii ne ghidează în
                        atingerea celor mai bune rezultate.
                      </StyledTextModal>
                      <ul className="list-group list-group-flush lh-lg">
                        <ListItem className="list-group-item">
                          <ItemTitle>
                            <i class="fa-solid fa-address-card"></i>
                            <h4>Profesionalism</h4>
                          </ItemTitle>
                          <ItemText>
                            Ne dedicăm oferirii unor servicii contabile la cele
                            mai înalte standarde de calitate, respectând
                            legislația în vigoare și cele mai bune practici din
                            domeniu.
                          </ItemText>
                        </ListItem>
                        <ListItem className="list-group-item">
                          <ItemTitle>
                            <i class="fas fa-eye"></i>
                            <h4>Transparență</h4>
                          </ItemTitle>
                          <ItemText>
                            Construim relații bazate pe încredere, oferind
                            soluții contabile clare, corecte și transparente
                            pentru afacerea dumneavoastră.
                          </ItemText>
                        </ListItem>

                        <ListItem className="list-group-item ">
                          <ItemTitle>
                            <i class="fas fa-handshake"></i>
                            <h4>Relații de Lungă Durată</h4>
                          </ItemTitle>
                          <ItemText>
                            Construim parteneriate durabile, bazate pe
                            comunicare eficientă și sprijin constant, pentru
                            succesul clienților noștri.
                          </ItemText>
                        </ListItem>
                      </ul>
                    </div>
                  </Modal.Window>
                </Modal>
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
