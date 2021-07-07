import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "../../public/styles.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

const imgs = [
  "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1618420281222-091f6d69ffbe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5pa2V8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMGNvbG9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5pa2UlMjBjb2xvcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
];
function renderImg(imgURL, index) {
  return (
    <SwiperSlide>
      <img
        key={index}
        index={index}
        className="ninetyImg"
        src={imgURL}
        alt=""
      />
    </SwiperSlide>
  );
}

export default function Swipers() {
  return (
    <>
      <Swiper navigation={true} loop={true} className="mySwiper">
        {imgs.map((img, index) => {
          return renderImg(img, index);
        })}
      </Swiper>
    </>
  );
}
