import styled from "styled-components";

const StyledUploadSteps = styled.div`
  color: white;
  z-index: 100;
  padding-bottom: 5rem;
`;

const ContainerSteps = styled.div`
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

const Text = styled.div``;

function UploadSteps() {
  return (
    <StyledUploadSteps className="container-fluid">
      <div className="container">
        <ContainerSteps className="row vstack">
          <div className="col-md-4">
            <h4>
              <i class="bi bi-1-circle-fill pe-2"></i>
              Apasă butonul "Încarcă documente"
            </h4>
            {/* <Text>Apasă butonul "Încarcă documente" de mai jos.</Text> */}
          </div>
          <div className="col-md-4">
            <h4>
              <i class="bi bi-2-circle-fill pe-2"></i>
              Completează formularul cu atenție
            </h4>
          </div>
          <div className="col-md-4">
            <h4>
              <i class="bi bi-3-circle-fill pe-2"></i>
              Apasă butonul "Trimite"
            </h4>
          </div>
        </ContainerSteps>
      </div>
    </StyledUploadSteps>
  );
}

export default UploadSteps;
