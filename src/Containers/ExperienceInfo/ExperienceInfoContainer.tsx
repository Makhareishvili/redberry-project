import { useEffect, useState } from "react";
import ExperiencePage from "../../components/experiencepage/ExperiencePage";

const ExperienceInfoContainer = () => {
  const [experienceInfo, setExperienceInfo] = useState<object>({
    position: {
      value: "",
      validation: null,
      min: 2,
      required: true,
      regex: /^[ა-ჰ]+$/,
    },
    employer: {
      value: "",
      validation: null,
      min: 2,
      required: true,
      regex: /^[ა-ჰ]+$/,
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
      regex: /^[ა-ჰ]+$/,
    },
  });

  useEffect(() => {
    //TODO LOCAL STORAGE
  }, []);

  return (
    <ExperiencePage
      experienceInfo={experienceInfo}
      setExperienceInfo={setExperienceInfo}
    />
  );
};

export default ExperienceInfoContainer;
