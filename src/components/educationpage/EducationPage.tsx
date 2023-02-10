import styled from "styled-components";
import Resume from "../Resume";
import EducationDetailsPage from "./EducationDetailsPage";
import EducationPageInfoLive from "./EducationPageIndoLive";

const EducationPage = (props: any) => {
  const { educationInfo, setEducationInfo } = props;
  return (
    <EducationPageContainer>
      <EducationDetailsPage
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />
      <EducationPageInfoLive />
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
