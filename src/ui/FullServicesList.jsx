import styled from "styled-components";
import Modal from "./Modal";
import { useState } from "react";

const Text = styled.div`
  text-align: justify;
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
  }
`;

const removeDiacritics = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const serviceCategories = {
  "Contabilitate Generală": [
    "Inregistrarea cronologica a articolelor contabile pe baza documentelor primare",
    "Intocmirea jurnalelor de cumparari si vanzari, stabilirea TVA de plata / recuperat",
    "Intocmirea registrelor contabile si a balantelor de verificare lunare",
    "Completarea Registrului Jurnal, Registrului Inventar si a Registrului de evidenta fiscala",
    "Intocmirea jurnalelor contabile prevazute de lege: Registrul Jurnal, Registrul Inventar, Registrul Cartea Mare",
    "Evidenta analitica si sintetica clienti, furnizori",
    "Evidenta mijloace fixe, calculul amortizarii",
  ],
  "Fiscalitate și Raportare Fiscală": [
    "Intocmirea si depunerea declaratiilor privind impozitele si taxele",
    "Calculul impozitului pe profit sau a impozitului pe veniturile microintreprinderii",
    "Calculul impozitului pe dividende, intocmirea si depunerea declaratiilor privind impozitul pe dividende",
    "Intocmirea decontului de TVA si depunerea acestuia in termenele legale",
    "Intocmirea situatiilor privind inregistrarile si platile impozitelor si taxelor",
    "Balanta si bilant contabil de lichidare",
    "Stabilirea vectorului fiscal cat mai potrivit pentru a optimiza cuantumul taxelor si impozitelor la bugetul de stat si / sau bugetul asigurarilor sociale",
    "Asistenta in vederea evitarii dublei impuneri",
    "Obtinerea certificatelor fiscale",
  ],
  "Resurse Umane și Salarizare": [
    "Intocmirea statelor de plata",
    "Calculul concediilor si evidenta medicalelor",
    "Calculul si evidenta concediilor de maternitate",
    "Calculul si evidenta concediilor de odihna",
    "Intocmirea adeverintelor pentru salariati",
    "Intocmirea fisierelor pentru banci - plata pe card",
    "Plata salariilor pe card",
    "Calculul impozitelor pe salarii",
    "Calculul contributiilor de asigurari sociale de stat, asigurari sociale de sanatate, contributiei pentru accidente de munca si boli profesionale, asigurari pentru somaj",
    "Intocmirea si depunerea declaratiei unice 112 privind obligatiile de plata a contributiilor sociale si impozitului pe venitul din salarii",
    "Intocmirea dosarului de recuperare sume din concedii medicale",
    "Intocmirea si depunerea fiselor fiscale",
  ],
  "Consultanță Financiară și Contabilă": [
    "Schitarea planului de afaceri",
    "Consultanta cu privire la procedurile de inregistrare fiscala a companiei",
    "Intocmirea cashflow-ului",
    "Intocmirea bugetului de venituri si cheltuieli",
    "Elaborarea documentatiei necesare pentru obtinerea de credite",
    "Analiza situatiilor creantelor si datoriilor",
    "Consultanta privind organizarea si conducerea societatii",
    "Elaborarea procedurilor si normelor interne privind desfasurarea activitatii de baza si a activitatilor conexe",
    "Consultanta privind organizarea contabilitatii financiare si de gestiune in conformitate cu legislatia in vigoare",
  ],
  "Audit și Expertiză Contabilă": [
    "Verificarea si certificarea bilantului contabil",
    "Verificarea documentelor inregistrate in contabilitate",
    "Intocmirea de raportari contabile externe, daca specificul activitatii o impune catre parteneri, furnizori sau clienti externi",
  ],
  "Înființare și Organizare Societăți": [
    "Consultanta pentru alegerea tipului de societate si structura actionariatului",
    "Inregistrarea firmei la Registrul Comertului",
    "Obtine licentele necesare pentru functionarea firmei",
    "Consultanta privind organizarea interna a societatii, proceduri, norme interne, etc.",
  ],
};

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
    <StyledFullServicesList>
      <Text>Descoperă întreaga gamă se servicii disponibile Senor Expert!</Text>
      <Modal>
        <Modal.Open opens="modal-tabbed-component">
          <button className="btn btn-primary text-white align-self-start">
            Vezi lista completă de servicii
          </button>
        </Modal.Open>
        <Modal.Open opens="modal-price-list">
          <button className="btn btn-primary text-white align-self-start">
            Vezi lista orientativa de preturi
          </button>
        </Modal.Open>
        <Modal.Window name="modal-price-list">
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
                  Activitate cu complexitate mica - cca 20 facturi de intrare si
                  facturi iesire
                </td>
                <td>300 - 450 RON</td>
              </tr>
              <tr>
                <td>
                  Activitate cu complexitate medie - 11 - 50 facturi de intrare
                  si facturi iesire
                </td>
                <td>450 - 700 RON</td>
              </tr>
              <tr>
                <td>
                  Activitate cu complexitate mare - 50 - 200 facturi de intrare
                  si facturi iesire
                </td>
                <td>700 - 1200 RON</td>
              </tr>
              <tr>
                <td>
                  Activitate cu complexitate foarte mare - peste 200 facturi de
                  intrare si facturi iesire
                </td>
                <td>se negociaza</td>
              </tr>

              <tr>
                <td colspan="2">
                  <strong>Tarife servicii salarizare</strong>
                </td>
              </tr>
              <tr>
                <td>State de salarii, pontaje, declaratii (1-5 salariati)</td>
                <td>150 RON</td>
              </tr>
              <tr>
                <td>State de salarii, pontaje, declaratii (6-10 salariati)</td>
                <td>200 RON</td>
              </tr>
              <tr>
                <td>State de salarii, pontaje, declaratii (11-20 salariati)</td>
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
                  Contracte, decizii, acte aditionale, lichidari (1-5 salariati)
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
                  Depunere declaratii pentru somaj in situatia in care Clientul
                  beneficiaza de subventii pentru salariati
                </td>
                <td>200 RON</td>
              </tr>
              <tr>
                <td>
                  Lucrari specifice pentru participarea la licitatii publice de
                  oferte
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
                  Costuri materiale auxiliare pentru prestarea serviciilor de
                  contabilitate
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
        </Modal.Window>
        <Modal.Window name="modal-tabbed-component">
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
            Object.entries(serviceCategories).map(([category, services]) => (
              <div key={category} style={{ marginBottom: "15px" }}>
                <h3>{category}</h3>
                <ul>
                  {services.slice(0, 2).map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                  {services.length > 2 && <li>...mai mult</li>}
                </ul>
              </div>
            ))
          )}
        </Modal.Window>
      </Modal>
    </StyledFullServicesList>
  );
}

export default FullServicesList;
