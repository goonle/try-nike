import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Scrollbar } from "swiper/core";

// install Swiper modules
SwiperCore.use([Scrollbar]);
export default function App() {
  return (
    <Swiper
      slidesPerView="3"
      navigation={true}
      scrollbar={{
        hide: true
      }}
      className="mySwiper"
      spaceBetween={10}
      freeMode={true}
    >
      <SwiperSlide>
        <div className="items">
          <div className="itemImg">
            <img
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="itemBox">
            <p className="itemTitle">나이키 데이브레이크</p>
            <p className="itemDesc">남성신발 라이프스타일</p>
            <p className="itemPrice">76,300원 </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="items">
          <div className="itemImg">
            <img
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="itemBox">
            <p className="itemTitle">나이키 데이브레이크</p>
            <p className="itemDesc">남성신발 라이프스타일</p>
            <p className="itemPrice">76,300원 </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="items">
          <div className="itemImg">
            <img
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="itemBox">
            <p className="itemTitle">나이키 데이브레이크</p>
            <p className="itemDesc">남성신발 라이프스타일</p>
            <p className="itemPrice">76,300원 </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
}
