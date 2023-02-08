import styled from "styled-components";
import vector from "../../assets/Vector.png";
import AdditionalInstituteInputs from "./AdditionalInstituteInputs";

const EducationInputs = () => {
  return (
    <>
      <BackDiv>
        <Ellipse>
          <Img src={vector} />
        </Ellipse>
      </BackDiv>
      <Education>განათლება</Education>
      <PageNumber>3/3</PageNumber>
      <Line />
      <form>
        <InstituteDiv>
          <Label>თანამდებობა</Label>
          <InstituteInput />
          <Hint>მინიმუმ 2 სიმბოლო</Hint>
        </InstituteDiv>
        <DegreeDiv>
          <Label>ხარისხი</Label>
          <SelectDegree>
            <Option value={0} selected hidden>
              აირჩიე ხარისხი
            </Option>
            <Option>საშუალო სკოლის დიპლომი</Option>
            <Option>ზოგადსაგანმანათლებლო დიპლომი</Option>
            <Option>ბაკალავრი</Option>
            <Option>მაგისტრი</Option>
            <Option>დოქტორი</Option>
            <Option>ასოცირებული ხარისხი</Option>
            <Option>სტუდენტი</Option>
            <Option>კოლეჯი (ხარისხის გარეშე)</Option>
            <Option>სხვა</Option>
          </SelectDegree>
        </DegreeDiv>
        <DateDiv>
          <Label>დამთავრების რიცხვი</Label>
          <DateInput type="date" />
        </DateDiv>
        <DescriptionDiv>
          <Label>აღწერა</Label>
          <DescriptionTextarea />
        </DescriptionDiv>
        <BottomLine />
      </form>
      <AdditionalInstituteInputs />
      <BackButton>
        <BackButtonText>უკან</BackButtonText>
      </BackButton>
      <NextButton>
        <NextButtonText>შემდეგი</NextButtonText>
      </NextButton>
    </>
  );
};

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
const Education = styled.p`
  position: absolute;
  width: 153px;
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
// Label
const Label = styled.label`
  width: 798px;
  height: 21px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */

  display: flex;
  align-items: center;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
// Hint
const Hint = styled.p`
  width: 798px;
  height: 21px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  /* შავი/500 */

  color: #2e2e2e;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;
// Institute
const InstituteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 24px;
  gap: 8px;

  position: absolute;
  width: 846px;
  height: 125px;
  left: calc(50% - 846px / 2 - 411px);
  top: 157px;
`;
const InstituteInput = styled.input`
  box-sizing: border-box;

  width: 798px;
  height: 48px;

  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
// Date
const DateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 24px;
  gap: 8px;

  position: absolute;
  width: 419px;
  height: 93px;
  left: calc(50% - 419px / 2 - 197.5px);
  top: 294px;
`;
const DateInput = styled.input`
  box-sizing: border-box;

  width: 371px;
  height: 48px;

  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
// Description
const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 24px;
  gap: 8px;

  position: absolute;
  width: 846px;
  height: 224px;
  left: calc(50% - 846px / 2 - 411px);
  top: 405px;
`;
const DescriptionTextarea = styled.textarea`
  box-sizing: border-box;

  width: 798px;
  height: 179px;

  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;

  resize: none;
`;
// BottomLine
const BottomLine = styled.hr`
  position: absolute;
  width: 798px;
  height: 0px;
  left: 150px;
  top: 674px;

  border: 1px solid #c1c1c1;
`;
// Degree
const DegreeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 24px;
  gap: 8px;

  position: absolute;
  width: 419px;
  height: 125px;
  left: calc(50% - 419px / 2 - 624.5px);
  top: 294px;
`;
const SelectDegree = styled.select`
  box-sizing: border-box;

  width: 371px;
  height: 48px;

  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
const Option = styled.option`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 16px;
  gap: 10px;

  width: 370px;
  height: 41px;

  background: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
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
export default EducationInputs;
