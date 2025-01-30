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
              <h5 className="fw-bold">Informează-te</h5>
              <StyledText className="text-muted">
                Află care sunt toate serviciile oferite de Senor Expert, precum
                și prețurile orientative ale serviciilor, astfel încât să-ți
                faci o idee despre eventualele costuri.
              </StyledText>
            </div>
          </div>

          <div className="col-md-4 d-flex gap-4">
            <i className="fa-solid fa-user-lock fa-3x text-secondary"></i>
            <div>
              <h5 className="fw-bold">Conectează-te</h5>
              <StyledText className="text-muted">
                Dacă îți place tehnologia, îți putem crea un cont pe platforma
                noastră și poți încărca aici o parte din documentele contabile
                ale afacerii tale.
              </StyledText>
            </div>
          </div>

          <div className="col-md-4 d-flex gap-4">
            <i className="fa-solid fa-file-upload fa-3x text-primary"></i>
            <div>
              <h5 className="fw-bold">Încarcă documente</h5>
              <StyledText className="text-muted">
                Ai uitat să aduci un document contabil când ai predat
                documentele la sediul nostru? Încarcă documentul care lipsește
                online și ești scutit de un drum.
              </StyledText>
            </div>
          </div>
        </FeaturesContainer>
      </div>
    </StyledSection>
  );
}

export default FeaturesSection;
