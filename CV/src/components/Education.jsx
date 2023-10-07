export default function Education({ education, getEducationForm }) {
  return (
    <section className="education">
      <h3 className="title">Education</h3>
      <div className="info">
        <h4> {education.school}</h4>
        <p>{education.title}</p>
        <p>{education.date}</p>
      </div>
      <span className="edit" onClick={getEducationForm}>
        ✏️
      </span>
    </section>
  );
}
