import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import UploadSteps from "../ui/UploadSteps";
import UploadPageBackground from "../data/images/upload-page-background.jpg";

import UploadDocuments from "../features/upload/UploadDocuments";
import WhatsAppButton from "../ui/WhatsAppButton";

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${UploadPageBackground});
  background-position: center;
  background-size: cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
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
