import styled from "styled-components";
import Resume from "../Resume";
import EducationInputs from "./EducationInputs";

const EducationPage = () => {
  return (
    <EducationPageContainer>
      <EducationInputs />
      <Resume />
    </EducationPageContainer>
  );
};

const EducationPageContainer = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;

  background: #f9f9f9;
`;

export default EducationPage;
