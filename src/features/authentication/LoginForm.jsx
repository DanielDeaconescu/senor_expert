import { useState } from "react";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

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
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Username client:{" "}
        </label>
        <input
          type="email"
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
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        {!isLoading ? "Conectare" : "Se conectează..."}
      </button>
    </form>
  );
}

export default LoginForm;
