import React, { useState } from "react";
import styled from "styled-components";
import { MdAttachMoney } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { MdAccountBalance } from "react-icons/md";

const StyledTabbedComponentServices = styled.div`
  background-color: var(--color-grey-300);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
`;

const StyledButton = styled.button`
  border: none;
  font-size: 1.4rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
`;

const StyledTabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;

const IconContainer = styled.div`
  font-size: 3rem;
`;

function TabbedComponentServices() {
  const [activeTab, setActiveTab] = useState("tab1");

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  function renderContent() {
    switch (activeTab) {
      case "tab1":
        return (
          <StyledContent className="container">
            <IconContainer>
              <MdAttachMoney />
            </IconContainer>
            <div>
              Evidența completă a tranzacțiilor financiare ale companiei,
              întocmirea registrelor contabile și elaborarea balanțelor de
              verificare.
            </div>
          </StyledContent>
        );
      case "tab2":
        return (
          <StyledContent className="container">
            <IconContainer>
              <FaRegMoneyBillAlt />
            </IconContainer>
            <div>
              Asistență privind impozitele și taxele, optimizarea fiscală și
              întocmirea declarațiilor fiscale.
            </div>
          </StyledContent>
        );
      case "tab3":
        return (
          <StyledContent className="container">
            <IconContainer>
              <IoIosPersonAdd />
            </IconContainer>
            <div>
              Calculul salariilor, gestionarea contractelor de muncă, întocmirea
              statelor de plată și raportările către instituții publice.
            </div>
          </StyledContent>
        );
      case "tab4":
        return (
          <StyledContent className="container">
            <IconContainer>
              <MdAccountBalance />
            </IconContainer>
            <div>
              Monitorizarea și analiza costurilor pentru îmbunătățirea
              eficienței operaționale.
            </div>
          </StyledContent>
        );
      default:
        return null;
    }
  }

  return (
    <>
      <StyledTabbedComponentServices className="container-fluid">
        <div className="container">
          <h3>Servicii Senor Expert</h3>
          <p>
            Află mai multe informații despre serviciile puse la dispoziție de
            Senor Expert.{" "}
          </p>
          <StyledTabs className="tabs container">
            <StyledButton
              className={activeTab === "tab1" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab1")}
            >
              Contabilitate financiară
            </StyledButton>
            <StyledButton
              className={activeTab === "tab2" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab2")}
            >
              Consultanță Fiscală
            </StyledButton>
            <StyledButton
              className={activeTab === "tab3" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab3")}
            >
              Salarizare și Resurse Umane
            </StyledButton>
            <StyledButton
              className={activeTab === "tab4" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab4")}
            >
              Contabilitate de Gestiune
            </StyledButton>
          </StyledTabs>
        </div>

        <div className="content">{renderContent()}</div>
      </StyledTabbedComponentServices>
    </>
  );
}

export default TabbedComponentServices;
