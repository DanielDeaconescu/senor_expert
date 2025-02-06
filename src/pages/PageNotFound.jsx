import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Logo />
        <Heading as="h2">
          Ups! Se pare că pagina pe care o cauți nu există sau a fost mutată. Te
          rugăm să verifici adresa URL sau să te întorci la pagina principală.
        </Heading>
        <button className="btn btn-primary" onClick={moveBack} size="large">
          Înapoi la pagina principală
        </button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
