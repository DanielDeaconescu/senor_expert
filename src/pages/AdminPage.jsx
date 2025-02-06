import styled from "styled-components";
import useDocuments from "./useDocuments";
import DocumentSingle from "../ui/DocumentSingle";
import { useEffect } from "react";
import supabase from "../services/supabase";
import Modal from "../ui/Modal";
import SingupForm from "../features/authentication/SignupForm";
import AdminBackground from "../data/images/admin_background.jpg";
import Pagination from "../ui/Pagination";
import { useDeleteAllDocuments } from "../features/documents/useDeleteAllDocuments";
import CancelButton from "../ui/CancelButton";
import DeleteButton from "../ui/DeleteButton";

const DocumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem 0 5rem 0;
  background-image: url(${AdminBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 576px) {
    padding: 8rem 0 5rem 0;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 8rem 0 5rem 0;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    padding: 6rem 0 5rem 0;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    padding: 6rem 0 5rem 0;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    padding: 6rem 0 5rem 0;
  }

  @media (min-width: 1400px) {
    padding: 6rem 0 5rem 0;
  }

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
  z-index: 10;
`;

const CreateUserContainer = styled.div`
  display: flex;
  z-index: 10;
`;

const DocumentsContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DocumentsSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DeleteAllBtn = styled.button`
  z-index: 10;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
`;

const DelteAllBtnContainer = styled.div`
  z-index: 10;
`;

const ConfirmationActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function AdminPage() {
  const { isLoading, documents, count } = useDocuments();
  const { deleteAllDocumentsFunction } = useDeleteAllDocuments();
  return (
    <DocumentsContainer className="container-fluid">
      <DocumentsContainerInner className="container">
        <Modal>
          <Modal.Open opens="modal-create-user">
            <div>
              <CreateUserContainer>
                <CreateUserButton>Creare utilizator nou</CreateUserButton>
              </CreateUserContainer>
            </div>
          </Modal.Open>
          <Modal.Window name="modal-create-user">
            <SingupForm />
          </Modal.Window>
        </Modal>
        <DelteAllBtnContainer>
          <Modal>
            <Modal.Open opens="delete-all-window">
              <DeleteAllBtn>Șterge tot</DeleteAllBtn>
            </Modal.Open>
            <Modal.Window name="delete-all-window">
              <ConfirmationContainer>
                <h4 className="text-center">
                  Sigur doriți să ștergeți toate intrările din baza de date?
                </h4>
                <p className="text-danger text-center">
                  Atenție! Dacă ștergeți toate înregistrările din baza de date,
                  toate documentele încărcate de utilizatori vor fi pierdute
                  definitiv. Această acțiune este ireversibilă!
                </p>
                <ConfirmationActions>
                  <DeleteButton
                    deleteAllDocumentsFunction={deleteAllDocumentsFunction}
                  />
                  <CancelButton />
                </ConfirmationActions>
              </ConfirmationContainer>
            </Modal.Window>
          </Modal>
        </DelteAllBtnContainer>
        <DocumentsSection>
          {documents?.map((doc) => (
            <DocumentSingle
              companyName={doc.company_name}
              month={doc.month}
              documents={doc.documents}
              created_at={doc.created_at}
              key={doc.id}
              documentId={doc.id}
            />
          ))}
        </DocumentsSection>
        <Pagination count={count} />
      </DocumentsContainerInner>
    </DocumentsContainer>
  );
}

export default AdminPage;
