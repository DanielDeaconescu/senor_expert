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

function FormButton() {
  return (
    <div>
      <Modal>
        <Modal.Open>
          <StyledButton>
            <i class="fa-solid fa-pen-to-square fa-2x"></i>
          </StyledButton>
        </Modal.Open>
        <Modal.Window>
          <ContactForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default FormButton;
