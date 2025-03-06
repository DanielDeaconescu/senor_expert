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
`;

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  animation: ${fadeInOut} 4s ease-in-out infinite; /* Apply fade in/out animation */
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledParagraph = styled.p`
  text-align: justify;
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
  }, []);

  return (
    <TextContainer>
      <StyledHeading className="display-3 fw-bold">
        {textArray[currentTextIndex]}
      </StyledHeading>
      <StyledParagraph className="lead">
        Suntem o echipă de experți contabili care oferă soluții complete de
        contabilitate, fiscalitate, resurse umane și salarizare, consultanță
        pentru înființarea societăților comerciale și multe altele.
      </StyledParagraph>

      <button
        className="btn btn-primary btn-lg text-white"
        data-bs-target="#hero-find-out-more"
        data-bs-toggle="modal"
      >
        Află mai mult
      </button>
    </TextContainer>
  );
}

export default WelcomeText;
