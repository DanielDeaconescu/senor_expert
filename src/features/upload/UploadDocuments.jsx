import { useState } from "react";
import UploadDocumentsForm from "../../ui/UploadDocumentsForm";
import Modal from "../../ui/Modal";

function UploadDocuments() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpenModal((show) => !show)}>
        Încarcă documentele
      </button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <UploadDocumentsForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default UploadDocuments;
