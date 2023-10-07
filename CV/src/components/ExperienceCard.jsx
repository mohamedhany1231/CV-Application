export default function ExperienceCard({
  experience,
  getExperienceForm,
  deleteExperience,
}) {
  return (
    <div className="experience-card">
      <h4>{experience.company}</h4>
      <h5 className="position"> {experience.position}</h5>
      <p className="responsibilities">{experience.responsibility}</p>
      <p className="start-date">{experience.startDate}</p>
      <p className="end-date">{experience.endDate}</p>
      <span className="edit" onClick={() => getExperienceForm(experience.id)}>
        ✏️
      </span>

      <span className="delete" onClick={() => deleteExperience(experience.id)}>
        🗑️
      </span>
    </div>
  );
}
