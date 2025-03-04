import Hero from "../ui/Hero";
import FeaturesSection from "../ui/FeaturesSection";
import Section2 from "../ui/Section2";
import InfoSection from "../ui/InfoSection";
import Section3 from "../ui/Section3";
import TestimonialsSection from "../ui/TestimonialsSection";
import Section4 from "../ui/Section4";
import SocialSection from "../ui/SocialSection";
import styled from "styled-components";
import WhatsAppButton from "../ui/WhatsAppButton";
import FormButton from "../ui/FormButton";
import SideButtons from "../ui/SideButtons";
import WorkingHours from "../ui/WorkingHours";

const StyledHomePage = styled.div``;

function HomePage() {
  return (
    <StyledHomePage>
      <Hero />
      <FeaturesSection />
      <Section2 />
      <InfoSection />
      <Section3 />
      <Section4 />
      <SideButtons />
    </StyledHomePage>
  );
}

export default HomePage;
