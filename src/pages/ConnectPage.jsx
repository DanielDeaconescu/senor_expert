import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import WhatsAppButton from "../ui/WhatsAppButton";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function ConnectPage() {
  return (
    <div>
      <LoginContainer className="login-container">
        <h1>Logare</h1>
        <p>
          Introduceți datele de autentificare pentru a vă conecta la platformă.
        </p>
        <LoginForm />
      </LoginContainer>
      <WhatsAppButton />
    </div>
  );
}

export default ConnectPage;
