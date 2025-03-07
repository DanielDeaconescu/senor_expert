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
              <h5 className="fw-bold">Informați-vă</h5>
              <StyledText className="text-muted">
                Aflați care sunt toate serviciile oferite de Senor Expert,
                precum și <strong>prețurile orientative</strong> ale acestora,
                astfel încât să aveți o idee despre eventualele costuri.
              </StyledText>
            </div>
          </div>

          <div className="col-md-4 d-flex gap-4">
            <i className="fa-solid fa-user-lock fa-3x text-secondary"></i>
            <div>
              <h5 className="fw-bold">Conectați-vă</h5>
              <StyledText className="text-muted">
                Dacă vă place tehnologia, vă putem crea un{" "}
                <strong>cont pe platforma noastră</strong> și veți putea încărca
                aici o parte dintre documentele contabile ale afacerii
                dumneavoastră.
              </StyledText>
            </div>
          </div>

          <div className="col-md-4 d-flex gap-4">
            <i className="fa-solid fa-file-upload fa-3x text-primary"></i>
            <div>
              <h5 className="fw-bold">Încarcărcați documente</h5>
              <StyledText className="text-muted">
                Dacă ați uitat să aduceți un document contabil când ați predat
                dosarul la sediul nostru, puteți <strong>încărca online</strong>{" "}
                documentul și vă scutim de un drum.
              </StyledText>
            </div>
          </div>
        </FeaturesContainer>
      </div>
    </StyledSection>
  );
}

export default FeaturesSection;
