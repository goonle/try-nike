import React, { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
export default function ItemSidebar() {
  const [isSports, setSports] = useState({
    height: "auto"
  });
  const [isClothes, setClothes] = useState({
    height: "auto"
  });
  const [isToggled, setToggle] = useState(false);
  function onClickFold(e) {
    const name = e.target.getAttribute("name");
    if (isToggled === false) {
      if (name === "sports") {
        setSports({ height: 0, overflow: "hidden" });
      } else if (name === "clothes") {
        setClothes({ height: 0, overflow: "hidden" });
      }
      setToggle(true);
    } else {
      if (name === "sports") {
        setSports({ height: "auto" });
      } else if (name === "clothes") {
        setClothes({ height: "auto" });
      }
      setToggle(false);
    }
  }

  const [isSportsFold, setSportsFold] = useState();
  const [isClothesFold, setClothesFold] = useState();
  const [isSportsMore, setSportsMore] = useState();
  const [isClothesMore, setClothesMore] = useState();
  const [isSportsLess, setSportsLess] = useState();
  const [isClothesLess, setClothesLess] = useState();

  function onClickOpen(e) {
    const name = e.target.getAttribute("name");
    if (name === "sports") {
      setSportsFold({
        display: "block"
      });
      setSportsMore({
        display: "none"
      });
      setSportsLess({
        display: "block"
      });
    } else if (name === "clothes") {
      setClothesFold({
        display: "block"
      });
      setClothesMore({
        display: "none"
      });
      setClothesLess({
        display: "block"
      });
    }
  }
  function onClickClose(e) {
    const name = e.target.getAttribute("name");
    if (name === "sports") {
      setSportsFold({
        display: "none"
      });
      setSportsMore({
        display: "block"
      });
      setSportsLess({
        display: "none"
      });
    } else if (name === "clothes") {
      setClothesFold({
        display: "none"
      });
      setClothesMore({
        display: "block"
      });
      setClothesLess({
        display: "none"
      });
    }
  }

  return (
    <div className="item-sidebar no-Nav" id="item-sidebar">
      <div className="item-sidebar-box">
        <div className="item-sidebar-title" name="sports" onClick={onClickFold}>
          스포츠
          <ExpandLessIcon className="item-icons item-sidebar-icons" />{" "}
        </div>
        <div className="item-sidebar-sel" style={isSports}>
          <form action="submit">
            <ul className="item-sidebar-chk">
              <li>
                <input type="checkbox" id="lifeStyle" />
                <label htmlFor="lifeStyle"></label> 라이프스타일
              </li>
              <li>
                <input type="checkbox" /> 러닝
              </li>
              <li>
                <input type="checkbox" /> 농구
              </li>
              <li>
                <input type="checkbox" /> 축구
              </li>
              <li>
                <input type="checkbox" /> 트레이닝&짐
              </li>
              <li className="fold" style={isSportsFold}>
                <input type="checkbox" /> 골프
              </li>
              <li className="fold" style={isSportsFold}>
                <input type="checkbox" /> 스케이트보딩
              </li>
              <li className="fold" style={isSportsFold}>
                <input type="checkbox" /> 테니스
              </li>
            </ul>
          </form>
          <div
            className="item-sidebar-fold icon-container"
            name="sports"
            onClick={onClickOpen}
            style={isSportsMore}
          >
            <AddIcon className=" item-icons " />
            더보기
          </div>
          <div
            className="item-sidebar-fold icon-container fold"
            onClick={onClickClose}
            style={isSportsLess}
          >
            <RemoveIcon className=" item-icons " name="sports" />
            접기
          </div>
        </div>
      </div>
      {/* duplicated */}
      <div className="item-sidebar-box">
        <div
          className="item-sidebar-title"
          name="clothes"
          onClick={onClickFold}
        >
          의류
          <ExpandLessIcon className="item-icons item-sidebar-icons" />{" "}
        </div>
        <div className="item-sidebar-sel" style={isClothes}>
          <form action="submit" name="color">
            <ul className="item-sidebar-chk">
              <li>
                <input type="checkbox" id="lifeStyle" />
                <label htmlFor="lifeStyle"></label> 베이스레이어 상의
              </li>
              <li>
                <input type="checkbox" /> 그래픽티
              </li>
              <li>
                <input type="checkbox" /> 레깅스
              </li>
              <li>
                <input type="checkbox" /> 폴로
              </li>
              <li>
                <input type="checkbox" /> 트레이닝 팬츠
              </li>
              <li className="fold" style={isClothesFold}>
                <input type="checkbox" /> 탱크탑
              </li>
              <li className="fold" style={isClothesFold}>
                <input type="checkbox" /> 점프수트
              </li>
            </ul>
            <div
              className="item-sidebar-fold icon-container"
              name="clothes"
              onClick={onClickOpen}
              style={isClothesMore}
            >
              <AddIcon className=" item-icons " />
              더보기
            </div>
            <div
              className="item-sidebar-fold icon-container fold"
              onClick={onClickClose}
              style={isClothesLess}
            >
              <RemoveIcon className=" item-icons " name="clothes" />
              접기
            </div>
          </form>
        </div>
        <div className="item-sidebar-sel" style={isClothes}>
          <form action="submit" name="color">
            <ul className="item-sidebar-chk">
              <li>
                <input type="checkbox" id="lifeStyle" />
                <label htmlFor="lifeStyle"></label> 베이스레이어 상의
              </li>
              <li>
                <input type="checkbox" /> 그래픽티
              </li>
              <li>
                <input type="checkbox" /> 레깅스
              </li>
              <li>
                <input type="checkbox" /> 폴로
              </li>
              <li>
                <input type="checkbox" /> 트레이닝 팬츠
              </li>
              <li className="fold" style={isClothesFold}>
                <input type="checkbox" /> 탱크탑
              </li>
              <li className="fold" style={isClothesFold}>
                <input type="checkbox" /> 점프수트
              </li>
            </ul>
            <div
              className="item-sidebar-fold icon-container"
              name="clothes"
              onClick={onClickOpen}
              style={isClothesMore}
            >
              <AddIcon className=" item-icons " />
              더보기
            </div>
            <div
              className="item-sidebar-fold icon-container fold"
              onClick={onClickClose}
              style={isClothesLess}
            >
              <RemoveIcon className=" item-icons " name="clothes" />
              접기
            </div>
          </form>
        </div>
        <div className="item-sidebar-sel" style={isClothes}>
          <form action="submit" name="color">
            <ul className="item-sidebar-chk">
              <li>
                <input type="checkbox" id="lifeStyle" />
                <label htmlFor="lifeStyle"></label> 베이스레이어 상의
              </li>
              <li>
                <input type="checkbox" /> 그래픽티
              </li>
              <li>
                <input type="checkbox" /> 레깅스
              </li>
              <li>
                <input type="checkbox" /> 폴로
              </li>
              <li>
                <input type="checkbox" /> 트레이닝 팬츠
              </li>
              <li className="fold" style={isClothesFold}>
                <input type="checkbox" /> 탱크탑
              </li>
              <li className="fold" style={isClothesFold}>
                <input type="checkbox" /> 점프수트
              </li>
            </ul>
            <div
              className="item-sidebar-fold icon-container"
              name="clothes"
              onClick={onClickOpen}
              style={isClothesMore}
            >
              <AddIcon className=" item-icons " />
              더보기
            </div>
            <div
              className="item-sidebar-fold icon-container fold"
              onClick={onClickClose}
              style={isClothesLess}
            >
              <RemoveIcon className=" item-icons " name="clothes" />
              접기
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
