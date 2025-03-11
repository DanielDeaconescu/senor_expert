import Hero from "../ui/Hero";
import FeaturesSection from "./FeaturesSection";
import InfoSection from "./InfoSection";
import Navigation from "./Navigation";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import SocialSection from "./SocialSection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import WorkingHours from "./WorkingHours";
import CookiesPopup from "./CookiesPopup";

const Main = styled.main``;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* gap: 3.2rem; */
`;

function AppLayout() {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Prevent sticky behavior if a modal is open
      if (document.body.classList.contains("modal-open")) {
        setIsSticky(false);
        return;
      }

      const heroElement = document.querySelector(".hero");
      const navigationHeight =
        document.querySelector(".navbar")?.offsetHeight || 0;

      if (!heroElement) return;

      const heroBottom = heroElement.getBoundingClientRect().bottom;
      setIsSticky(heroBottom <= navigationHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <div>
      <WorkingHours />
      <Navigation isSticky={isSticky} />
      <div ref={heroRef}></div>
      <Main>
        <Container>
          <Outlet />
          <CookiesPopup />
        </Container>
      </Main>

      <Footer />
    </div>
  );
}

export default AppLayout;
