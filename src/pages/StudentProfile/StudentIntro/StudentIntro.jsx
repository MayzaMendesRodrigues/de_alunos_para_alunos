import arrowLinkedIn from "../../../assets/arrow-link.png";

const FormattedDescription = ({ description }) => {
  if (!description) return null;

  return (
    <div className="student-profile__description">
      {description.map((part, index) => {
        switch (part.type) {
          case "highlight":
            return (
              <h2
                key={index}
                className="student-profile__description-highlight"
              >
                {part.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={index} className="student-profile__description-paragraph">
                {part.text}
              </p>
            );
          case "break":
            return (
              <div key={index} className="student-profile__description-break" />
            );
          default:
            return (
              <p key={index} className="student-profile__description-text">
                {part.text}
              </p>
            );
        }
      })}
    </div>
  );
};

const StudentIntro = ({ student }) => {
  return (
    <div className="student-profile__intro">
      <img
        src={arrowLinkedIn}
        alt="LinkedIn"
        className="student-profile__linkedin-arrow"
      />
      <img
        src={student.bodyShotSrc}
        alt={student.nome}
        className="student-profile__avatar"
        onClick={() => window.open(student.linkedin, "_blank")}
      />
      <h1 className="student-profile__name">{student.nome}</h1>
      <p className="student-profile__quote">"{student.quote}"</p>
      <FormattedDescription description={student.description} />
    </div>
  );
};

export default StudentIntro;
