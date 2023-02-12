import { useEffect, useState } from "react";
import PersonalPage from "../../components/personalpage/PersonalPage";

const PersonalInfoContainer = ({
  onSaveLocalStorage,
  getLocalStorageObject,
}: any) => {
  const [personalInfo, setPersonalInfo] = useState<any>({
    firstName: {
      value: "",
      validation: null,
      min: 2,
      required: true,
      regex: /^[ა-ჰ]+$/,
    },
    lastName: {
      value: "",
      validation: null,
      min: 2,
      required: true,
      regex: /^[ა-ჰ]+$/,
    },
    aboutMe: {
      value: "",
      validation: null,
      min: 0,
      required: false,
      regex: /^[ა-ჰ0-9„“`~!@#$%^&*()_+=|\}{":';?/.,>[<\s]*$|^$/,
    },
    email: {
      value: "",
      validation: null,
      min: 2,
      required: true,
      regex: /^[\w-\._\+%]+@(redberry)\.ge$/,
    },
    phone: {
      value: "",
      validation: null,
      min: 2,
      required: true,
      regex: /^\+995\d{9}$/,
    },
    image: {
      validation: null,
      required: true,
      value: "",
      min: 0,
    },
  });

  const [experienceInfo, setExerienceInfo] = useState<any>();
  const [educationInfo, setEducationInfo] = useState<any>();

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo.personalInfo) {
        let newPersonalInfo = { ...userInfo.personalInfo };
        Object.keys(newPersonalInfo).forEach((key) => {
          let item = newPersonalInfo[key];
          if (key === "firstName" || key === "lastName") {
            item.regex = /^[ა-ჰ]+$/;
          }
          if (key === "aboutMe") {
            item.regex = /^[ა-ჰ0-9„“`~!@#$%^&*()_+=|\}{":';?/.,>[<\s]*$|^$/;
          }
          if (key === "email") {
            item.regex = /^[\w-\._\+%]+@(redberry)\.ge$/;
          }

          if (key === "phone") {
            item.regex = /^\+995\d{9}$/;
          }
        });

        setPersonalInfo({ ...newPersonalInfo });
      }
    }

    setExerienceInfo(getLocalStorageObject("experienceInfo"));
    setEducationInfo(getLocalStorageObject("educationInfo"));
  }, []);

  return (
    <PersonalPage
      personalInfo={personalInfo}
      setPersonalInfo={setPersonalInfo}
      onSaveLocalStorage={onSaveLocalStorage}
      experienceInfo={experienceInfo}
      educationInfo={educationInfo}
    />
  );
};

export default PersonalInfoContainer;
