export default function GeneralInfo({ generalInfo, getGenralForm }) {
  return (
    <section className="general-info">
      <img src="https://source.unsplash.com/random/200x200?sig=" alt="" />
      <h2>{generalInfo?.name}</h2>
      <div className="contacts">
        <p>✉️ {generalInfo?.email}</p>
        <p>📱 {generalInfo?.phone}</p>
      </div>
      <span className="edit" onClick={getGenralForm}>
        ✏️
      </span>
    </section>
  );
}
