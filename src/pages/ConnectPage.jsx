import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import WhatsAppButton from "../ui/WhatsAppButton";
import Logo from "../ui/Logo";
import LoginBackground from "../data/images/login-background.jpg";
import SideButtons from "../ui/SideButtons";

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
  z-index: 8;
  font-weight: 600;
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

  @media (max-width: 576px) {
    padding: 0 2rem;
  }
`;

const TextAuth = styled.h3`
  color: white;
  font-weight: 600;
`;

const Text = styled.div`
  color: white;
  text-align: center;
  padding-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const AuthenticationContainer = styled.div`
  max-width: 350px;
`;

function ConnectPage() {
  return (
    <div>
      <LoginContainer className="login-container">
        <AuthenticationContainer className="authentication-container">
          <Text>
            Autentificați-vă pentru a putea încărca documentele contabile.
          </Text>
          <Logo />
          <TextAuth className="text-center pt-2">Autentificare</TextAuth>
          <LoginForm />
        </AuthenticationContainer>
      </LoginContainer>
      <SideButtons />
    </div>
  );
}

export default ConnectPage;
