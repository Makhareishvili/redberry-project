import { useEffect, useState } from "react";
import PersonalPage from "../../components/personalpage/PersonalPage";

const PersonalInfoContainer = () => {
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
      regex: /^[ა-ჰ]+$/,
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

  useEffect(() => {
    //TODO LOCAL STORAGE
  }, []);

  return (
    <PersonalPage
      personalInfo={personalInfo}
      setPersonalInfo={setPersonalInfo}
    />
  );
};

export default PersonalInfoContainer;
