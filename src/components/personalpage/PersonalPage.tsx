import styled from "styled-components";
import Resume from "../Resume";
import PersonalInputs from "./PersonalInputs";

const PersonalPage = (props: any) => {
  const { firstName, lastName, setFirstName, setLastName } = props;
  return (
    <PersonalPageContainer>
      <PersonalInputs setFirstName={setFirstName} setLastName={setLastName} />
      <Resume firstName={firstName} lastName={lastName} />
    </PersonalPageContainer>
  );
};

const PersonalPageContainer = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;

  background: #f9f9f9;
`;
export default PersonalPage;
