import styled from "styled-components";

const StyledUploadSteps = styled.div`
  color: white;
  z-index: 100;
  padding-bottom: 5rem;
`;

const ContainerSteps = styled.div`
  gap: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div``;

const Step = styled.div`
  /* display: flex;
  flex-direction: column;
  @media (min-width: 768px) and (max-width: 1400px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
`;

const SmallElement = styled.small`
  display: flex;
  justify-content: center;
  width: 45%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

function UploadSteps() {
  return (
    <StyledUploadSteps className="container-fluid">
      <div className="container">
        <ContainerSteps className="row vstack text-center">
          <Step className="col-sm-12">
            <h4>
              <i class="bi bi-1-circle-fill pe-2"></i>
              Apasă butonul "Încarcă documente"
            </h4>
            {/* <Text>Apasă butonul "Încarcă documente" de mai jos.</Text> */}
          </Step>
          <Step className="col-sm-12">
            <h4>
              <i class="bi bi-2-circle-fill pe-2"></i>
              Completează formularul cu atenție
            </h4>
            <SmallElement className="m-auto">
              <span className="pe-2">
                <i class="fa-solid fa-circle-info"></i>
              </span>
              Pentru a încărca mai multe documente simultan, țineți apăsat
              butonul "Ctrl" (butonul de Control din partea de stânga jos a
              tastaturii) la selectarea documentelor.
            </SmallElement>
          </Step>
          <Step className="col-sm-12">
            <h4>
              <i class="bi bi-3-circle-fill pe-2"></i>
              Apasă butonul "Trimite"
            </h4>
          </Step>
        </ContainerSteps>
      </div>
    </StyledUploadSteps>
  );
}

export default UploadSteps;
