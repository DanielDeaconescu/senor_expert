import styled from "styled-components";
import LogoImage from "../data/images/logo_test.png";

const LogoContainer = styled.div`
  background-color: var(--clr-my-grey-0);
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

function Logo() {
  return (
    <LogoContainer>
      <img src={LogoImage} alt="Senor Expert logo" />
    </LogoContainer>
  );
}

export default Logo;
