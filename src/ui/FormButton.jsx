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
`;

function FormButton() {
  return (
    <div>
      <Modal>
        <Modal.Open>
          <StyledButton>
            <i class="fa-regular fa-message fa-2x"></i>
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
