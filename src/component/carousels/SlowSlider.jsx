import React, { useState, useEffect, useRef } from "react";
import * as Array from "./Arrays.js";

export default function SlowSlide() {
  const [count, setCount] = useState(0);
  const [firstImg, setFirst] = useState(Array.slowImg[0].url);
  const [secondImg, setSecond] = useState(Array.slowImg[1].url);
  const [pageNum, setPage] = useState(0);
  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
    setPage((count % 3) + 1);
    if (pageNum === 1) {
      setFirst(Array.slowImg[0].url);
      setSecond(Array.slowImg[1].url);
    } else if (pageNum === 2) {
      setFirst(Array.slowImg[1].url);
      setSecond(Array.slowImg[2].url);
    } else if (pageNum === 3) {
      setFirst(Array.slowImg[2].url);
      setSecond(Array.slowImg[0].url);
    }
  }, 1000);

  return (
    <div className="slowContainer">
      <div className="slowWrapper">
        <div className="imgFrame get-bigger">
          <img className="slowImg" src={firstImg} alt="" />
        </div>
        <div className="imgFrame img-disap">
          <img className="slowImg" src={secondImg} alt="" />
        </div>
      </div>
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
