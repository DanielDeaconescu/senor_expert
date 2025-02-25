import styled from "styled-components";
import Modal from "./Modal";
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

const ContactFormContainer = styled.div`
  height: 70vh;
  padding-bottom: 2rem;
  width: 100%;

  @media (max-width: 576px) {
    /* overflow-x: hidden; */
  }

  @media (min-width: 576px) and (max-width: 768px) {
    /* overflow-x: hidden; */
  }

  @media (min-width: 768px) and (max-width: 992px) {
    /* overflow-x: hidden; */
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    /* overflow-x: hidden; */
  }

  @media (min-width: 1201px) {
    /* overflow-x: hidden; */
  }
`;

function FormButton() {
  return (
    <div>
      <StyledButton
        data-bs-toggle="modal"
        data-bs-target="#contactFormSenorExpert"
      >
        <i class="fa-solid fa-pen-to-square fa-2x"></i>
      </StyledButton>

      <div
        class="modal fade modal-form-custom"
        id="contactFormSenorExpert"
        tabindex="-1"
        aria-labelledby="contactFormSenorExpert"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header modal-header-custom">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body modal-body-custom">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormButton;
