import ExperienceCard from "./ExperienceCard";
export default function Experiences({
  experiences,
  getExperienceForm,
  createExperience,
  deleteExperience,
}) {
  return (
    <section className="experiences">
      <h3 className="title">experiences </h3>
      {experiences.map((exp) => (
        <ExperienceCard
          experience={exp}
          key={exp.id}
          getExperienceForm={getExperienceForm}
          deleteExperience={deleteExperience}
        />
      ))}
      <span className="add" onClick={createExperience}>
        ➕
      </span>
    </section>
  );
}
