import styled from "styled-components";
import Resume from "../Resume";
import PersonalDetailsPage from "./PersonalDetailsPage";
import PersonalPageInfoLive from "./PersonalPageInfoLive";

const PersonalPage = (props: any) => {
  const { personalInfo, setPersonalInfo } = props;

  return (
    <PersonalPageContainer>
      <PersonalDetailsPage
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <PersonalPageInfoLive personalInfo={personalInfo} />
    </PersonalPageContainer>
  );
};

const PersonalPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #f9f9f9;
`;
export default PersonalPage;
