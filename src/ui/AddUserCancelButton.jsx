import { useContext } from "react";
import { ModalContext } from "./Modal";

function AddUserCancelButton() {
  const { close } = useContext(ModalContext);

  return (
    <button className="btn btn-danger" onClick={close}>
      Anulează
    </button>
  );
}

export default AddUserCancelButton;
