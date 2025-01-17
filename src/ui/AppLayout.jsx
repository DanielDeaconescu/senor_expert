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
import { Outlet } from "react-router";
import styled from "styled-components";

const Main = styled.main``;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* gap: 3.2rem; */
`;

function AppLayout() {
  return (
    <div>
      <Navigation />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>

      <Footer />
    </div>
  );
}

export default AppLayout;
