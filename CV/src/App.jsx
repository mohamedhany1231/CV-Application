import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import CvForm from "./components/CvForm";
function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "name",
    email: "email@gmail.com",
    phone: "011-22-333-444",
  });
  const [education, setEducation] = useState({
    title: "computer science",
    school: "some random university",
    date: new Date().toISOString().split("T")[0],
  });
  const [experiences, setExperiences] = useState([
    {
      id: crypto.randomUUID(),
      company: "my company",
      position: "my position",
      responsibility:
        "my responsibility at my ex company was to lore lore lore lore",
      startDate: new Date().toISOString().split("T")[0],
      endDate: new Date().toISOString().split("T")[0],
    },
  ]);
  const [form, setForm] = useState("experience");
  const [experienceId, setExperienceId] = useState(experiences[0]?.id);
  function getGenralForm() {
    setForm("general");
  }
  function getEducationForm() {
    setForm("education");
  }
  function getExperienceForm(id) {
    setForm("experience");
    setExperienceId(id);
  }
  function createExperience() {
    const id = crypto.randomUUID();
    setExperiences((cur) => [
      ...cur,
      {
        id: id,
        company: "my company",
        position: "my position",
        responsibility: "my responsibility ",
        startDate: new Date().toISOString().split("T")[0],
        endDate: new Date().toISOString().split("T")[0],
      },
    ]);
    getExperienceForm(id);
  }
  function deleteExperience(id) {
    if (
      window.confirm(
        `are you sure you want to delete ${
          experiences.filter((e) => e.id === id)[0].company
        } experience`
      )
    ) {
      if (id === experienceId) setExperienceId(null);
      setExperiences((cur) => cur.filter((exp) => exp.id !== id));
    }
  }
  return (
    <>
      <CvForm
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        education={education}
        setEducation={setEducation}
        experiences={experiences}
        setExperiences={setExperiences}
        form={form}
        experienceId={experienceId}
      />
      <div className="cv">
        <div>
          <GeneralInfo
            generalInfo={generalInfo}
            getGenralForm={getGenralForm}
          />
          <Education
            education={education}
            getEducationForm={getEducationForm}
          />
        </div>
        <Experiences
          experiences={experiences}
          getExperienceForm={getExperienceForm}
          createExperience={createExperience}
          deleteExperience={deleteExperience}
        />
      </div>
    </>
  );
}

export default App;
