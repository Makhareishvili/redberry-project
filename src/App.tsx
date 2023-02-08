import { useState } from "react";
import EducationPage from "./components/educationpage/EducationPage";
import ExperiencePage from "./components/experiencepage/ExperiencePage";
import FinalResumePage from "./components/finalresumepage/FinalResumePage";
import Homepage from "./components/homepage/HomePage";
import PersonalPage from "./components/personalpage/PersonalPage";

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  return (
    <>
      <Homepage />
      {/* <PersonalPage
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName}
      /> */}
      {/* <ExperiencePage /> */}
      {/* <EducationPage /> */}
      {/* <FinalResumePage /> */}
    </>
  );
}

export default App;
