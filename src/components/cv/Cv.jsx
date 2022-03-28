import React from "react";
import "./cv.css";
import ava1 from "../../assets/avatar1.jpg";
import ava2 from "../../assets/avatar2.jpg";
import ava3 from "../../assets/avatar3.jpg";
import ava4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay } from "swiper";

// const swipery = new Swiper('.swiper',{
//     autoplay:{
//         delay:5000,
//     }
// })

const Cv = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section id="Cv">
      <h5>Personal Details and Soft Skills</h5>
      <h2>Some interesting things</h2>
      <Swiper
        className="container cv__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="cv">
          <div className="cv__avatar">
            <img src={ava1} alt="" />
          </div>
          <h5>Hobbies</h5>
          <small className="cv__content">
          Traveling/ Watching horror movies/ Listening to lofi/ Coding website/ Playing football
          </small>
        </SwiperSlide>
        <SwiperSlide className="cv">
          <div className="cv__avatar">
            <img src={ava2} alt="" />
          </div>
          <h5>Talents</h5>
          <small className="cv__content">
          Singing/ Playing game (LOL)/ Taking pictures/ Solving math
          </small>
        </SwiperSlide>
        <SwiperSlide className="cv">
          <div className="cv__avatar">
            <img src={ava3} alt="" />
          </div>
          <h5>Characters</h5>
          <small className="cv__content">
          Sociable/ Inquisitive/ Gentle/ Responsible at work/ Humorous/ Emotional
          </small>
        </SwiperSlide>
        <SwiperSlide className="cv">
          <div className="cv__avatar">
            <img src={ava4} alt="" />
          </div>
          <h5>And ?</h5>
          <small className="cv__content">
          Nothing. Thank you for watching until here, hope to work with you ^_^
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Cv;
