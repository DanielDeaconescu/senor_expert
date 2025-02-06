import styled from "styled-components";
import useDocuments from "./useDocuments";
import DocumentSingle from "../ui/DocumentSingle";
import { useEffect } from "react";
import supabase from "../services/supabase";
import Modal from "../ui/Modal";
import SingupForm from "../features/authentication/SignupForm";
import AdminBackground from "../data/images/admin_background.jpg";
import Pagination from "../ui/Pagination";

const DocumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 5rem 0 5rem 0;
  background-image: url(${AdminBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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

const CreateUserButton = styled.button`
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  width: 15%;
  z-index: 10;
`;

const DocumentsContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function AdminPage() {
  const { isLoading, documents } = useDocuments();
  console.log(documents);
  return (
    <DocumentsContainer className="container-fluid">
      <DocumentsContainerInner className="container">
        <Modal>
          <Modal.Open opens="modal-create-user">
            <CreateUserButton>Creare utilizator nou</CreateUserButton>
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
            created_at={doc.created_at}
            key={doc.id}
          />
        ))}
        <Pagination count={100} />
      </DocumentsContainerInner>
    </DocumentsContainer>
  );
}

export default AdminPage;
