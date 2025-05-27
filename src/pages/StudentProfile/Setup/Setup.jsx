import { useParams, useNavigate } from "react-router-dom";

import video from "../../../assets/thumb_video.png";
import podcast from "../../../assets/thumb_podcast.png";
import leitura from "../../../assets/thumb_leitura.png";
import curso from "../../../assets/thumb_curso.png";

const StudentSetup = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const resources = [
    { img: video, label: "VIDEOS", type: "videos" },
    { img: podcast, label: "PODCASTS", type: "podcasts" },
    { img: leitura, label: "LEITURA", type: "leitura" },
    { img: curso, label: "CURSOS", type: "cursos" },
  ];

  const handleClick = (type) => {
    navigate(`/student/${id}/${type}`);
  };

  return (
    <div className="student-profile__setup">
      {resources.map((res, index) => (
        <div
          className="setup__item"
          key={index}
          onClick={() => handleClick(res.type)}
          style={{ cursor: "pointer" }}
        >
          <img src={res.img} alt={res.label} className="setup__thumbnail" />
          <p className="setup__label">{res.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentSetup;
