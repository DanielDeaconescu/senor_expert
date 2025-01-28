import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import UploadSteps from "../ui/UploadSteps";

import UploadDocuments from "../features/upload/UploadDocuments";
import WhatsAppButton from "../ui/WhatsAppButton";

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function UploadPage() {
  return (
    <div>
      <Main>
        <UploadSteps />
        <UploadDocuments />
      </Main>
      <WhatsAppButton />
    </div>
  );
}

export default UploadPage;
