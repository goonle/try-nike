import React, { useState } from "react";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import DDL from "./DDL";
import SideBarMenu from "./SideBarMenu";

const iconStyle = {
  fontSize: "27px"
};
const desktopLogo = {
  fontSize: 60,
  zIndex: 2,
  color: "black"
};

function NavBar() {
  const [isDisplayed, setDisplayed] = useState({
    display: "inline-block"
  });
  const [isX, setX] = useState({
    display: "none"
  });
  const [isDdMenu, setDdMenu] = useState({
    visibility: "hidden",
    transition: "1s"
  });
  const [isFloat, setFloat] = useState({
    float: "right"
  });
  const [isNavBar, setNavBer] = useState({
    height: "60px"
  });
  const [extendWidth, setWidth] = useState({
    width: "115px"
  });

  function focusHandler() {
    setDisplayed({
      display: "none"
    });
    setFloat({
      float: "none"
    });
    setX({
      display: "inline-block"
    });
    setDdMenu({
      visibility: "visible",
      transition: "1s"
    });
    setNavBer({
      height: "300px"
    });
    setWidth({
      width: "600px"
    });
    document.getElementById("bodyBlur").style.filter = "blur(5px)";
  }
  function blurHandler() {
    setDisplayed({
      display: "inline-block"
    });
    setFloat({
      float: "right"
    });
    setX({
      display: "none"
    });
    setDdMenu({
      visibility: "hidden",
      transition: 0
    });
    setNavBer({
      height: "60px"
    });
    setWidth({
      width: "115px"
    });
    document.getElementById("bodyBlur").style.filter = "none";

    setBag(false);
    console.log(bagClick);
  }
  // ////////////////scroll function/////////////
  const [scroll, setScroll] = useState();
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    let isRenderedItemPage = document.getElementById("item-nav");
    if (isRenderedItemPage) {
      var itemNav = document.getElementById("item-nav").style;
      var itemSide = document.getElementById("item-sidebar").style;
      var itemSideTitle = document.getElementById("item-nav-title").style;
    }

    if (currentScrollPos <= 35) {
      setScroll();
      if (isRenderedItemPage) {
        itemSideTitle.fontSize = "30px";
        itemNav.top = "30px";
      }
    } else if (prevScrollpos > currentScrollPos) {
      setScroll({ top: "0" });
      if (isRenderedItemPage) {
        itemSide.top = "160px";
        itemSideTitle.fontSize = "22px";
        itemSide.maxHeight = "calc(100vh - 160px)";
        itemNav.top = "-10px";
      }
    } else if (isClickedSide === false) {
      setScroll({ top: "-60px" });
      if (isRenderedItemPage) {
        itemSide.top = "100px";
        itemSideTitle.fontSize = "22px";
        itemSide.maxHeight = "calc(100vh - 130px)";
        itemNav.top = "-60px";
      }
    }
    prevScrollpos = currentScrollPos;
  };
  // ////////////// scorll function end///////////////////////
  const [whichMenu, setMenu] = useState();
  const [isOnDDL, setOnDDL] = useState(false);
  function menuMouseOver(event) {
    let name = event.target.name;
    if (name === undefined) {
      setMenu((prev) => {
        return prev;
      });
    } else {
      setMenu(name);
      // setOnDDL(true);
    }
  }

  function navOnDDL() {
    setOnDDL(true);
    document.getElementById("bodyBlur").style.filter = "blur(5px)";
  }
  function outDDL() {
    setOnDDL(false);
    document.getElementById("bodyBlur").style.filter = "none";
  }
  // table size screen bag function
  const [bagClick, setBag] = useState(false);

  function clickBagIcon() {
    document.getElementById("searchInput").focus();
    setBag(true);
    focusHandler();
  }

  // when screen width smaller than 857px
  const tabletSearch = {
    display: "inline-block",
    visibility: "visible"
  };
  const tabletLogo = {
    display: "none",
    visibility: "hidden"
  };
  const tabletInput = {
    width: "60vw"
  };
  const tabletIcon = {
    backgroundColor: "#eee",
    fontSize: "27px"
  };

  // when screen width onclick function
  const [isClickedSide, setClickedSide] = useState(false);
  function clickMenu() {
    const sidebarMenu = document.getElementById("SideBarMenu").style;
    const navBar = document.getElementById("NavBarId").style;
    const bodys = document.getElementById("bodyBlur").style;
    // for not to moving nav-bar
    setClickedSide(true);
    // sidebarMenu.width = "240px";

    sidebarMenu.width = "300px";
    sidebarMenu.position = "fixed";
    sidebarMenu.maxHeight = "100vh";
    sidebarMenu.overflowY = "scroll";
    sidebarMenu.overflowX = "scroll";

    navBar.filter = "blur(5px)";
    bodys.overflowY = "hidden";
    bodys.height = "100vh";
    bodys.filter = "blur(5px)";
  }
  function offSide() {
    const sidebarMenu = document.getElementById("SideBarMenu").style;
    const navBar = document.getElementById("NavBarId").style;
    const bodys = document.getElementById("bodyBlur").style;
    // for not to moving nav-bar
    setClickedSide(false);

    sidebarMenu.width = "0";
    sidebarMenu.padding = "0";
    sidebarMenu.position = "absolute";

    navBar.filter = "none";
    bodys.overflowY = "auto";
    bodys.height = "";
    bodys.filter = "";
    document.getElementById("sideBar-wrapper").style.transform =
      "translateX(0)";
  }
  if (isClickedSide) {
    document.body.addEventListener("click", function (e) {
      const pointX = e.clientX;
      const bodyWidth = this.offsetWidth;

      if (pointX < bodyWidth - 300) {
        offSide();
      }
    });
  }

  return (
    <div className="fixedNav" style={scroll}>
      <div id="NavBarId" className="NavBar" style={isNavBar}>
        <a href="/">
          <AllInclusiveIcon
            className="homeLogo"
            style={bagClick ? tabletLogo : desktopLogo}
          />
        </a>
        {/* middle */}
        <div
          className="NavMenu"
          style={isDisplayed}
          onMouseOver={navOnDDL}
          onMouseOut={outDDL}
        >
          <ul>
            <li className="navList" onMouseOver={menuMouseOver}>
              <a href="/" name="new">
                New Releases
              </a>
            </li>
            <li className="navList" onMouseOver={menuMouseOver}>
              <a href="/" name="men">
                Men
              </a>
            </li>
            <li className="navList" onMouseOver={menuMouseOver}>
              <a href="/" name="women">
                Women
              </a>
            </li>
            <li className="navList" onMouseOver={menuMouseOver}>
              <a href="/" name="kids">
                Kids
              </a>
            </li>
            <li className="navList" onMouseOver={menuMouseOver}>
              <a href="/" name="sale">
                Sale
              </a>
            </li>
          </ul>
        </div>
        <div className="navRight" style={isFloat}>
          <div className="ddL">
            <div
              className="searchBar"
              style={bagClick ? tabletSearch : { visibility: "hidden" }}
            >
              <SearchOutlinedIcon className="navIcons" />
              <input
                className="searchInput"
                id="searchInput"
                type="text"
                placeholder="검색"
                onFocus={focusHandler}
                style={bagClick ? tabletInput : extendWidth}
                onBlur={blurHandler}
              />
            </div>
            <nav className="ddSearchBox " style={isDdMenu}>
              <h4>추천 검색어</h4>
              <div>
                <ul>
                  <li>와플 원</li>
                  <li>요가복</li>
                  <li>썸머 에센셜</li>
                  <li>지속 가능 컬렉션</li>
                </ul>
              </div>
            </nav>
          </div>
          <div style={isDisplayed}>
            <span className=" rightIcon mediaHidden">
              <FavoriteBorderIcon
                id="heart"
                className="navIcons navMouse"
                style={iconStyle}
              />
            </span>
            <span className=" rightIcon">
              <LocalMallOutlinedIcon
                style={iconStyle}
                id="bag"
                className="navIcons navMouse"
              />
            </span>
            <span className="navIcons rightIcon mediaIcon">
              <SearchOutlinedIcon
                style={iconStyle}
                id="search"
                onClick={clickBagIcon}
                className="navIcons navMouse"
              />
            </span>
            <span className="rightIcon mediaIcon" onClick={clickMenu}>
              <MenuIcon
                style={iconStyle}
                id="menu"
                className="navIcons navMouse"
              />
            </span>
          </div>
        </div>

        <span className=" rightIcon xIcon" style={isX} onClick={blurHandler}>
          <CloseIcon
            className="navIcons navMouse"
            style={bagClick ? tabletIcon : iconStyle}
          />
        </span>
      </div>
      <div className="DDLwrapper">
        <DDL show={whichMenu} onDDL={isOnDDL} />
      </div>
      <SideBarMenu />
    </div>
  );
}

export default NavBar;
export { iconStyle };
