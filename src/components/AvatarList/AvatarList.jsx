import { students } from "../../utils/students/students.js";
import { useNavigate } from "react-router-dom";

const avatarList = () => {
  const navigate = useNavigate();

  return (
    <section className="students">
      <ul className="students__list">
        {students.map((student, index) => (
          <li key={index} className="students__item">
            <img
              src={student.headShotSrc}
              alt={`${student.nome}`}
              className="students__headshot"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" }); // Isso sobe suavemente
                navigate(`/students/${student.id}`, { state: { student } });
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default avatarList;
