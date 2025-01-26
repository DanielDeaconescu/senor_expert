import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import WhatsAppButton from "../ui/WhatsAppButton";
import Logo from "../ui/Logo";
import LoginBackground from "../data/images/login-background.jpg";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${LoginBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 100;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  & .authentication-container {
    position: relative;
    z-index: 101;
    display: flex;
    flex-direction: column;
  }
`;

const TextAuth = styled.h3`
  color: white;
`;

function ConnectPage() {
  return (
    <div>
      <LoginContainer className="login-container">
        <div className="authentication-container">
          <Logo />
          <TextAuth className="text-center pt-2">Autentificare</TextAuth>
          <LoginForm />
        </div>
      </LoginContainer>
      <WhatsAppButton />
    </div>
  );
}

export default ConnectPage;
