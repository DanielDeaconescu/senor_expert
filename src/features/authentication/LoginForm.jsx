import { useEffect, useState } from "react";
import { useLogin } from "./useLogin";
import useResetPassword from "../authentication/useResetPassword"; // Your custom hook for password reset
import styled from "styled-components";

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  color: white;

  @media (max-width: 576px) {
    padding: 0 2rem;
  }
`;

const StyledInput = styled.input`
  &:focus {
    border-color: var(--color-brand-900);
    box-shadow: 0 0 0 0.25rem var(--color-brand-900);
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle between login and reset password forms
  const { login, isLoading } = useLogin();
  const {
    handleResetPassword,
    loading: resetLoading,
    error,
    successMessage,
  } = useResetPassword();

  // Load saved email from localStorage when the component mounts
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );

    localStorage.setItem("email", email);
  };

  const handleSubmitResetPassword = (e) => {
    e.preventDefault();
    if (!email) return;
    handleResetPassword(email); // Call the reset password function
  };

  return (
    <div>
      {!isForgotPassword ? (
        // Login Form
        <StyledLoginForm onSubmit={handleSubmitLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Username client
            </label>
            <StyledInput
              type="email"
              id="email"
              autoComplete="username"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Parolă
            </label>
            <StyledInput
              type="password"
              id="password"
              autoComplete="current-password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {!isLoading ? "Conectare" : "Se conectează..."}
          </button>

          <div className="text-center pt-3">
            <a
              href="#"
              onClick={() => setIsForgotPassword(true)}
              className="forgot-password-link"
            >
              Ați uitat parola?
            </a>
          </div>
        </StyledLoginForm>
      ) : (
        // Reset Password Form
        <StyledLoginForm onSubmit={handleSubmitResetPassword}>
          <h2 className="text-center">Resetați parola</h2>
          <div className="mb-3">
            <label htmlFor="reset-email" className="form-label text-center">
              Introduceți adresa de email și veți primi un link de resetare a
              parolei
            </label>
            <div className="info-reset-password">
              <i class="fa-solid fa-circle-info"></i>
              <small>
                Linkul de resetare al parolei poate veni în 5 minute. Vă rugăm
                așteptați înainte de a trimite o nouă solicitare.
              </small>
            </div>
            <StyledInput
              type="email"
              id="reset-email"
              autoComplete="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={resetLoading}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={resetLoading}
          >
            {resetLoading ? "Se trimite..." : "Trimite Link Resetare"}
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {/* {successMessage && <p style={{ color: "green" }}>{successMessage}</p>} */}

          <div className="text-center pt-3">
            <a
              href="#"
              onClick={() => setIsForgotPassword(false)}
              style={{
                textDecoration: "underline",
                color: "blue",
                cursor: "pointer",
              }}
              className="back-to-login-link"
            >
              Înapoi la pagina de logare
            </a>
          </div>
        </StyledLoginForm>
      )}
    </div>
  );
};

export default LoginForm;
