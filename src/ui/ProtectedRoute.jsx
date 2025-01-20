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

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is no authenticated user, redirect to the /connect (original: /login)
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/connect");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. While loading, show a spinner - we should return a full-page element
  if (isLoading)
    return (
      <FullPage>
        <p>Se incarca...</p>
      </FullPage>
    );

  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
