import styled from "styled-components";
import PersonalDetailsPage from "./PersonalDetailsPage";
import PersonalPageInfoLive from "./PersonalPageInfoLive";

const PersonalPage = (props: any) => {
  const {
    personalInfo,
    setPersonalInfo,
    onSaveLocalStorage,
    experienceInfo,
    educationInfo,
  } = props;

  return (
    <PersonalPageContainer>
      <PersonalDetailsPage
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        onSaveLocalStorage={onSaveLocalStorage}
      />
      <PersonalPageInfoLive
        personalInfo={personalInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
      />
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
