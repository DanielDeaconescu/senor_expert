import styled from "styled-components";

const StyledWhatsAppButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  padding: 0.25rem 0.3rem;
  color: #25d366;
  background-color: white;
`;

function WhatsAppButton() {
  return (
    <div>
      <StyledWhatsAppButton href="https://wa.me/+40751159264" target="_blank">
        <i class="fa-brands fa-square-whatsapp fa-2x"></i>
      </StyledWhatsAppButton>
    </div>
  );
}

export default WhatsAppButton;
