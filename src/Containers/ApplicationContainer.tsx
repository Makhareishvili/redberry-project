import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EducationInfoContainer from "./EducationInfo/EducationInfoContainer";
import ExperienceInfoContainer from "./ExperienceInfo/ExperienceInfoContainer";
import FinalResumeContainer from "./FinalResume/FinalResumeContainer";
import HomeContainer from "./Home/HomeContainer";
import PersonalInfoContainer from "./PersonalInfo/PersonalInfoContainer";

const ApplicationContainer = () => {
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      localStorage.setItem("userInfo", "{}");
    }
  }, []);

  const onSaveLocalStorage = (obj: any, type: any) => {
    if (type === "userInfo") {
      let result = JSON.parse(localStorage.getItem("userInfo"));
      result.personalInfo = { ...obj };
      localStorage.setItem("userInfo", JSON.stringify(result));
    }

    if (type === "experienceInfo") {
      let result = JSON.parse(localStorage.getItem("userInfo"));
      result.experienceInfo = { ...obj };
      localStorage.setItem("userInfo", JSON.stringify(result));
    }

    if (type === "educationInfo") {
      let result = JSON.parse(localStorage.getItem("userInfo"));
      result.educationInfo = { ...obj };
      localStorage.setItem("userInfo", JSON.stringify(result));
    }
  };

  const getLocalStorageObject = (key) => {
    if (localStorage.getItem("userInfo")) {
      return JSON.parse(localStorage.getItem("userInfo"))[key];
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeContainer />,
    },
    {
      path: "/personalinfo",
      element: (
        <PersonalInfoContainer
          onSaveLocalStorage={onSaveLocalStorage}
          getLocalStorageObject={getLocalStorageObject}
        />
      ),
    },
    {
      path: "/experienceinfo",
      element: (
        <ExperienceInfoContainer
          onSaveLocalStorage={onSaveLocalStorage}
          getLocalStorageObject={getLocalStorageObject}
        />
      ),
    },
    {
      path: "/educationinfo",
      element: (
        <EducationInfoContainer
          onSaveLocalStorage={onSaveLocalStorage}
          getLocalStorageObject={getLocalStorageObject}
        />
      ),
    },
    {
      path: "/final",
      element: (
        <FinalResumeContainer getLocalStorageObject={getLocalStorageObject} />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default ApplicationContainer;
