import { useContext } from "react";
import { ModalContext } from "./Modal";

function DeleteButton({ deleteAllDocumentsFunction }) {
  const { close } = useContext(ModalContext);

  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        deleteAllDocumentsFunction();
        close();
      }}
    >
      Șterge
    </button>
  );
}

export default DeleteButton;
