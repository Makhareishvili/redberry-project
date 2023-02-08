import styled from "styled-components";
const ExperienceInputs = () => {
  return (
    <>
      <form>
        <PositionDiv>
          <Label>თანამდებობა</Label>
          <PositionInput />
          <Hint>მინიმუმ 2 სიმბოლო</Hint>
        </PositionDiv>
        <EmployerDiv>
          <Label>დამსაქმებელი</Label>
          <EmployerInput />
          <Hint>მინიმუმ 2 სიმბოლო</Hint>
        </EmployerDiv>
        <DateStartDiv>
          <Label>დაწყების რიცხვი</Label>
          <DateStartInput type="date" />
        </DateStartDiv>
        <DateEndDiv>
          <Label>დამთავრების რიცხვი</Label>
          <DateEndInput type="date" />
        </DateEndDiv>
        <DescriptionDiv>
          <Label>აღწერა</Label>
          <DescriptionTextarea />
        </DescriptionDiv>
        <BottomLine />
      </form>
    </>
  );
};

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
// Position
const PositionDiv = styled.div`
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
const PositionInput = styled.input`
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
// Employer
const EmployerDiv = styled(PositionDiv)`
  left: calc(50% - 846px / 2 - 411px);
  top: 294px;
`;
const EmployerInput = styled(PositionInput)``;
// Date start
const DateStartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 24px;
  gap: 8px;

  position: absolute;
  width: 419px;
  height: 125px;
  left: calc(50% - 419px / 2 - 624.5px);
  top: 431px;
`;
const DateStartInput = styled.input`
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
// Date end
const DateEndDiv = styled(DateStartDiv)`
  left: calc(50% - 419px / 2 - 197.5px);
`;
const DateEndInput = styled(DateStartInput)``;
// Description
const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 24px;
  gap: 8px;

  position: absolute;
  width: 846px;
  height: 168px;
  left: calc(50% - 846px / 2 - 411px);
  top: 541px;
`;
const DescriptionTextarea = styled.textarea`
  box-sizing: border-box;

  width: 798px;
  height: 123px;

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
  left: 149px;
  top: 759px;
`;
export default ExperienceInputs;
