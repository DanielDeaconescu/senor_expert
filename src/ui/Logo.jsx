import styled from "styled-components";
import LogoImage from "../data/images/senor_expert_logo_nobg.png";

const LogoContainer = styled.div`
  background-color: var(--color-grey-0);
  border-radius: 0.5rem;
`;

const LogoImg = styled.img`
  border-radius: 0.5rem;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={LogoImage} alt="Senor Expert logo" className="img-fluid" />
    </LogoContainer>
  );
}

export default Logo;
