import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import UploadSteps from "../ui/UploadSteps";

import UploadDocuments from "../features/upload/UploadDocuments";
import WhatsAppButton from "../ui/WhatsAppButton";

const LogoutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function UploadPage() {
  return (
    <div>
      <LogoutContainer className="container">
        <Logout />
      </LogoutContainer>
      <Main>
        <UploadSteps />
        <UploadDocuments />
      </Main>
      <WhatsAppButton />
    </div>
  );
}

export default UploadPage;
