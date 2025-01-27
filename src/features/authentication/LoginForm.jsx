import { useEffect, useState } from "react";
import { useLogin } from "./useLogin";
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

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  // Load saved email from localStorage when the component mounts

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  function handleSubmit(e) {
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
  }

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
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
          auto-complete="current-password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        {!isLoading ? "Conectare" : "Se conectează..."}
      </button>
    </StyledLoginForm>
  );
}

export default LoginForm;
