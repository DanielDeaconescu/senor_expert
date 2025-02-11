import styled from "styled-components";
import Modal from "../ui/Modal";
import SingupForm from "../features/authentication/SignupForm";
import DeleteButton from "../ui/DeleteButton";
import CancelButton from "../ui/CancelButton";
import AdminDashboard from "./AdminDashboard";

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
`;

const Button = styled.button`
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background: #f2f2f2;
  cursor: pointer;
  color: black;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function AdminNavbar({ handleSortChange, deleteAllDocumentsFunction }) {
  return (
    <>
      <NavbarContainer className="container">
        {/* Create User */}
        <Modal>
          <Modal.Open opens="modal-create-user">
            <Button>Creare utilizator nou</Button>
          </Modal.Open>
          <Modal.Window name="modal-create-user">
            <SingupForm />
          </Modal.Window>
        </Modal>

        {/* See all users */}
        <Modal>
          <Modal.Open>
            <Button>Vezi utilizatorii curenți</Button>
          </Modal.Open>
          <Modal.Window>
            <AdminDashboard />
          </Modal.Window>
        </Modal>

        {/* Sorting Buttons */}
        <Actions>
          <Button onClick={() => handleSortChange("asc")}>
            Sortează crescător
          </Button>
          <Button onClick={() => handleSortChange("desc")}>
            Sortează descrescător
          </Button>
        </Actions>

        {/* Delete All */}
        <Modal>
          <Modal.Open opens="delete-all-window">
            <Button>Șterge tot</Button>
          </Modal.Open>
          <Modal.Window name="delete-all-window">
            <div>
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
            </div>
          </Modal.Window>
        </Modal>
      </NavbarContainer>
    </>
  );
}

export default AdminNavbar;
