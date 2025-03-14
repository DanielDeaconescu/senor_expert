import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Fade in/out animation
const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  overflow: hidden;
  position: relative;
  z-index: 3;
  gap: 0.5rem;

  @media (max-width: 576px) {
    padding: 0.25rem;
  }
`;

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  animation: ${fadeInOut} 4s ease-in-out infinite; /* Apply fade in/out animation */
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    font-size: 2.25rem;
  }
`;

const StyledParagraph = styled.p`
  text-align: justify;
  font-weight: 400;
  line-height: 1.8;
  font-size: 1.2rem;
`;

function WelcomeText() {
  // Define an array of text phrases to cycle through
  const textArray = [
    "Bun venit la Senor Expert!",
    "Servicii de contabilitate",
    "Consultanță fiscală integrată",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    // Change text every 4 seconds
    const textChangeInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); // 4000 ms = 4 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(textChangeInterval);
  }, [textArray.length]);

  return (
    <TextContainer>
      <StyledHeading className="fw-bold">
        {textArray[currentTextIndex]}
      </StyledHeading>
      <StyledParagraph>
        Suntem o echipă de experți contabili care oferă soluții complete de
        contabilitate, fiscalitate, resurse umane și salarizare, consultanță
        pentru înființarea societăților comerciale și multe altele.
      </StyledParagraph>

      <button
        className="btn btn-primary btn-lg text-white"
        data-bs-target="#hero-find-out-more"
        data-bs-toggle="modal"
      >
        Mai mult
      </button>
    </TextContainer>
  );
}

export default WelcomeText;
