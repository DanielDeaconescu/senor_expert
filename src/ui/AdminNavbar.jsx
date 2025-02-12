import styled from "styled-components";
import Modal from "./Modal";
import SingupForm from "../features/authentication/SignupForm";
import DeleteButton from "./DeleteButton";
import CancelButton from "./CancelButton";
import AdminDashboard from "../pages/AdminDashboard";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
  align-items: center;
  background: #222;
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
  z-index: 10;

  @media (max-width: 576px) {
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 992px) {
    align-items: center;
    justify-content: center;
  }
`;

const Button = styled.button`
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background: #f2f2f2;
  cursor: pointer;
  color: black;

  @media (min-width: 768px) and (max-width: 992px) {
    flex: 1;
  }

  @media (min-width: 992px) {
    flex: unset;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    flex: 2;
  }

  @media (min-width: 992px) {
    flex: unset;
  }
`;

const DeleteAllWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    width: 300px;
  }
`;

const LargerScreenText = styled.span`
  @media (max-width: 576px) {
    display: none;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    display: none;
  }

  @media (min-width: 993px) {
    display: flex;
  }
`;

const SmallerScreenIcon = styled.span`
  @media (min-width: 993px) {
    display: none;
  }
`;

function AdminNavbar({ handleSortChange, deleteAllDocumentsFunction }) {
  return (
    <NavbarContainer className="container">
      {/* Create User */}
      <Modal>
        <Modal.Open opens="modal-create-user">
          <Button>
            <LargerScreenText>Creare utilizator nou</LargerScreenText>
            <SmallerScreenIcon>
              <i class="fas fa-user-plus"></i>
            </SmallerScreenIcon>
          </Button>
        </Modal.Open>
        <Modal.Window name="modal-create-user">
          <SingupForm />
        </Modal.Window>
      </Modal>

      {/* See all users */}
      <Modal>
        <Modal.Open>
          <Button>
            <LargerScreenText>Vezi utilizatorii curenți</LargerScreenText>
            <SmallerScreenIcon>
              <i class="fas fa-users"></i>
            </SmallerScreenIcon>
          </Button>
        </Modal.Open>
        <Modal.Window>
          <AdminDashboard />
        </Modal.Window>
      </Modal>

      {/* Sorting Buttons */}
      <Actions>
        <Button onClick={() => handleSortChange("asc")}>
          <LargerScreenText>Sortează crescător</LargerScreenText>
          <SmallerScreenIcon>
            <i class="fas fa-sort-amount-up"></i>
          </SmallerScreenIcon>
        </Button>
        <Button onClick={() => handleSortChange("desc")}>
          <LargerScreenText>Sortează descrescător</LargerScreenText>
          <SmallerScreenIcon>
            <i class="fas fa-sort-amount-down"></i>
          </SmallerScreenIcon>
        </Button>
      </Actions>

      {/* Delete All */}
      <Modal>
        <Modal.Open opens="delete-all-window">
          <Button>
            <LargerScreenText>Șterge tot</LargerScreenText>
            <SmallerScreenIcon>
              <i class="fas fa-trash-alt"></i>
            </SmallerScreenIcon>
          </Button>
        </Modal.Open>
        <Modal.Window name="delete-all-window">
          <DeleteAllWindow>
            <h4 className="text-center">
              Sigur doriți să ștergeți toate intrările?
            </h4>
            <p className="text-danger text-center">
              Această acțiune este ireversibilă!
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <DeleteButton
                deleteAllDocumentsFunction={deleteAllDocumentsFunction}
              />
              <CancelButton />
            </div>
          </DeleteAllWindow>
        </Modal.Window>
      </Modal>
    </NavbarContainer>
  );
}

export default AdminNavbar;
