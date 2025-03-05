import styled from "styled-components";
import Modal from "./Modal";
import SingupForm from "../features/authentication/SignupForm";
import DeleteButton from "./DeleteButton";
import CancelButton from "./CancelButton";
import AdminDashboard from "../pages/AdminDashboard";
import { useEditPrice } from "../services/useEditPrice";
import { useState } from "react";
import usePrices from "../services/usePrices";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
  align-items: center;
  background: #222;
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
  /* z-index: 8; */

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

const StyledUnorderedList = styled.ul`
  padding: 0;
`;

const StyledCloseButton = styled.button`
  flex: 1;
`;

const StyledSaveButton = styled.button`
  flex: 1;
`;

const NavigationInner = styled.div`
  display: flex;
  gap: 0.5rem;
  z-index: 6;
`;

function AdminNavbar({
  handleSortChange,
  deleteAllDocumentsFunction,
  pricesList,
}) {
  const { isLoading, data, error } = usePrices();
  const { isEditing, editPrice } = useEditPrice();
  const [editedPrices, setEditedPrices] = useState({});

  // const pricesList = data || [];

  function handleChange(id, value) {
    setEditedPrices((prev) => ({ ...prev, [id]: value }));
  }

  function handleSave() {
    Object.entries(editedPrices).forEach(([id, newPrice]) => {
      editPrice({ newPrice, id });
    });
  }

  if (isLoading) return <p>Prețurile se încarcă...</p>;
  if (error) return <p>A avut loc o eroare: {error.message}</p>;

  return (
    <NavbarContainer className="container">
      {/* Create User */}
      <NavigationInner>
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
        <Button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#adminUsersModal"
        >
          <LargerScreenText>Vezi utilizatorii curenți</LargerScreenText>
          <SmallerScreenIcon>
            <i class="fas fa-users"></i>
          </SmallerScreenIcon>
        </Button>

        <div
          class="modal fade"
          id="adminUsersModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable modal-edit-users">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-dark" id="exampleModalLabel">
                  Utilizatorii curenți
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <AdminDashboard />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Închide
                </button>
                <button type="button" class="btn btn-primary">
                  Salvează modificările
                </button>
              </div>
            </div>
          </div>
        </div>

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

        <Button data-bs-toggle="modal" data-bs-target="#editPricesModal">
          <LargerScreenText>Editează prețurile</LargerScreenText>
          <SmallerScreenIcon>
            <i class="fa-solid fa-pencil"></i>
          </SmallerScreenIcon>
        </Button>
      </NavigationInner>
      <div
        class="modal fade"
        id="editPricesModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 className="modal-title text-dark" id="editPricesModal">
                Editează lista de prețuri
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body modal-all-services">
              <form className="text-dark" action="">
                <ul>
                  {data &&
                    Object.entries(data).map(([category, items], index) => (
                      <li key={index} className="mb-3">
                        <h5>{category}</h5>
                        <StyledUnorderedList>
                          {items.map((item) => (
                            <li key={item.id} className="mb-3">
                              <label
                                htmlFor={`service-${item.id}`}
                                className="form-label"
                              >
                                {item.service_name}
                              </label>
                              <input
                                type="text"
                                id={`service-${item.id}`}
                                value={
                                  editedPrices[item.id] ?? item.service_price
                                }
                                className="form-control"
                                onChange={(e) =>
                                  handleChange(item.id, e.target.value)
                                }
                              />
                            </li>
                          ))}
                        </StyledUnorderedList>
                      </li>
                    ))}
                </ul>
              </form>
            </div>
            <div class="modal-footer">
              <StyledCloseButton
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Închide
              </StyledCloseButton>
              <StyledSaveButton
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
              >
                Salvează modificările
              </StyledSaveButton>
            </div>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default AdminNavbar;
