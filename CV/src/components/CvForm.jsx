export default function CvForm({
  generalInfo,
  setGeneralInfo,
  education,
  setEducation,
  experiences,
  setExperiences,
  experienceId,
  form,
}) {
  return (
    <form>
      {form === "general" ? (
        <GeneralInfoForm
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
      ) : form === "education" ? (
        <EducationForm education={education} setEducation={setEducation} />
      ) : form === "experience" ? (
        <ExperienceEditForm
          experiences={experiences}
          setExperiences={setExperiences}
          id={experienceId}
        />
      ) : null}
    </form>
  );
}

function ExperienceEditForm({ experiences, setExperiences, id }) {
  const experinece = experiences.filter((exp) => exp.id == id)[0];
  function handleCompanyChange(e) {
    const company = e.target.value;
    setExperiences((cur) =>
      cur.map((exp) => (exp.id === id ? { ...exp, company: company } : exp))
    );
  }

  function handlePositionChange(e) {
    const position = e.target.value;
    setExperiences((cur) =>
      cur.map((exp) => (exp.id === id ? { ...exp, position: position } : exp))
    );
  }
  function handleResponsibilityChange(e) {
    const responsibility = e.target.value;
    setExperiences((cur) =>
      cur.map((exp) =>
        exp.id === id ? { ...exp, responsibility: responsibility } : exp
      )
    );
  }
  function handleStartDateChange(e) {
    const startDate = e.target.value;
    if (startDate > experinece.endDate) return;
    setExperiences((cur) =>
      cur.map((exp) => (exp.id === id ? { ...exp, startDate: startDate } : exp))
    );
  }
  function handleEndDateChange(e) {
    const endDate = e.target.value;
    setExperiences((cur) =>
      cur.map((exp) => (exp.id === id ? { ...exp, endDate: endDate } : exp))
    );
  }

  return (
    <>
      <label>company</label>
      <input
        id="name"
        value={experinece?.company}
        onChange={handleCompanyChange}
      />
      <label> position</label>
      <input
        id="name"
        value={experinece?.position}
        onChange={handlePositionChange}
      />
      <label> responsibility</label>
      <input
        id="name"
        value={experinece?.responsibility}
        onChange={handleResponsibilityChange}
      />

      <label>start Date</label>
      <input
        type="date"
        id="name"
        value={experinece?.startDate}
        onChange={handleStartDateChange}
      />
      <label>end Date</label>
      <input
        type="date"
        id="name"
        value={experinece?.endDate}
        onChange={handleEndDateChange}
      />
    </>
  );
}
function GeneralInfoForm({ generalInfo, setGeneralInfo }) {
  function handleNameChange(e) {
    const name = e.target.value;
    setGeneralInfo((cur) => Object.assign({}, cur, { name: name }));
  }

  function handleEmailChange(e) {
    const email = e.target.value;
    setGeneralInfo((cur) => Object.assign({}, cur, { email: email }));
  }
  function handlePhoneChange(e) {
    const phone = e.target.value;
    setGeneralInfo((cur) => Object.assign({}, cur, { phone: phone }));
  }
  return (
    <>
      <label>Name</label>
      <input id="name" value={generalInfo.name} onChange={handleNameChange} />
      <label>Email</label>
      <input id="name" value={generalInfo.email} onChange={handleEmailChange} />
      <label>Phone</label>
      <input id="name" value={generalInfo.phone} onChange={handlePhoneChange} />
    </>
  );
}

function EducationForm({ education, setEducation }) {
  function handleTitleChange(e) {
    const title = e.target.value;
    setEducation((cur) => Object.assign({}, cur, { title: title }));
  }

  function handleSchoolChange(e) {
    const school = e.target.value;
    setEducation((cur) => Object.assign({}, cur, { school: school }));
  }
  function handleDateChange(e) {
    const date = e.target.value;
    console.log(date);
    setEducation((cur) => Object.assign({}, cur, { date: date }));
  }
  return (
    <>
      <label>School</label>
      <input id="name" value={education.school} onChange={handleSchoolChange} />
      <label>Education Title</label>
      <input id="name" value={education.title} onChange={handleTitleChange} />

      <label>Date</label>
      <input
        type="date"
        id="name"
        value={education.date}
        onChange={handleDateChange}
      />
    </>
  );
}
