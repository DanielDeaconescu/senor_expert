import styled from "styled-components";

const StyledFormRow = styled.div`
  /* display: grid; */
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  /* grid-template-columns: 24rem 1fr 1.2fr; */
  /* gap: 2.4rem; */

  padding: 1.2rem 0;

  @media (max-width: 576px) {
    padding: 0;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 0.5rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0.5rem;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    padding: 0.5rem;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    padding: 0.5rem;
  }

  @media (min-width: 1400px) {
    padding: 0.5rem;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  /* &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  } */

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && (
        <Label className="form-label" htmlFor={children.props.id}>
          {label}
        </Label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
