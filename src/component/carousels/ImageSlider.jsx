import React from "react";

const imgs = [
  "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhlc3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1416339698674-4f118dd3388b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
];
function renderImg(imgURL, index) {
  return <img key={index} className="carouselImgs" src={imgURL} alt="" />;
}

export default function ImageSlider() {
  return (
    <div className="ImageSlider">
      <div className="slider">
        <div className="slide">
          {imgs.map((img, index) => {
            return renderImg(img, index);
          })}
          {imgs.map((img, index) => {
            return renderImg(img, index);
          })}
        </div>
      </div>
    </div>
  );
}
