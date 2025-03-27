import styled from "styled-components";

const PrivacyPolicyContainer = styled.div`
  padding: 3rem 0 3rem 0;

  @media (max-width: 576px) {
    padding: 3rem 2.5rem;
  }
`;

const BoldParagraph = styled.p`
  font-weight: bold;
  text-align: justify;
`;

const StyledParagraph = styled.p`
  text-align: justify;
`;

function PrivacyPolicy() {
  return (
    <PrivacyPolicyContainer className="container">
      <h1>Politica de Cookie-uri</h1>

      <h2>1. Ce sunt cookie-urile?</h2>
      <StyledParagraph>
        Cookie-urile sunt fișiere text de mici dimensiuni pe care site-urile le
        folosesc pentru a reține informații despre activitățile și preferințele
        dumneavoastră. Acestea pot fi utilizate pentru a personaliza experiența
        utilizatorilor, pentru a analiza traficul sau pentru a îmbunătăți
        funcționarea site-ului.
      </StyledParagraph>

      <h2>2. Utilizarea cookie-urilor pe site-ul Senor Expert</h2>
      <BoldParagraph>
        În prezent, <a href="https://senorexpert.ro">senorexpert.ro</a> nu
        folosește cookie-uri. Nu colectăm date despre activitatea utilizatorilor
        pe site și nu stocăm informații personale prin intermediul
        cookie-urilor.
      </BoldParagraph>

      <StyledParagraph>
        Dacă în viitor vom implementa cookie-uri pentru îmbunătățirea
        funcționalității sau a experienței utilizatorilor noștri, această
        politică va fi actualizată pentru a reflecta noile practici.
      </StyledParagraph>

      <h2>3. Modificări ale politicii de cookie-uri</h2>
      <StyledParagraph>
        Această politică poate fi actualizată în cazul în care site-ul nostru va
        începe să utilizeze cookie-uri. Vă încurajăm să verificați periodic
        această pagină pentru a rămâne informați despre modul în care gestionăm
        datele dumneavoastră.
      </StyledParagraph>
    </PrivacyPolicyContainer>
  );
}

export default PrivacyPolicy;
