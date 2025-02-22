import styled from "styled-components";
import { BsFillInfoSquareFill } from "react-icons/bs";
import Modal from "./Modal";
import { useState } from "react";
import ContactForm from "./ContactForm";

const Text = styled.div`
  text-align: justify;
`;

const IconContainer = styled.div``;

const InfoNote = styled.div`
  color: var(--clr-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem 1rem 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
  }

  @media (min-width: 992px) {
    padding: 2rem 7rem;
  }
`;

const InfoNoteText = styled.span`
  color: var(--color-grey-700);
  padding-left: 0.5rem;

  /* max-width: 60%; */
  text-align: justify;

  @media (max-width: 576px) {
    text-align: center;
    max-width: 100%;
    font-size: 1.1rem;
  }
`;

const FullServicesListContainer = styled.div``;

const SearchServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

const StyledFullServicesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

const ModalButton = styled.button`
  @media (max-width: 576px) {
    margin: auto;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    margin: auto;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    margin: auto;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    margin: auto;
  }
`;

const removeDiacritics = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const serviceCategories = {
  "Contabilitate Generală": [
    "Înregistrarea cronologică a operațiunilor contabile pe baza documentelor justificative",
    "Determinarea TVA de plată sau de recuperat",
    "Elaborarea jurnalelor contabile obligatorii (Registrul Jurnal, Registrul Inventar, Registrul Cartea Mare)",
    "Pregătirea balanței de verificare și a balanțelor analitice",
    "Gestionarea analitică și sintetică a relațiilor cu clienții și furnizorii",
    "Evidența activelor fixe și calculul amortizării",
    "Verificarea documentelor contabile înregistrate",
    "Redactarea și verificarea bilanțului contabil",
    "Monitorizarea stocurilor prin evidența global-valorică și balanțe analitice",
    "Certificarea bilanțului contabil",
    "Elaborarea balanței și bilanțului pentru lichidare",
  ],
  "Fiscalitate și Raportare Fiscală": [
    "Completarea și depunerea declarațiilor fiscale",
    "Calculul taxelor și impozitelor datorate statului (impozit pe profit, venit, dividende și altele)",
    "Redactarea și depunerea decontului de TVA",
    "Informări periodice despre modificările legislative fiscale",
    "Optimizarea fiscală prin stabilirea vectorului fiscal adecvat",
    "Asistență pentru evitarea dublei impuneri",
    "Completarea și transmiterea declarației unice 112",
    "Suport în timpul controalelor fiscale",
    "Calcularea impozitului pe profit sau pe venitul microîntreprinderii, în funcție de caz, și depunerea declarațiilor aferente",
    "Determinarea și raportarea impozitului pe dividende",
    "Pregătirea raportărilor contabile externe necesare pentru partenerii internaționali",
    "Informarea conducerii despre reglementările fiscale și contabile aplicabile",
    "Notificări regulate privind modificările legislative relevante pentru beneficiar",
    "Obținerea certificatelor fiscale",
    "Elaborarea altor documente sau rapoarte impuse de legislație",
  ],
  "Resurse Umane și Salarizare": [
    "Întocmirea statelor de plată și calculul salariilor",
    "Depunerea declarațiilor rectificative",
    "Calcularea și evidența concediilor medicale",
    "Gestionarea concediilor de maternitate",
    "Administrarea concediilor de odihnă",
    "Pregătirea și depunerea fișelor fiscale",
    "Redactarea și gestionarea contractelor individuale de muncă și a actelor adiționale",
    "Întocmirea registrului general de evidență a salariaților (REVISAL)",
    "Emiterea adeverințelor pentru salariați",
    "Consultanță privind salarizarea și gestionarea dosarelor de personal",
    "Generarea fișierelor pentru plata salariilor pe card",
    "Efectuarea plăților salariilor pe card",
    "Calcularea impozitelor aferente salariilor",
    "Determinarea și raportarea contribuțiilor sociale obligatorii (asigurări sociale de stat, sănătate, accidente de muncă, șomaj etc.)",
    "Pregătirea și depunerea declarației unice 112 privind obligațiile fiscale aferente salariilor",
    "Elaborarea dosarelor pentru recuperarea sumelor aferente concediilor medicale",
    "Redactarea contractelor individuale de muncă",
    "Întocmirea actelor adiționale la contractele de muncă",
    "Administrarea registrului general de evidență a salariaților",
    "Întocmirea notelor de lichidare pentru personal",
    "Arhivarea și urmărirea dosarelor de personal",
    "Consiliere privind politica salarială",
    "Gestionarea modificărilor salariale, a funcției, a normei de lucru sau a duratei contractului",
    "Asistență în relația cu AJOFM (facilități, posturi vacante etc.)",
    "Pregătirea documentației pentru obținerea repartițiilor de la AJOFM",
    "Obținerea listei posturilor vacante de la AJOFM",
    "Elaborarea dosarelor pentru facilități acordate de AJOFM",
    "Consultanță privind salarizarea și organizarea resurselor umane la nivel de companie",
  ],
  "Consultanță Financiară și Contabilă": [
    "Informarea periodică a managementului cu privire la situația economică și financiară a companiei.",
    "Oferirea de consultanță pentru organizarea contabilității financiare și de gestiune.",
    "Redactarea bugetului de venituri și cheltuieli.",
    "Evaluarea creanțelor și datoriilor societății.",
    "Crearea unei schițe pentru planul de afaceri.",
    "Pregătirea documentației necesare accesării de credite.",
  ],
  "Expertiză Contabilă": [
    "Realizarea de expertize contabile extrajudiciare.",
    "Analiza patrimoniului firmei.",
    "Verificarea și certificarea bilanțului contabil.",
    "Redactarea rapoartelor financiare semestriale.",
    "Elaborarea situațiilor financiare anuale simplificate.",
    "Efectuarea de reconciliere contabilă cu administrația fiscală.",
  ],
  "Înființare și Organizare Societăți": [
    "Asistență pentru înregistrarea fiscală a companiei.",
    "Consiliere pentru alegerea regimului fiscal privind TVA-ul (plătitor sau neplătitor).",
    "Redactarea regulamentului intern și a procedurilor operaționale.",
    "Structurarea și organizarea departamentului financiar-contabil.",
  ],
};

