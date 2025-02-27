import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import supabase from "../services/supabase";
import styled from "styled-components";
import Logo from "../ui/Logo";
import toast from "react-hot-toast";

const StyledResetPasswordForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", "?"));
    const accessToken = params.get("access_token");

    if (!accessToken) {
      setError("Invalid or missing reset token.");
    }
  }, []);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setError("Parolele nu se potrivesc!");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSuccessMessage("Parola a fost resetată cu succes!");
      // toast.success(
      //   "Parola a fost resetata cu success! Imediat veți fi redirecționat la pagina de logare!"
      // );
      setTimeout(() => navigate("/connect"), 2000);
    }
  };

  return (
    <StyledResetPasswordForm>
      <Logo />
      <h2 className="mt-2">Resetare parolă</h2>
      <StyledForm onSubmit={handlePasswordReset}>
        <div className="mb-3">
          <label className="form-label">Parola nouă: </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            disabled={loading}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirmă parola nouă: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={loading}
            className="form-control"
          />
        </div>

        <button type="submit" disabled={loading} className="btn btn-primary">
          {loading ? "În curs de modificare..." : "Resetare parolă"}
        </button>
      </StyledForm>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </StyledResetPasswordForm>
  );
};

export default ResetPasswordForm;
