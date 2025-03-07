import styled from "styled-components";

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
  background-image: ${({ image }) => `url(${image})`};
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
  border-radius: 1rem;
`;

// Styled logo
const StyledLogoImage = styled.img`
  max-width: 250px;
  margin-bottom: 1rem;
`;

// Mission statement text
const MissionStatement = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: #4b0082;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;

  background: linear-gradient(90deg, #6a0dad, #b266ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

function HeroImage({ image, logo, text }) {
  return (
    <FlipContainer>
      <FlipCard>
        {/* Front Side */}
        <FlipCardFront image={image} />

        {/* Back Side */}
        <FlipCardBack>
          {logo && <StyledLogoImage src={logo} alt="Logo" />}
          {text && <MissionStatement>{text}</MissionStatement>}
        </FlipCardBack>
      </FlipCard>
    </FlipContainer>
  );
}

export default HeroImage;
