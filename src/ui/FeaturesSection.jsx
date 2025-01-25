import styled from "styled-components";

const StyledSection = styled.section`
  padding-top: 5rem;
`;

const FeaturesContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const StyledText = styled.p`
  text-align: justify;
`;

function FeaturesSection() {
  return (
    <StyledSection className="icons bg-light pb-5">
      <div className="container-xl">
        <FeaturesContainer className="row hstack g-4">
          <div className="col-md-4 d-flex gap-4">
            <i className="fa-solid fa-book-open fa-3x text-primary"></i>
            <div>
              <h5 className="fw-bold">
                Informează-te despre serviciile contabile Senor Expert
              </h5>
              <StyledText className="text-muted">
                Descoperă gama noastră completă de servicii, de la contabilitate
                financiară la consultanță fiscală și salarizare. Află cum te
                putem ajuta să-ți gestionezi mai bine afacerea și să rămâi mereu
                conform cu legislația.
              </StyledText>
            </div>
          </div>

          <div className="col-md-4 d-flex gap-4">
            <i className="fa-solid fa-user-lock fa-3x text-secondary"></i>
            <div>
              <h5 className="fw-bold">
                Conectează-te folosind contul oferit de echipa noastră
              </h5>
              <StyledText className="text-muted">
                Accesează platforma noastră online cu contul tău personal pentru
                a beneficia de o experiență modernă și sigură în gestionarea
                documentelor contabile.
              </StyledText>
            </div>
          </div>

          <div className="col-md-4 d-flex gap-4">
            <i className="fa-solid fa-file-upload fa-3x text-primary"></i>
            <div>
              <h5 className="fw-bold">Încarcă online documentele contabile</h5>
              <StyledText className="text-muted">
                Simplifică procesul de transmitere a documentelor. Încarcă
                online fișierele contabile direct în platforma noastră, rapid și
                fără efort.
              </StyledText>
            </div>
          </div>
        </FeaturesContainer>
      </div>
    </StyledSection>
  );
}

export default FeaturesSection;
