import { useContext } from "react";
import { ModalContext } from "./Modal";

function CancelButton() {
  const { close } = useContext(ModalContext);
  return (
    <button className="btn btn-primary" onClick={close}>
      Anulează
    </button>
  );
}

export default CancelButton;
