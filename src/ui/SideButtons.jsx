import styled from "styled-components";
import WhatsAppButton from "./WhatsAppButton";
import FormButton from "./FormButton";

const StyledSideButtons = styled.div`
  position: fixed;
  bottom: 25%;
  right: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  z-index: 100;
  border-radius: 0.5rem;
`;

function SideButtons() {
  return (
    <StyledSideButtons>
      <WhatsAppButton />
      <FormButton />
    </StyledSideButtons>
  );
}

export default SideButtons;
