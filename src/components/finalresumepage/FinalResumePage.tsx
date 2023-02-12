import styled from "styled-components";
import PersonalPageInfoLive from "../personalpage/PersonalPageInfoLive";
import closelogo from "../../assets/close.png";
import vector from "../../assets/Vector.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const FinalResumePage = (props: any) => {
  const { personalInfo, experienceInfo, educationInfo } = props;
  const [isActive, setIsActive] = useState(true);
  const localStorageClearer = () => {
    localStorage.clear();
  };
  return (
    <ResumePageContainer>
      <div>
        <Link to={"/"}>
          <BackButton onClick={() => localStorageClearer()}>
            <img src={vector} />
          </BackButton>
        </Link>
      </div>
      <PersonalPageInfoLive
        isFinal
        personalInfo={personalInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
      />
      {isActive && (
        <DisplayMessageContainer>
          <Message>რეზიუმე წარმატებით გაიგზავნა 🎉</Message>
          <CloseDiv>
            <CloseImg onClick={() => setIsActive(!isActive)} src={closelogo} />
          </CloseDiv>
        </DisplayMessageContainer>
      )}
    </ResumePageContainer>
  );
};

const ResumePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  padding: 55px 70px 55px 48px;
  display: flex;
  justify-content: center;
`;
const DisplayMessageContainer = styled.div`
  position: absolute;
  right: 90px;
  display: flex;
  width: 427px;
  height: 167px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 40px 30px;
`;
const Message = styled.p`
  width: 364px;
  height: 86px;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 43px;
  color: #1a1a1a;
`;
const CloseDiv = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;
const CloseImg = styled.img``;
const BackButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 48px;
  top: 45px;
  background: #f9f9f9;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default FinalResumePage;
