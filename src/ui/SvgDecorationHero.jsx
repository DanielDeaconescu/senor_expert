import styled from "styled-components";

const StyledSvg = styled.svg`
  margin-bottom: -2px;
`;

function SvgDecorationHero() {
  return (
    <StyledSvg
      className="frame-decoration"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1920 200"
    >
      <polygon
        fill="rgb(243, 246, 249)"
        points="0,150 1920,50 1920,200 0,200"
      />
    </StyledSvg>
  );
}
export default SvgDecorationHero;
