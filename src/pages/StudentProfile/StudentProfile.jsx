import { useParams } from "react-router-dom";
import { students } from "../../utils/students/students";
import { useEffect, useState } from "react";

import StudentIntro from "./Intro/Intro";
import StudentSetup from "./Setup/Setup";

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const foundStudent = students.find(
        (student) => student.id === Number(id)
      );

      if (!foundStudent) {
        throw new Error("Aluno não encontrado");
      }

      setStudent(foundStudent);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="main__student-profile">
      <StudentIntro student={student} />
      <StudentSetup />
    </section>
  );
};

export default StudentProfile;
