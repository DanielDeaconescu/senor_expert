import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import styled from "styled-components";

const CookiesPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <PopupContainer>
      <PopupContent>
        <Message>
          Momentan, website-ul nostru folosește doar cookie-urile strict
          necesare pentru funcționarea site-ului. Nu stocăm informații despre
          utilizatori. Dacă pe viitor vom implementa cookie-uri suplimentare, ne
          vom asigura că vă anunțăm.
        </Message>
        <ButtonContainer>
          <AcceptButton onClick={handleAccept}>Ok</AcceptButton>
          <LearnMoreButton to="/privacy-policy" target="_blank">
            Aflați mai multe despre cookies
          </LearnMoreButton>
        </ButtonContainer>
      </PopupContent>
    </PopupContainer>
  );
};

// Styled Components
const PopupContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #222;
  color: white;
  padding: 16px;
  text-align: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.p`
  margin: 0 0 10px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const AcceptButton = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #45a049;
  }
`;

const LearnMoreButton = styled(NavLink)`
  background: #007bff;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

export default CookiesPopup;
