import { useEffect, useRef } from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.3rem;
  border-radius: 0.5rem;
  border: none;
  background-color: white;
  color: #444444;
`;

function FormButton() {
  const formRef = useRef(null);

  useEffect(() => {
    const modalElement = document.getElementById("contactFormSenorExpert");

    const handleModalClose = () => {
      if (formRef.current) {
        formRef.current.reset(); // Resets form fields
      }
    };

    modalElement.addEventListener("hidden.bs.modal", handleModalClose);

    return () => {
      modalElement.removeEventListener("hidden.bs.modal", handleModalClose);
    };
  }, []);

  return (
    <div>
      <StyledButton
        data-bs-toggle="modal"
        data-bs-target="#contactFormSenorExpert"
      >
        <i className="fa-solid fa-pen-to-square fa-2x"></i>
      </StyledButton>

      <div
        className="modal fade modal-form-custom"
        id="contactFormSenorExpert"
        aria-labelledby="contactFormSenorExpert"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header modal-header-custom">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modal-body-custom">
              <ContactForm formRef={formRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormButton;
