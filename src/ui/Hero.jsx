import HeaderHomeBackground from "../data/images/header-home-background.jpg";
import HeaderHomeImage from "../data/images/header-home-image.jpg";
import styled from "styled-components";
import HeroImage from "./HeroImage";
import WelcomeText from "./WelcomeText";
import ModalHeroFindOutMore from "./ModalHeroFindOutMore";
import SvgDecorationHero from "./SvgDecorationHero";
import LogoImage from "../../src/data/images/senor_expert_logo_nobg.png";

const StyledHeader = styled.header`
  background-image: url(${HeaderHomeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  & .text-container {
    position: relative;
    z-index: 3;
  }

  & .frame-decoration {
    position: relative;
    z-index: 2;
  }
`;

const TextLargeScreen = styled.span`
  display: none;
`;

const StyledText = styled.div`
  text-align: justify;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledSection2SideImage = styled.img`
  border-radius: 1rem;
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ValuesTitle = styled.h3`
  padding-top: 1rem;
`;

const ListItem = styled.li`
  text-align: center;
`;

function Hero() {
  return (
    <StyledHeader className="hero">
      <div className="hero text-white pt-7">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container mb-5 px-4">
                <HeroImage
                  image={HeaderHomeImage}
                  logo={LogoImage}
                  text="Noi gestionăm cifrele. Dumneavoastră vă ocupați de succes."
                />
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <WelcomeText />
            </div>
          </div>
        </div>
      </div>

      <ModalHeroFindOutMore />

      <SvgDecorationHero />
    </StyledHeader>
  );
}

export default Hero;
