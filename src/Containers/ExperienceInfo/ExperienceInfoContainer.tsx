import { useEffect, useState } from "react";
import ExperiencePage from "../../components/experiencepage/ExperiencePage";

const ExperienceInfoContainer = ({
  onSaveLocalStorage,
  getLocalStorageObject,
}) => {
  const [experienceInfo, setExperienceInfo] = useState<object>({
    position: {
      value: "",
      validation: null,
      min: 2,
      required: true,
      regex: /[\S\s]+[\S]+/,
    },
    employer: {
      value: "",
      validation: null,
      min: 2,
      required: true,
      regex: /[\S\s]+[\S]+/,
    },
    startDate: {
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
  const [educationInfo, setEducationInfo] = useState<any>();

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo.experienceInfo) {
        let newExperienceInfo = { ...userInfo.experienceInfo };
        Object.keys(newExperienceInfo).forEach((key) => {
          let item = newExperienceInfo[key];
          item.regex = /[\S\s]+[\S]+/;
        });

        setExperienceInfo({ ...newExperienceInfo });
      }
      setPersonalInfo(getLocalStorageObject("personalInfo"));
      setEducationInfo(getLocalStorageObject("educationInfo"));
    }
  }, []);

  return (
    <ExperiencePage
      experienceInfo={experienceInfo}
      setExperienceInfo={setExperienceInfo}
      onSaveLocalStorage={onSaveLocalStorage}
      personalInfo={personalInfo}
      educationInfo={educationInfo}
    />
  );
};

export default ExperienceInfoContainer;
