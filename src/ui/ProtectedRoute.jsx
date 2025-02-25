import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  // Wait until authentication is confirmed before redirecting
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/connect");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // Show loading screen while checking authentication
  if (isLoading)
    return (
      <FullPage>
        <p>Se încarcă...</p>
      </FullPage>
    );

  return children;
}

export default ProtectedRoute;
