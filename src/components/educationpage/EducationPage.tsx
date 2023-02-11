import styled from "styled-components";
import PersonalPageInfoLive from "../personalpage/PersonalPageInfoLive";
import Resume from "../Resume";
import EducationDetailsPage from "./EducationDetailsPage";

const EducationPage = (props: any) => {
  const {
    educationInfo,
    setEducationInfo,
    personalInfo,
    experienceInfo,
    onSaveLocalStorage,
  } = props;
  return (
    <EducationPageContainer>
      <EducationDetailsPage
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
        onSaveLocalStorage={onSaveLocalStorage}
      />
      <PersonalPageInfoLive
        personalInfo={personalInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
      />
    </EducationPageContainer>
  );
};

const EducationPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #f9f9f9;
`;

export default EducationPage;
