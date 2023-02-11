import { useEffect, useState } from "react";
import EducationPage from "../../components/educationpage/EducationPage";
import ExperiencePage from "../../components/experiencepage/ExperiencePage";

const EducationInfoContainer = ({
  onSaveLocalStorage,
  getLocalStorageObject,
}) => {
  const [educationInfo, setEducationInfo] = useState<object>({
    institute: {
      value: "",
      validation: null,
      min: 2,
      required: true,
      regex: /[\S\s]+[\S]+/,
    },
    degree: {
      value: "",
      validation: null,
      min: 2,
      required: true,
      regex: /[\S\s]+[\S]+/,
    },
    endDate: {
      value: "",
      validation: null,
      min: 2,
      required: true,
      regex: /[\S\s]+[\S]+/,
    },
    description: {
      value: "",
      validation: null,
      min: 1,
      required: true,
      regex: /[\S\s]+[\S]+/,
    },
  });

  const [personalInfo, setPersonalInfo] = useState<any>();
  const [experienceInfo, setExperienceInfo] = useState<any>();

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo.educationInfo) {
        let newEducationInfo = { ...userInfo.educationInfo };
        Object.keys(newEducationInfo).forEach((key) => {
          let item = newEducationInfo[key];
          item.regex = /[\S\s]+[\S]+/;
        });
        setEducationInfo({ ...newEducationInfo });
      }
      setPersonalInfo(getLocalStorageObject("personalInfo"));
      setExperienceInfo(getLocalStorageObject("experienceInfo"));
    }
  }, []);

  return (
    <EducationPage
      educationInfo={educationInfo}
      setEducationInfo={setEducationInfo}
      personalInfo={personalInfo}
      experienceInfo={experienceInfo}
      onSaveLocalStorage={onSaveLocalStorage}
    />
  );
};

export default EducationInfoContainer;
