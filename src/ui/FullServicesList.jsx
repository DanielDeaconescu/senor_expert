import styled from "styled-components";
import Modal from "./Modal";

const Text = styled.div`
  text-align: justify;
`;

const StyledFullServicesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

function FullServicesList() {
  return (
    <StyledFullServicesList>
      <Text>Descoperă întreaga gamă se servicii disponibile Senor Expert!</Text>
      <Modal>
        <Modal.Open opens="modal-tabbed-component">
          <button className="btn btn-primary text-white align-self-start">
            Vezi lista completă de servicii
          </button>
        </Modal.Open>
        <Modal.Window name="modal-tabbed-component"></Modal.Window>
      </Modal>
    </StyledFullServicesList>
  );
}

export default FullServicesList;
