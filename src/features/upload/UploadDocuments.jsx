import { useState } from "react";
import UploadDocumentsForm from "../../ui/UploadDocumentsForm";
import Modal from "../../ui/Modal";

function UploadDocuments() {
  return (
    <div>
      {/* <button onClick={() => setIsOpenModal((show) => !show)}>
        Încarcă documentele
      </button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <UploadDocumentsForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )} */}
      <Modal>
        <Modal.Open opens="test">
          <button>Încarcă documente</button>
        </Modal.Open>
        <Modal.Window name="test">
          <UploadDocumentsForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default UploadDocuments;
