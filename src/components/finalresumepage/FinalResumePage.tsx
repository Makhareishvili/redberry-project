import styled from "styled-components";
import vector from "../../assets/Vector.png";
import Resume from "../Resume";
import closelogo from "../../assets/close.png";

const FinalResumePage = () => {
  return (
    <ResumePageContainer>
      <BackDiv>
        <Ellipse>
          <Img src={vector} />
        </Ellipse>
      </BackDiv>
      <Resume final />
      <DisplayMessageContainer>
        <CloseDiv>
          <CloseImg src={closelogo} />
        </CloseDiv>
        <Message>რეზიუმე წარმატებით გაიგზავნა 🎉</Message>
      </DisplayMessageContainer>
    </ResumePageContainer>
  );
};

const ResumePageContainer = styled.div`
  position: relative;
  width: 1920px;
  height: 1263px;

  background: #ffffff;
`;
const BackDiv = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 48px;
  top: 45px;
`;
const Ellipse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  width: 40px;
  height: 40px;
  left: 48px;
  top: 45px;

  border-radius: 20px;

  background: #f9f9f9;
`;
const Img = styled.img`
  /* position: absolute; */
  width: 9.21px;
  height: 16px;
  left: 62px;
  top: 57px;

  /* შავი/500 */

  /* background: #2e2e2e; */
`;
// DisplayMessageContainer
const DisplayMessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 28px 30px 30px;
  gap: 10px;

  position: absolute;
  width: 427px;
  height: 167px;
  left: 1423px;
  top: 53px;

  background: #ffffff;
  border: 1px solid #e4e4e4;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
const Message = styled.p`
  width: 364px;
  height: 86px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 43px;
  /* or 154% */

  /* off black */

  color: #1a1a1a;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
const CloseDiv = styled.div`
  /* position: absolute; */
  width: 20px;
  height: 20px;
  left: 17.18%;
  left: 1822px;
  top: 67px;

  cursor: pointer;
`;
const CloseImg = styled.img`
  position: absolute;
  right: 5%;
  top: 15.18%;
  bottom: 17.19%;
`;
export default FinalResumePage;
