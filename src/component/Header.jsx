import React, { useState } from "react";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import EmojiNatureOutlinedIcon from "@material-ui/icons/EmojiNatureOutlined";

function Header() {
  const [converse, setConverse] = useState(false);
  const [jordan, setJordan] = useState(false);

  function iconOver(event) {
    const id = event.target.name;
    if (id === "firstIcon") {
      setConverse(true);
    } else if (id === "secondIcon") {
      setJordan(true);
    }
  }
  function iconOut(event) {
    const id = event.target.name;
    if (id === "firstIcon") {
      setConverse(false);
    } else if (id === "secondIcon") {
      setJordan(false);
    }
  }

  return (
    <div className="Header">
      <div className="header-container">
        <span className="header-span headerLeft">
          <a
            href="/"
            name="firstIcon"
            className="headerIcons"
            onMouseOver={iconOver}
            onMouseOut={iconOut}
          >
            <WhatshotOutlinedIcon
              style={{
                color: converse ? "#777" : "black",
                paddingRight: "8px"
              }}
            />
          </a>

          <a
            href="/"
            name="secondIcon"
            onMouseOver={iconOver}
            onMouseOut={iconOut}
            className="headerIcons"
          >
            <EmojiNatureOutlinedIcon
              style={{ color: jordan ? "#777" : "black" }}
            />
          </a>
        </span>
        <span className="header-span headerRight">
          <ul>
            <li className="headerList listline">
              <a href="/">고객센터</a>{" "}
            </li>
            <li className="headerList listline">
              <a href="/">멤버 가입</a>{" "}
            </li>
            <li className="headerList">
              <a href="/">로그인</a>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}

export default Header;
