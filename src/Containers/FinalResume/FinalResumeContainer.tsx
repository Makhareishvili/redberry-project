import { useEffect, useState } from "react";
import FinalResumePage from "../../components/finalresumepage/FinalResumePage";

const FinalResumeContainer = ({ getLocalStorageObject }: any) => {
  const [personalInfo, setPersonalInfo] = useState<any>();
  const [experienceInfo, setexperienceInfo] = useState<any>();
  const [educationInfo, setEducationInfo] = useState<any>();

  useEffect(() => {
    setPersonalInfo(getLocalStorageObject("personalInfo"));
    setexperienceInfo(getLocalStorageObject("experienceInfo"));
    setEducationInfo(getLocalStorageObject("educationInfo"));
  }, []);

  return (
    <FinalResumePage
      personalInfo={personalInfo}
      experienceInfo={experienceInfo}
      educationInfo={educationInfo}
    />
  );
};
export default FinalResumeContainer;
