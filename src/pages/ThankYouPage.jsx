import styled from "styled-components";
import Logo from "../ui/Logo";
import { useNavigate } from "react-router";

const StyledThankYouPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  background-color: darkgrey;
  color: black;

  &:hover {
    background-color: grey;
  }
`;

function ThankYouPage() {
  const navigate = useNavigate();
  return (
    <StyledThankYouPage className="container">
      <Logo />
      <h4 className="text-center pt-2">
        Mulțumim pentru interesul acordat serviciilor noastre! Am primit
        solicitarea dumneavoastră și vom reveni în cel mai scurt timp cu un
        răspuns.
      </h4>
      <StyledButton onClick={() => navigate("/")}>
        Înapoi la pagina principală
      </StyledButton>
    </StyledThankYouPage>
  );
}

export default ThankYouPage;