const TableContainer = styled.div`
  height: 70vh;
  width: 750px;
`;

const StyledContactFormButton = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: darkgray;
  color: white;

  &:hover {
    background-color: grey;
  }
`;

const ContactFormContainer = styled.div`
  height: 70vh;
`;

function FullServicesList() {
  const [query, setQuery] = useState("");

  // Flatten all services with their categories for searching
  const allServices = Object.entries(serviceCategories).flatMap(
    ([category, services]) => services.map((service) => ({ category, service }))
  );

  // Filter services based on search query
  const filteredServices = query
    ? allServices.filter(({ service }) =>
        removeDiacritics(service)
          .toLowerCase()
          .includes(removeDiacritics(query).toLowerCase())
      )
    : [];

  return (
    <FullServicesListContainer className="container">
      <StyledFullServicesList>
        <div>
          <Text>
            Descoperă întreaga gamă de servicii disponibile Senor Expert!
          </Text>
        </div>
        <Modal>
          <Modal.Open opens="modal-tabbed-component">
            <ModalButton className="btn btn-primary text-white align-self-start">
              Vezi lista completă de servicii
            </ModalButton>
          </Modal.Open>
          <Modal.Open opens="modal-price-list">
            <ModalButton className="btn btn-primary text-white align-self-start">
              Vezi lista orientativa de preturi
            </ModalButton>
          </Modal.Open>
          <Modal.Window name="modal-price-list">
            <TableContainer>
              <table border="1" cellspacing="0" cellpadding="5">
                <thead>
                  <tr>
                    <th>Serviciu</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">
                      <strong>
                        Obtinere certificat / inregistrare in scopuri de TVA
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Pentru cetateni romani</td>
                    <td>100 EURO</td>
                  </tr>

                  <tr>
                    <td colspan="2">
                      <strong>Tarife contabilitate</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Activitate cu complexitate mica - cca 20 facturi de
                      intrare si facturi iesire
                    </td>
                    <td>300 - 450 RON</td>
                  </tr>
                  <tr>
                    <td>
                      Activitate cu complexitate medie - 11 - 50 facturi de
                      intrare si facturi iesire
                    </td>
                    <td>450 - 700 RON</td>
                  </tr>
                  <tr>
                    <td>
                      Activitate cu complexitate mare - 50 - 200 facturi de
                      intrare si facturi iesire
                    </td>
                    <td>700 - 1200 RON</td>
                  </tr>
                  <tr>
                    <td>
                      Activitate cu complexitate foarte mare - peste 200 facturi
                      de intrare si facturi iesire
                    </td>
                    <td>se negociaza</td>
                  </tr>

                  <tr>
                    <td colspan="2">
                      <strong>Tarife servicii salarizare</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      State de salarii, pontaje, declaratii (1-5 salariati)
                    </td>
                    <td>150 RON</td>
                  </tr>
                  <tr>
                    <td>
                      State de salarii, pontaje, declaratii (6-10 salariati)
                    </td>
                    <td>200 RON</td>
                  </tr>
                  <tr>
                    <td>
                      State de salarii, pontaje, declaratii (11-20 salariati)
                    </td>
                    <td>250 RON</td>
                  </tr>
                  <tr>
                    <td>
                      State de salarii, pontaje, declaratii (peste 20 salariati)
                    </td>
                    <td>se negociaza</td>
                  </tr>
                  <tr>
                    <td>
                      Contracte, decizii, acte aditionale, lichidari (1-5
                      salariati)
                    </td>
                    <td>50 RON</td>
                  </tr>
                  <tr>
                    <td>
                      Contracte, decizii, acte aditionale, lichidari (6-10
                      salariati)
                    </td>
                    <td>100 RON</td>
                  </tr>
                  <tr>
                    <td>
                      Contracte, decizii, acte aditionale, lichidari (11-20
                      salariati)
                    </td>
                    <td>200 RON</td>
                  </tr>
                  <tr>
                    <td>
                      Contracte, decizii, acte aditionale, lichidari (peste 20
                      salariati)
                    </td>
                    <td>se negociaza</td>
                  </tr>
                  <tr>
                    <td>Intocmire fisa fiscala / salariat</td>
                    <td>25 RON</td>
                  </tr>

                  <tr>
                    <td colspan="2">
                      <strong>Certificare bilant</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Cifra de afaceri 100.000 RON</td>
                    <td>250 RON</td>
                  </tr>
                  <tr>
                    <td>100.001 RON Cifra de Afaceri 200.000 RON</td>
                    <td>400 RON</td>
                  </tr>
                  <tr>
                    <td>200.001 RON Cifra de Afaceri 450.000 RON</td>
                    <td>600 RON</td>
                  </tr>
                  <tr>
                    <td>450.001 RON Cifra de Afaceri</td>
                    <td>se negociaza</td>
                  </tr>

                  <tr>
                    <td colspan="2">
                      <strong>Alte servicii</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Deplasare pentru ridicare acte</td>
                    <td>200 RON</td>
                  </tr>
                  <tr>
                    <td>
                      Depunere declaratii pentru somaj in situatia in care
                      Clientul beneficiaza de subventii pentru salariati
                    </td>
                    <td>200 RON</td>
                  </tr>
                  <tr>
                    <td>
                      Lucrari specifice pentru participarea la licitatii publice
                      de oferte
                    </td>
                    <td>250 - 350 RON</td>
                  </tr>
                  <tr>
                    <td>
                      Analiza financiar-contabila asupra activitatii economice
                    </td>
                    <td>400 - 650 RON</td>
                  </tr>
                  <tr>
                    <td>
                      Onorariu fix pentru intocmire si depunere declaratii firme
                      fara activitate
                    </td>
                    <td>600 RON / an (200 RON / trimestru)</td>
                  </tr>
                  <tr>
                    <td>
                      Costuri materiale auxiliare pentru prestarea serviciilor
                      de contabilitate
                    </td>
                    <td>50 RON / an</td>
                  </tr>

                  <tr>
                    <td colspan="2">
                      <strong>
                        Tarife contabilitate pentru Persoana Fizica Autorizata
                        platitoare de TVA
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Pana la 50 documente lunar</td>
                    <td>450 RON</td>
                  </tr>
                  <tr>
                    <td>Intre 51 - 100 documente lunar</td>
                    <td>700 RON</td>
                  </tr>
                  <tr>
                    <td>Intre 101 - 200 documente lunar</td>
                    <td>1000 RON</td>
                  </tr>
                  <tr>
                    <td>Tariful pentru peste 200 de documente lunar</td>
                    <td>se negociaza</td>
                  </tr>

                  <tr>
                    <td colspan="2">
                      <strong>
                        Tarife contabilitate pentru Persoana Fizica Autorizata
                        neplatitoare de TVA
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Pana la 50 documente lunar</td>
                    <td>350 RON</td>
                  </tr>
                  <tr>
                    <td>Intre 51 - 100 documente lunar</td>
                    <td>600 RON</td>
                  </tr>
                  <tr>
                    <td>Intre 101 - 200 documente lunar</td>
                    <td>800 RON</td>
                  </tr>
                  <tr>
                    <td>Tariful pentru peste 200 de documente lunar</td>
                    <td>se negociaza</td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
          </Modal.Window>
          <Modal.Window name="modal-tabbed-component">
            <SearchServicesContainer>
              <input
                type="text"
                placeholder="Caută un serviciu..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
              />
              {query ? (
                <ul>
                  {filteredServices.length > 0 ? (
                    filteredServices.map(({ service, category }, index) => (
                      <li key={index}>
                        <strong>{category}:</strong> {service}
                      </li>
                    ))
                  ) : (
                    <li>Niciun serviciu găsit.</li>
                  )}
                </ul>
              ) : (
                Object.entries(serviceCategories).map(
                  ([category, services]) => (
                    <div key={category} style={{ marginBottom: "15px" }}>
                      <h3>{category}</h3>
                      <ul>
                        {services.slice(0, 2).map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                        {services.length > 2 && <li>...mai mult</li>}
                      </ul>
                    </div>
                  )
                )
              )}
            </SearchServicesContainer>
          </Modal.Window>
        </Modal>
      </StyledFullServicesList>
      <InfoNote>
        <div>
          <BsFillInfoSquareFill className="info-icon" />
        </div>
        <InfoNoteText>
          Tarifele afișate pe această pagină sunt orientative și pot varia în
          funcție de mai mulți factori, precum volumul de documente procesate,
          complexitatea activității contabile și cerințele specifice ale
          fiecărei firme. Pentru o ofertă personalizată, adaptată nevoilor
          afacerii dumneavoastră, vă invităm să ne contactați folosind următorul{" "}
          <Modal>
            <Modal.Open>
              <StyledContactFormButton>
                Formular de contact
              </StyledContactFormButton>
            </Modal.Open>
            <Modal.Window>
              <ContactFormContainer>
                <ContactForm />
              </ContactFormContainer>
            </Modal.Window>
          </Modal>
        </InfoNoteText>
      </InfoNote>
    </FullServicesListContainer>
  );
}

export default FullServicesList;
