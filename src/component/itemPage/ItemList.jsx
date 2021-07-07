import React, { useState } from "react";
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var testObject = {
  img: String,
  price: Number,
  eco: Boolean,
  title: String,
  hash: Array,
  color: Array
};
const test1 = {
  img:
    "https://images.unsplash.com/photo-1623832101940-647285e32a58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaW9ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  price: 49000,
  eco: true,
  title: "나이키 스포츠웨어",
  hash: ["남성", "반팔", "티셔츠", "AS"],
  color: ["red", "green"]
};

export default function ItemList() {
  const [isHover, setHover] = useState(false);

  function hiddenShow() {
    setHover(true);
    console.log(isHover);
  }
  function hidden() {
    setHover(false);
  }
  console.log(isHover);
  return (
    <div className="ItemList no-Nav" id="itemList">
      <div className="itemList-container">
        <div className="itemLst-img-box ">
          <img className="itemList-img-item" src={test1.img} alt="" />
          <img className="itemList-img-eco" src="" alt="" />
        </div>
        <ul className="itemList-information ">
          <span className="itemList-info-price ">{test1.price} 원</span>
          <li className="itemList-info-eco ">친환경 소재</li>
          <li className="itemList-info-title ">{test1.title}</li>
          <li className="itemList-info-hash ">{test1.hash[0]}</li>
          <li className="itemList-info-color ">3 컬러</li>
          <li className="itemList-info-hidden">
            <span className="item-sm-img">{test1.color[0]} </span>
            <span className="item-sm-img">{test1.color[1]}</span>
          </li>
        </ul>
      </div>
      <div className="itemList-container">
        <div className="itemLst-img-box">
          <img className="itemList-img-item" src="" alt="" />
          <img className="itemList-img-eco" src="" alt="" />
        </div>
        <ul className="itemList-information">
          <span className="itemList-info-price ">49,000 원</span>
          <li className="itemList-info-eco ">친환경 소재</li>
          <li className="itemList-info-title ">나이키 스포츠웨어</li>
          <li className="itemList-info-hash ">남성 반팔 티셔츠 AS</li>
          <li className="itemList-info-color ">3 컬러</li>
          <li className="itemList-info-hidden">
            <span className="item-sm-img">asd</span>
            <span className="item-sm-img">asd</span>
          </li>
        </ul>
      </div>
      <div className="itemList-container" onMouseOver={hiddenShow}>
        <div className="itemLst-img-box">
          <img className="itemList-img-item" src="" alt="" />
          <img className="itemList-img-eco" src="" alt="" />
        </div>
        <ul className="itemList-information">
          <span className="itemList-info-price ">49,000 원</span>
          <li className="itemList-info-eco">친환경 소재</li>
          <li className="itemList-info-title">나이키 스포츠웨어</li>
          <li className="itemList-info-hash">남성 반팔 티셔츠 AS</li>
          <li className="itemList-info-color">3 컬러</li>
          <li
            className="itemList-info-hidden"
            style={isHover ? { display: "inline-block" } : { display: "none" }}
          >
            <span className="item-sm-img">asd</span>
            <span className="item-sm-img">asd</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
