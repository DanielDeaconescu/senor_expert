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
  z-index: 9;

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

function AdminNavbar({
  handleSortChange,
  deleteAllDocumentsFunction,
  pricesList,
}) {
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
      {/* <Modal>
        <Modal.Open>
          <button className="btn btn-secondary">Editeaza preturile</button>
        </Modal.Open>
        <Modal.Window>
          <form action="">
            <ul>
              {pricesList?.prices_list?.map((item, index) => (
                <li key={index}>
                  <label htmlFor={`service-${index}`}>
                    {item.service_name}
                  </label>
                  <input
                    type="text"
                    id={`service-${index}`}
                    defaultValue={item.service_price}
                  />
                </li>
              ))}
            </ul>
          </form>
        </Modal.Window>
      </Modal> */}

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Editeaza preturile
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable modal-test">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form className="text-dark" action="">
                <ul>
                  {pricesList?.prices_list?.map((item, index) => (
                    <li key={index}>
                      <label
                        htmlFor={`service-${index}`}
                        className="form-label"
                      >
                        {item.service_name}
                      </label>
                      <input
                        type="text"
                        id={`service-${index}`}
                        defaultValue={item.service_price}
                        className="form-control"
                      />
                    </li>
                  ))}
                </ul>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default AdminNavbar;
