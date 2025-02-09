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
  padding: 1rem 0;

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
              Gestionarea financiară corectă este esențială pentru succesul
              oricărei afacceri. Astfel, prin serviciile noastre de{" "}
              <strong>contabilitate financiară</strong> asigurăm conformitatea
              cu reglementările în vigoare și oferim o imagine clară asupra
              situației economice a companiei tale. De la evidența tranzacțiilor
              și până la întocmirea situațiilor financiare, ne ocupăm de toate
              aspectele contabile pentru ca tu să te poți concentra pe alte
              aspecte legate de dezvoltarea afacerii tale.
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
              Pentru luarea unor decizii informate este necesară o imagine clară
              asupra costurilor și performanței afacerii tale. Serviciile de{" "}
              <strong>contabilitate de gestiune</strong> Senor Expert te ajută
              să monitorizezi și să optimizezi resursele, să analizezi
              rentabilitatea și să îmbunătățești strategiile financiare. Îți
              oferim suport în planificarea bugetară, controlul costurilor și
              analiza indicatorilor de performanță, astfel încât să poți crește
              sustenabil și profitabil.
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
              serviciilor noastre de{" "}
              <strong>salarizare și resurse umane</strong>. Oferim servicii
              complete de salarizare, de la calculul corect al salariilor,
              taxelor și contribuțiilor sociale, până la întocmirea și depunerea
              declarațiilor obligatorii. De asemenea, ne ocupăm de gestionarea
              contractelor de muncă, evidența concediilor și a beneficiilor
              angajaților, astfel încât să ai siguranța că echipa ta este
              administrată corect și eficient.
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
              Un plan fiscal bine structurat poate face diferența între stagnare
              și creștere. Oferim <strong>consultanță fiscală</strong> în
              funcție de nevoile afacerii tale, ajutându-te să optimizezi
              taxele, să respecți reglementările în vigoare și să eviți
              riscurile fiscale. Îți stăm la dispoziție pentru asistență în
              declararea impozitelor, optimizarea obligațiilor fiscale și
              planificare strategică pentru firma ta.
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
              className={activeTab === "tab2" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab2")}
            >
              Contabilitate de Gestiune
            </StyledButton>
            <StyledButtonSmall
              className={activeTab === "tab2" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab2")}
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
              className={activeTab === "tab4" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab4")}
            >
              Consultanță Fiscală
            </StyledButton>
            <StyledButtonSmall
              className={activeTab === "tab4" ? "tabbed-active" : ""}
              onClick={() => handleTabClick("tab4")}
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
