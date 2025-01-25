import styled from "styled-components";

const StyledWhatsAppButton = styled.a`
  display: flex;
  position: fixed;
  right: 1%;
  bottom: 25%;
  z-index: 1000;
  background-color: var(--color-grey-100);
  padding: 0.1rem 0.3rem;
  border-radius: 0.5rem;
`;

const WhatsAppIcon = styled.i`
  color: var(--clr-whatsapp-green);
`;

function WhatsAppButton() {
  return (
    <StyledWhatsAppButton
      href="https://wa.me/40751159264"
      target="_blank"
      rel="noreferrer"
    >
      <WhatsAppIcon className="fa-brands fa-square-whatsapp fa-3x"></WhatsAppIcon>
    </StyledWhatsAppButton>
  );
}

export default WhatsAppButton;
