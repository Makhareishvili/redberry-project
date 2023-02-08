import styled, { css } from "styled-components";
import bottomlogo from "../assets/bottomstar.png";

const Resume = (props: any) => {
  const { firstName, lastName, final } = props;
  return (
    <ResumeContainer final={final}>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <Div></Div>
    </ResumeContainer>
  );
};
const ResumeContainer = styled.div<{ final?: boolean }>`
  ${(props) => css`
    box-sizing: ${props.final && "border-box"};
    position: absolute;
    width: 822px;
    height: 1080px;
    right: ${props.final ? "" : "0px"};
    top: ${props.final ? "54px" : "0px"};
    left: ${props.final && "calc(50% - 822px/2)"};
    background: #ffffff;
    border: ${props.final && "0.8px solid #000000"};
  `}
`;
const Div = styled.div`
  position: absolute;
  width: 42px;
  height: 42px;
  left: 78px;
  top: 994px;

  background-image: url(${bottomlogo});
`;
export default Resume;
