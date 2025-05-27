import { useParams } from "react-router-dom";
import { videos } from "../../utils/content/videos";
import { leitura } from "../../utils/content/leitura";
import { podcasts } from "../../utils/content/podcasts";
import { cursos } from "../../utils/content/cursos";

const StudentContent = () => {
  const { id, contentType } = useParams();
  const studentId = Number(id);

  const contentMap = {
    videos: {
      data: videos,
      title: "Vídeos recomendados",
    },
    leitura: {
      data: leitura,
      title: "Leitura recomendada",
    },
    podcasts: {
      data: podcasts,
      title: "Podcasts recomendados",
    },
    cursos: {
      data: cursos,
      title: "Cursos recomendados",
    },
  };

  const selectedContent = contentMap[contentType];

  if (!selectedContent) {
    return <div className="content__error">Conteúdo inválido</div>;
  }

  const filtered = selectedContent.data.filter(
    (item) => item.idStudent === studentId
  );

  return (
    <section className="student-content">
      <h1 className="student-content__title">{selectedContent.title}</h1>
      <div className="student-content__list">
        {filtered.map((item, index) => (
          <div className="student-content-item" key={index}>
            <iframe
              src={item.url}
              title={item.nome}
              className="student-content-item__video"
              allowFullScreen
            ></iframe>
            <p className="student-content-item__name">{item.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentContent;
