import styled from "styled-components";
import useDocuments from "./useDocuments";
import DocumentSingle from "../ui/DocumentSingle";

const DocumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function AdminPage() {
  const { isLoading, documents } = useDocuments();
  console.log(documents);
  return (
    <DocumentsContainer>
      {documents?.map((doc) => (
        <DocumentSingle
          companyName={doc.company_name}
          month={doc.month}
          documents={doc.documents}
          key={doc.id}
        />
      ))}
    </DocumentsContainer>
  );
}

export default AdminPage;
