import { useState } from "react";
import Section2Modal from "../data/images/section2-modal.jpg";
import Modal from "./Modal";
import Section2SideImage from "../data/images/section2-side-image.jpg";
import styled from "styled-components";

const StyledText = styled.div`
  text-align: justify;
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

const ItemText = styled.div`
  display: flex;
  line-height: 1.5;
`;

const ListItem = styled.li`
  width: 500px;
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
                      <h4>Valorile noastre</h4>
                      <StyledText>
                        Valorile noastre stau la baza fiecărei colaborări:
                        profesionalismul în tot ceea ce facem, transparența în
                        comunicare și acțiuni, și angajamentul față de relații
                        de lungă durată. Aceste principii ne ghidează în
                        atingerea celor mai bune rezultate.
                      </StyledText>
                      <ul className="list-group list-group-flush lh-lg">
                        <li className="list-group-item">
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

// function Section2() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <section id="details" className="details my-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="text-container d-flex flex-column justify-content-center h-100">
//               <h2 className="display-6">Unlock Your Blogging Potential</h2>
//               <p>
//                 Are you ready to unleash your true blogging potential? Our
//                 ebook, "Blog Mastery," provides you with the tools and knowledge
//                 to take your blog to the next level.
//               </p>
//               <ul className="list-group list-group-flush lh-lg">
//                 <li className="list-group-item">
//                   <i className="fas fa-square text-primary"></i>
//                   <strong>Unleash Your Creativity:</strong> Our ebook empowers
//                   you to unleash your creativity and express your unique voice
//                   through your blog.
//                 </li>
//                 <li className="list-group-item">
//                   <i className="fas fa-square text-primary"></i>
//                   <strong>Maximize Your Reach:</strong> Learn how to optimize
//                   your blog for search engines.
//                 </li>
//                 <li className="list-group-item">
//                   <i className="fas fa-square text-primary"></i>
//                   <strong>Monetization Strategies:</strong> Discover various
//                   monetization strategies, such as sponsored content & affiliate
//                   marketing.
//                 </li>
//               </ul>

//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="btn btn-primary text-white mt-4 align-self-start"
//               >
//                 Get your copy now
//               </button>

//               {isModalOpen && (
//                 <Modal onClose={() => setIsModalOpen(false)}>
//                   <div className="row">
//                     <div className="col-lg-6">
//                       <div className="image-container">
//                         <img
//                           className="img-fluid"
//                           src={AccountingPic1}
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6">
//                       <div className="text-container">
//                         <h2 className="display-6">
//                           Unlock Your Blogging Potential
//                         </h2>
//                         <p>
//                           Are you ready to unleash your true blogging potential?
//                           Our ebook, "Blog Mastery," provides you with the tools
//                           and knowledge to take your blog to the next level.
//                         </p>
//                         <ul className="list-group list-group-flush lh-lg">
//                           <li className="list-group-item">
//                             <i className="fas fa-square text-primary"></i>
//                             <strong>Unleash Your Creativity:</strong> Our ebook
//                             empowers you to unleash your creativity and express
//                             your unique voice through your blog.
//                           </li>
//                           <li className="list-group-item">
//                             <i className="fas fa-square text-primary"></i>
//                             <strong>Maximize Your Reach:</strong> Learn how to
//                             optimize your blog for search engines.
//                           </li>
//                           <li className="list-group-item">
//                             <i className="fas fa-square text-primary"></i>
//                             <strong>Monetization Strategies:</strong> Discover
//                             various monetization strategies, such as sponsored
//                             content & affiliate marketing.
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </Modal>
//               )}
//             </div>
//           </div>

//           <div className="col-lg-6">
//             <div className="image-container p-5">
//               <img src={descriptionImg} className="img-fluid" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default Section2;
