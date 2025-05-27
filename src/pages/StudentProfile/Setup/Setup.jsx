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
    navigate(`/students/${id}/${type}`);
  };

  return (
    <div className="student-profile__setup">
      {resources.map((res, index) => (
        <div
          className="student-profile__setup-item"
          key={index}
          onClick={() => handleClick(res.type)}
        >
          <img
            src={res.img}
            alt={res.label}
            className="student-profile__setup-thumbnail"
          />
          <p className="student-profile__setup-label">{res.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentSetup;
