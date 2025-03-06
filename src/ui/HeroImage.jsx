import HeaderHomeImage from "../data/images/header-home-image.jpg";
import LogoImage from "../data/images/senor_expert_logo_nobg.svg";
import styled from "styled-components";
import ContactForm from "./ContactForm";

// Wrapper for the flip effect
const FlipContainer = styled.div`
  perspective: 1000px;
  width: 420px;
  height: 540px;
  display: inline-block;
  position: relative;
  z-index: 3;
`;

// Inner card that flips
const FlipCard = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  position: relative;

  @media (min-width: 992px) {
    ${FlipContainer}:hover & {
      transform: rotateY(180deg);
    }
  }
`;

// Common styles for front and back
const FlipCardSide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
`;

// Front of the card (image)
const FlipCardFront = styled(FlipCardSide)`
  background-image: url(${HeaderHomeImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1rem;
`;

// Back of the card (content)
const FlipCardBack = styled(FlipCardSide)`
  background-color: hsla(195, 53%, 79%, 0.4);
  color: white;
  transform: rotateY(180deg);
  /* cursor: default; */
  border-radius: 1rem;
`;

// Styled components
const StyledHomeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 1rem;
`;

const StyledLogoImage = styled.img`
  max-width: 250px;
  margin-bottom: 1rem;
`;

const MissionStatement = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: #4b0082; /* Deep purple for sophistication */
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;

  /* Purple gradient for a premium feel */
  background: linear-gradient(90deg, #6a0dad, #b266ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Subtle shadow for better readability */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const FormText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ContactButton = styled.a`
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  background-color: #3e7b27;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 0.5rem;
  display: inline-block;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #3e7b27;
    color: white;
    cursor: pointer;
  }
`;

function HeroImage() {
  return (
    <>
      <FlipContainer>
        <FlipCard>
          {/* Front Side */}
          <FlipCardFront>
            {/* <StyledHomeImage src={HeaderHomeImage} alt="Hero" /> */}
          </FlipCardFront>

          {/* Back Side */}
          <FlipCardBack>
            <StyledLogoImage src={LogoImage} alt="Senor Expert Logo" />
            <MissionStatement>
              Noi gestionăm cifrele. Tu te ocupi de succes.
            </MissionStatement>
            <ContactButton
              data-bs-toggle="modal"
              data-bs-target="#modal-contact-form"
            >
              Formular de contact
            </ContactButton>
          </FlipCardBack>
        </FlipCard>
      </FlipContainer>
      <div
        class="modal fade modal-form-custom"
        id="modal-contact-form"
        aria-labelledby="contactFormSenorExpert"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header modal-header-custom">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body modal-body-custom">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroImage;
