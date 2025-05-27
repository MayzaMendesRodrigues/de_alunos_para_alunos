import StudentProfile from "../../pages/StudentProfile/StudentProfile.jsx";
import { students } from "../../utils/students/students.js";
import { useNavigate } from "react-router-dom";

const Setup = () => {
  const navigate = useNavigate();

  return (
    <section className="setup">
      <ul className="setup__list">
        {students.map((student, index) => (
          <li key={index} className="setup__list-item">
            <img
              src={student.headShotSrc}
              alt={`${student.nome}`}
              className="setup__list-item-headshot"
              onClick={() =>
                navigate(`/students/${student.id}`, { state: { student } })
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Setup;
