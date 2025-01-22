import styled from "styled-components";
import useDocuments from "./useDocuments";
import DocumentSingle from "../ui/DocumentSingle";
import { useEffect } from "react";
import supabase from "../services/supabase";

const DocumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function AdminPage() {
  const { isLoading, documents } = useDocuments();

  return (
    <DocumentsContainer className="container">
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
