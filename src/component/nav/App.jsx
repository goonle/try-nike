import React from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import VideoPlayer from "./VideoPlayer";
import Banner from "./Banner";
import ImageSlider from "./carousels/ImageSlider";
import Images from "./Images";
import * as Array from "./carousels/Arrays";
import SlowSlider from "./carousels/SlowSlider";
import Swipers from "./Swipers";
import FeaturedShoes from "./carousels/FeaturedShoes";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div id="bodyBlur">
        <VideoPlayer url="https://youtu.be/-SBsT032jVI" />
        <Banner
          title={Array.summer.title}
          content={Array.summer.content}
          button={Array.summer.button}
        />
        <dt className="sliderTitle">이번 주 스타일링</dt>

        <ImageSlider />
        <Banner
          title={Array.sandel.title}
          content={Array.sandel.content}
          button={Array.sandel.button}
        />
        <VideoPlayer url="https://youtu.be/7BeaT2LlAQ8" />
        <Banner
          title={Array.tShirts.title}
          content={Array.tShirts.content}
          button={Array.tShirts.button}
        />
        <Images />
        <Banner
          title={Array.washPack.title}
          content={Array.washPack.content}
          button={Array.washPack.button}
        />
        <SlowSlider />
        <Banner
          title={Array.waffle.title}
          content={Array.waffle.content}
          button={Array.waffle.button}
        />
        <Swipers />
        <Banner
          title={Array.airMax.title}
          content={Array.airMax.content}
          button={Array.airMax.button}
        />
        <FeaturedShoes />
        <Footer />
      </div>
    </div>
  );
}
