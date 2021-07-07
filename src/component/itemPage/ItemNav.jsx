import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TuneIcon from "@material-ui/icons/Tune";

export default function ItemNav() {
  const [isToggled, setToggle] = useState(false);
  const [isOrder, setOrder] = useState({
    display: "none"
  });
  function closeSide() {
    if (isToggled === false) {
      document.getElementById("item-sidebar").style.left = "calc(-227px)";
      document.getElementById("itemList").style.left = "30px";
      document.getElementById("itemList").style.width = "calc(100% - 60px)";
      setToggle(true);
    } else {
      document.getElementById("item-sidebar").style.left = "30px";
      document.getElementById("item-sidebar").style.top = "160px";
      document.getElementById("itemList").style.left = "240px";
      document.getElementById("itemList").style.width = "calc(100% - 270px)";
      setToggle(false);
    }
  }
  function openOrder() {
    setOrder({ display: "inline-block" });
  }
  function closeOrder() {
    setOrder({ display: "none" });
  }

  return (
    <div className="itempage-nav" id="item-nav">
      <div className="item-nav-comp item-nav-left">
        <div className="item-nav-smTitle">Men</div>
        <div className="item-nav-title" id="item-nav-title">
          {" "}
          Men's 의류
        </div>
      </div>
      <div className="item-nav-comp item-nav-right">
        <div className="item-nav-filter item-nav-icons" onClick={closeSide}>
          <span>필터</span> <TuneIcon className="item-icons" />
        </div>
        <div className="item-nav-icons item-nav-right" onClick={openOrder}>
          <span>신상품순</span> <ExpandMoreIcon className="item-icons" />
          <div
            className="item-nav-hidden"
            style={isOrder}
            onMouseLeave={closeOrder}
          >
            <ul>
              <li className="item-nav-li">신상품순</li>
              <li className="item-nav-li">높은 가격순</li>
              <li className="item-nav-li">낮은 가격순</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
