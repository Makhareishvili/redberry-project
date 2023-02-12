import styled from "styled-components";
import ExperienceDetailsPage from "./ExperienceDetailsPage";
import PersonalPageInfoLive from "../personalpage/PersonalPageInfoLive";

const ExperiencePage = (props: any) => {
  const {
    experienceInfo,
    setExperienceInfo,
    onSaveLocalStorage,
    personalInfo,
    educationInfo,
  } = props;
  return (
    <ExperiencePageContainer>
      <ExperienceDetailsPage
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
        onSaveLocalStorage={onSaveLocalStorage}
      />
      <PersonalPageInfoLive
        personalInfo={personalInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
      />
    </ExperiencePageContainer>
  );
};
const ExperiencePageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #f9f9f9;
`;
export default ExperiencePage;
