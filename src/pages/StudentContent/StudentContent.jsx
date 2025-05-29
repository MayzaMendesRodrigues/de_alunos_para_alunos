import { useParams } from "react-router-dom";
import { videos } from "../../utils/content/videos";
import { leitura } from "../../utils/content/leitura";
import { podcasts } from "../../utils/content/podcasts";
import { cursos } from "../../utils/content/cursos";

import thumbnailLeitura from "../../assets/thumb_leitura.png";
import thumbnailCursos from "../../assets/thumb_curso.png";

const StudentContent = () => {
  const { id, contentType } = useParams();
  const studentId = Number(id);

  const contentMap = {
    videos: {
      data: videos,
      title: "Vídeos recomendados",
      isEmbeddable: true,
    },
    leitura: {
      data: leitura,
      title: "Leitura recomendada",
      isEmbeddable: false,
      thumbnail: thumbnailLeitura,
    },
    podcasts: {
      data: podcasts,
      title: "Podcasts recomendados",
      isEmbeddable: true,
    },
    cursos: {
      data: cursos,
      title: "Cursos recomendados",
      isEmbeddable: false,
      thumbnail: thumbnailCursos,
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
            {selectedContent.isEmbeddable ? (
              <iframe
                src={item.url}
                title={item.nome}
                className="student-content-item__iframe"
                allowFullScreen
              ></iframe>
            ) : (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={selectedContent.thumbnail}
                  alt={item.nome}
                  className="student-content-item__thumbnail"
                />
              </a>
            )}
            <p className="student-content-item__name">{item.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentContent;
