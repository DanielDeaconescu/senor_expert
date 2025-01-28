import styled from "styled-components";

const StyledUploadSteps = styled.div`
  padding: 5rem;
`;

const Text = styled.div``;

function UploadSteps() {
  return (
    <StyledUploadSteps className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Pasul 1</h4>
            <Text>Apasă butonul "Încarcă documente" de mai jos.</Text>
          </div>
          <div className="col-md-4">
            <h4>Pasul 2</h4>
            <p>Completează cu atenție formularul.</p>
          </div>
          <div className="col-md-4">
            <h4>Pasul 3</h4>
            <p>Apasă butonul "Trimite".</p>
          </div>
        </div>
      </div>
    </StyledUploadSteps>
  );
}

export default UploadSteps;
