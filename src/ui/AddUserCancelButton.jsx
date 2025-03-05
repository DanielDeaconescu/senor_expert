import { useContext } from "react";
import { ModalContext } from "./Modal";

function AddUserCancelButton() {
  // const { close } = useContext(ModalContext);

  return (
    <button className="btn btn-danger" data-bs-dismiss="modal">
      Anulează
    </button>
  );
}

export default AddUserCancelButton;
