import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { videos } from "../../utils/videos";

const Recommendation = () => {
  // FUNCTION - extracting video ID from URL
  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  return (
    <section className="recommendations">
      <h1 className="recommendations__title">Últimas Recomendações</h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        centeredSlides={true}
        effect={"coverflow"}
        navigation
      >
        {videos.map((video, index) => {
          const videoId = getVideoId(video.url);
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          return (
            <SwiperSlide key={index} className="recommendations__item">
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <img src={thumbnailUrl} alt={video.nome} />
              </a>
              <p className="recommendations__item-label">{video.nome}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Recommendation;
