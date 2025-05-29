import { videos } from "../../utils/content/videos";
import { leitura } from "../../utils/content/leitura";
import { podcasts } from "../../utils/content/podcasts";
import { cursos } from "../../utils/content/cursos";

import { useState } from "react";

import thumbLeitura from "../../assets/thumb_leitura.png";
import thumbCurso from "../../assets/thumb_curso.png";

const Collection = () => {
  const [activeFilter, setActiveFilter] = useState("TODOS");

  const filteredVideos =
    activeFilter === "TODOS"
      ? videos
      : videos.filter((v) => v.subject === activeFilter);
  const filteredLeitura =
    activeFilter === "TODOS"
      ? leitura
      : leitura.filter((l) => l.subject === activeFilter);
  const filteredPodcasts =
    activeFilter === "TODOS"
      ? podcasts
      : podcasts.filter((p) => p.subject === activeFilter);
  const filteredCursos =
    activeFilter === "TODOS"
      ? cursos
      : cursos.filter((c) => c.subject === activeFilter);

  const limitedVideos = filteredVideos
    .slice(0, 3)
    .map((item) => ({ ...item, type: "VIDEO" }));
  const limitedLeitura = filteredLeitura
    .slice(0, 3)
    .map((item) => ({ ...item, type: "LEITURA" }));
  const limitedPodcasts = filteredPodcasts
    .slice(0, 3)
    .map((item) => ({ ...item, type: "PODCAST" }));
  const limitedCursos = filteredCursos
    .slice(0, 3)
    .map((item) => ({ ...item, type: "CURSO" }));

  const allContent = [
    ...limitedVideos,
    ...limitedLeitura,
    ...limitedPodcasts,
    ...limitedCursos,
  ];
  const filteredContent =
    activeFilter === "TODOS"
      ? allContent
      : allContent.filter((item) => item.subject === activeFilter);

  const limitedContent = filteredContent.slice(0, 5);

  return (
    <section className="collection">
      <h2 className="collection__title">Coleção de Conteúdos</h2>
      <div className="collection__filters">
        {["TODOS", "WD", "DA", "DS", "QA"].map((filter) => (
          <button
            key={filter}
            className={`collection__filter ${
              activeFilter === filter ? "collection__filter--active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="collection__content">
        {limitedContent.length > 0 ? (
          <div className="collection__scroll-container">
            {limitedContent.map((item, index) => (
              <div key={index} className="collection__item">
                {item.type === "VIDEO" || item.type === "PODCAST" ? (
                  <iframe
                    src={item.url}
                    title={item.nome}
                    className="collection__iframe"
                    allowFullScreen
                  />
                ) : (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.type === "LEITURA" ? thumbLeitura : thumbCurso}
                      alt={item.nome}
                      className="collection__thumbnail"
                    />
                  </a>
                )}
                <div className="collection__item-info">
                  <span className="collection__item-type">{item.subject}</span>
                  <span className="collection__item-type">{item.type}</span>
                  <h3 className="collection__item-title">{item.nome}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="collection__empty">
            Nenhum conteúdo encontrado para esta categoria.
          </p>
        )}
      </div>
    </section>
  );
};
export default Collection;
