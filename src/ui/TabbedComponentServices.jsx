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

  @media (max-width: 576px) {
    height: 450px;
  }

  @media (min-width: 576px) {
    height: 330px;
  }

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 992px) {
    height: 350px;
  }
`;

const StyledButton = styled.button`
  border: none;
  font-size: 1.4rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;

  @media (max-width: 576px) {
    display: none;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    display: none;
  }
`;

const StyledButtonSmall = styled.button`
  display: none;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const IconContainer = styled.div`
  font-size: 3rem;
  @media (max-width: 576px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    display: none;
  }
`;

const TabTextContent = styled.div`
  width: 60%;
  text-align: justify;
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    width: 100%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    width: 75%;
  }
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
  padding: 1.5rem;
`;

const StyledContainer = styled.div`
  background-color: var(--color-grey-300);
`;

const ButtonContainer = styled.div`
  padding: 0 0 3rem 0;
`;

function TabbedComponentServices() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <TabTextContent>
              Prin serviciile noastre de contabilitate financiară, asigurăm
              întocmirea și gestionarea corectă a situațiilor financiare, astfel
              încât afacerea ta să fie mereu conformă cu legislația în vigoare.
              De la înregistrarea operațiunilor contabile până la realizarea
              balanțelor și a bilanțurilor, oferim transparență și acuratețe în
              raportarea financiară.
            </TabTextContent>
          </StyledContent>
        );
      case "tab2":
        return (
          <StyledContent className="container">
            <IconContainer>
              <FaRegMoneyBillAlt />
            </IconContainer>
            <TabTextContent>
              Obține sprijin profesional pentru optimizarea fiscală și
              respectarea legislației. Echipa noastră de experți oferă
              consultanță personalizată, analizând situația specifică a afacerii
              tale pentru a identifica cele mai bune soluții fiscale, reducând
              riscurile și costurile inutile.
            </TabTextContent>
          </StyledContent>
        );
      case "tab3":
        return (
          <StyledContent className="container">
            <IconContainer>
              <IoIosPersonAdd />
            </IconContainer>
            <TabTextContent>
              Simplifică procesul de gestionare a angajaților cu ajutorul
              serviciilor noastre de salarizare și resurse umane. De la calculul
              salariilor și întocmirea declarațiilor fiscale, până la
              administrarea dosarelor de personal, ne ocupăm de toate detaliile,
              astfel încât să ai mai mult timp pentru a te concentra pe echipa
              ta.
            </TabTextContent>
          </StyledContent>
        );
      case "tab4":
        return (
          <StyledContent className="container">
            <IconContainer>
              <MdAccountBalance />
            </IconContainer>
            <TabTextContent>
              Optimizează-ți costurile și procesele interne cu ajutorul
              serviciilor noastre de contabilitate de gestiune. Te ajutăm să
              analizezi și să monitorizezi cheltuielile, veniturile și
              profitabilitatea fiecărei activități din afacerea ta, pentru a lua
              decizii informate și strategice.
            </TabTextContent>
          </StyledContent>
        );
      default:
        return null;
    }
  }

  return (
    <StyledContainer>
      <StyledTabbedComponentServices className="container-fluid">
        <div className="container">
          <h3>Lista Serviciilor Senor Expert</h3>
          <p>
            Descoperă informații generale despre serviciile contabile și găsește
            soluțiile care se potrivesc cel mai bine pentru afacerea ta.
            Selectează un tab pentru mai multe detalii despre fiecare serviciu.
          </p>
          <StyledTabs className="tabs container">
            <StyledButton
              className={activeTab === "tab1" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab1")}
            >
              Contabilitate financiară
            </StyledButton>
            <StyledButtonSmall
              className={activeTab === "tab1" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab1")}
            >
              <MdAttachMoney />
            </StyledButtonSmall>
            <StyledButton
              className={activeTab === "tab4" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab4")}
            >
              Contabilitate de Gestiune
            </StyledButton>
            <StyledButtonSmall
              className={activeTab === "tab4" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab4")}
            >
              <MdAccountBalance />
            </StyledButtonSmall>
            <StyledButton
              className={activeTab === "tab3" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab3")}
            >
              Salarizare și Resurse Umane
            </StyledButton>
            <StyledButtonSmall
              className={activeTab === "tab3" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab3")}
            >
              <IoIosPersonAdd />
            </StyledButtonSmall>
            <StyledButton
              className={activeTab === "tab2" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab2")}
            >
              Consultanță Fiscală
            </StyledButton>
            <StyledButtonSmall
              className={activeTab === "tab2" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab2")}
            >
              <FaRegMoneyBillAlt />
            </StyledButtonSmall>
          </StyledTabs>
        </div>

        <div className="content">{renderContent()}</div>
      </StyledTabbedComponentServices>
      <ButtonContainer
        onClick={() => setIsModalOpen(!isModalOpen)}
      ></ButtonContainer>
    </StyledContainer>
  );
}

export default TabbedComponentServices;
