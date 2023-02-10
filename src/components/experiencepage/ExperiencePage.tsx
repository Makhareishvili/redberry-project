import styled from "styled-components";
import Resume from "../Resume";
import { useState } from "react";
import ExperienceDetailsPage from "./ExperienceDetailsPage";
import ExperiencePageInfoLive from "./ExperiencePageInfoLive";

const ExperiencePage = (props: any) => {
  const { experienceInfo, setExperienceInfo } = props;
  return (
    <ExperiencePageContainer>
      <ExperienceDetailsPage
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
      />
      <ExperiencePageInfoLive />
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
