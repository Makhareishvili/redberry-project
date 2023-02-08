import styled from "styled-components";
import Resume from "../Resume";
import ExperienceInputs from "./ExperienceInputs";
import vector from "../../assets/Vector.png";
import AdditionalExperience from "./AdditionalExperience";
import { useState } from "react";

const ExperiencePage = () => {
  const [allow, setAllow] = useState<boolean>(false);
  console.log(allow);
  return (
    <ExperiencePageContainer allow={allow}>
      <BackDiv>
        <Ellipse>
          <Img src={vector} />
        </Ellipse>
      </BackDiv>
      <Experience>გამოცდილება</Experience>
      <PageNumber>2/3</PageNumber>
      <Line />
      <ExperienceInputs />
      <Resume />
      <AdditionalExperience allow={allow} setAllow={setAllow} />
      <BackButton>
        <BackButtonText>უკან</BackButtonText>
      </BackButton>
      <NextButton>
        <NextButtonText>შემდეგი</NextButtonText>
      </NextButton>
    </ExperiencePageContainer>
  );
};
const ExperiencePageContainer = styled.div<{ allow: boolean }>`
  position: relative;
  width: 1920px;
  height: ${({ allow }) => (allow ? "1707px" : "1080px")};
  background: #f9f9f9;
`;
const Experience = styled.p`
  position: absolute;
  width: 179px;
  height: 29px;
  left: 149px;
  top: 47px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  /* off black */

  color: #1a1a1a;
`;
const PageNumber = styled.p`
  position: absolute;
  width: 29px;
  height: 24px;
  left: 920px;
  top: 49px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  text-align: right;

  /* off black */

  color: #1a1a1a;
`;
const Line = styled.hr`
  position: absolute;
  width: 798px;
  height: 0px;
  left: 150px;
  top: 88px;

  /* off black */

  border: 1px solid #1a1a1a;
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

  background: #ffffff;
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
// Back button
const BackButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 60px;
  gap: 20px;

  position: absolute;
  width: 113px;
  height: 48px;
  left: 150px;
  bottom: 65px;

  background: #6b40e3;
  border-radius: 4px;

  border: none;
`;
const BackButtonText = styled.p`
  width: 43px;
  height: 20px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.08em;

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
// Next Button
const NextButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 60px;
  gap: 20px;

  position: absolute;
  width: 151px;
  height: 48px;
  right: 972px;
  bottom: 65px;

  background: #6b40e3;
  border-radius: 4px;

  border: none;
`;
const NextButtonText = styled.p`
  width: 81px;
  height: 20px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.08em;

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export default ExperiencePage;
