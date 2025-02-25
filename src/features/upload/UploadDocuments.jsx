import { useState } from "react";
import UploadDocumentsForm from "../../ui/UploadDocumentsForm";
import Modal from "../../ui/Modal";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 1.2rem;
  border-radius: 0.5rem;
  background-color: var(--color-green-700);
  color: var(--color-grey-0);
  font-weight: 600;
  position: relative;
  z-index: 98;
  &:hover {
    background-color: var(--color-green-800);
  }
`;

function UploadDocuments() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="upload-documents">
          <StyledButton>
            <i class="fa-solid fa-cloud-arrow-up pe-3"></i>
            Încarcă documente
          </StyledButton>
        </Modal.Open>
        <Modal.Window name="upload-documents">
          <UploadDocumentsForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default UploadDocuments;
