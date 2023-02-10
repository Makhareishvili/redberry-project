import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EducationInfoContainer from "./EducationInfo/EducationInfoContainer";
import ExperienceInfoContainer from "./ExperienceInfo/ExperienceInfoContainer";
import FinalResumeContainer from "./FinalResume/FinalResumeContainer";
import HomeContainer from "./Home/HomeContainer";
import PersonalInfoContainer from "./PersonalInfo/PersonalInfoContainer";

const ApplicationContainer = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeContainer />,
    },
    {
      path: "/personalinfo",
      element: <PersonalInfoContainer />,
    },
    {
      path: "/experienceinfo",
      element: <ExperienceInfoContainer />,
    },
    {
      path: "/educationinfo",
      element: <EducationInfoContainer />,
    },
    {
      path: "/final",
      element: <FinalResumeContainer />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default ApplicationContainer;
