import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { videos } from "../../utils/content/videos";

const Recommendation = () => {
  // FUNCTION - filtering recommended videos
  const recommendedVideos = videos.filter((video) => video.isRecommended);

  return (
    <section className="recommendations">
      <h1 className="recommendations__title">Últimas Recomendações</h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
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
        {recommendedVideos.map((video, index) => {
          return (
            <SwiperSlide key={index} className="recommendations__item">
              <iframe
                src={video.url.replace("watch?v=", "embed/")}
                title={video.nome}
                allowFullScreen
              />
              <p className="recommendations__item-label">{video.nome}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Recommendation;
