import { useEffect, useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [turnstileInitialized, setTurnstileInitialized] = useState(false);

  useEffect(() => {
    const modalElement = document.getElementById("contactFormSenorExpert");

    // Initialize Turnstile when the modal is shown and Turnstile is not initialized
    const initializeTurnstile = () => {
      if (window.turnstile && !turnstileInitialized) {
        const turnstileElement = modalElement?.querySelector(".cf-turnstile");
        if (turnstileElement) {
          window.turnstile.render(turnstileElement, {
            sitekey: "0x4AAAAAAA8RURF0seaJgE_b",
            callback: (token) => {
              // handle token (if needed)
            },
          });
          setTurnstileInitialized(true); // Mark Turnstile as initialized
        }
      }
    };

    const handleModalShow = () => {
      initializeTurnstile();
    };

    const handleModalClose = () => {
      setIsModalOpen(false);
      setTurnstileInitialized(false); // Reset Turnstile initialization when modal is closed
    };

    modalElement?.addEventListener("shown.bs.modal", handleModalShow);
    modalElement?.addEventListener("hidden.bs.modal", handleModalClose);

    return () => {
      modalElement?.removeEventListener("shown.bs.modal", handleModalShow);
      modalElement?.removeEventListener("hidden.bs.modal", handleModalClose);
    };
  }, [turnstileInitialized]); // Depend on turnstileInitialized to avoid infinite loop

  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <div>
      <StyledButton
        data-bs-toggle="modal"
        data-bs-target="#contactFormSenorExpert"
        onClick={handleOpenModal}
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
              <ContactForm isModalOpen={isModalOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormButton;
