import { useEffect, useState } from "react";
import EducationPage from "../../components/educationpage/EducationPage";
import ExperiencePage from "../../components/experiencepage/ExperiencePage";

const EducationInfoContainer = () => {
  const [educationInfo, setEducationInfo] = useState<object>({
    institute: {
      value: "",
      validation: null,
      min: 2,
      required: true,
      regex: /^[ა-ჰ]+$/,
    },
    degree: {
      value: "",
      validation: null,
      min: 2,
      required: true,
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
      regex: /^[ა-ჰ]+$/,
    },
  });

  useEffect(() => {
    //TODO LOCAL STORAGE
  }, []);

  return (
    <EducationPage
      educationInfo={educationInfo}
      setEducationInfo={setEducationInfo}
    />
  );
};

export default EducationInfoContainer;
