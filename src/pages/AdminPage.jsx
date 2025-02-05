import styled from "styled-components";
import useDocuments from "./useDocuments";
import DocumentSingle from "../ui/DocumentSingle";
import { useEffect } from "react";
import supabase from "../services/supabase";
import Modal from "../ui/Modal";
import SingupForm from "../features/authentication/SignupForm";

const DocumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 5rem;
  background-color: lightblue;
`;

const CreateUserButton = styled.button`
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
`;

function AdminPage() {
  const { isLoading, documents } = useDocuments();

  return (
    <DocumentsContainer className="container-fluid">
      <div className="container">
        <Modal>
          <Modal.Open opens="modal-create-user">
            <CreateUserButton>Creare utilizator</CreateUserButton>
          </Modal.Open>
          <Modal.Window name="modal-create-user">
            <SingupForm />
          </Modal.Window>
        </Modal>
        {documents?.map((doc) => (
          <DocumentSingle
            companyName={doc.company_name}
            month={doc.month}
            documents={doc.documents}
            key={doc.id}
          />
        ))}
      </div>
    </DocumentsContainer>
  );
}

export default AdminPage;
