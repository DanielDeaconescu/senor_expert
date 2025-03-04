import styled from "styled-components";

const StyledWorkingHours = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  background-color: hsl(244, 28%, 23%);
  color: white;
  padding: 0.5rem;
  & p {
    padding: 0;
    margin: 0;
  }
`;

function WorkingHours() {
  return (
    <StyledWorkingHours className="working-hours">
      <p>
        <i class="fa-solid fa-calendar-days me-2"></i>
        Program: Luni-Vineri | 09:00 - 17:00
      </p>
    </StyledWorkingHours>
  );
}

export default WorkingHours;
