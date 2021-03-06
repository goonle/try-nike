import React, { useState } from "react";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import EmojiNatureOutlinedIcon from "@material-ui/icons/EmojiNatureOutlined";
import SendIcon from "@material-ui/icons/Send";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function arrow() {
  return (
    <ArrowForwardIosOutlinedIcon
      style={{
        fontSize: "15px",
        float: "right",
        position: "absolute",
        right: 0,
        paddingTop: "20px"
      }}
    />
  );
}
function secondArrow() {
  return (
    <ArrowForwardIosOutlinedIcon
      style={{
        fontSize: "15px",
        float: "right",
        position: "absolute",
        right: 20,
        paddingTop: "10px"
      }}
    />
  );
}
function arrowReverse() {
  return (
    <ArrowBackIosIcon
      style={{
        fontSize: "15px",
        verticalAlign: "middle",
        paddingRight: "5px",
        paddingBottom: "1px"
      }}
    />
  );
}
/////////translate X function////////////
function moveFirst() {
  document.getElementById("sideBar-wrapper").style.transform = "translateX(0)";
}
function moveSecond() {
  document.getElementById("sideBar-wrapper").style.transform =
    "translateX(-280px)";
}
function moveThird() {
  document.getElementById("sideBar-wrapper").style.transform =
    "translateX(-560px)";
}

export default function SideBarMenu() {
  const [which2Menu, set2Menu] = useState("releases");
  const [which3Menu, set3Menu] = useState("new");

  function secondMenu(e) {
    const name = e.target.getAttribute("name");
    set2Menu(name);
  }

  function renderSecondMenu(name) {
    if (name === "releases") {
      return release();
    } else if (name === "men") {
      return men();
    } else if (name === "women") {
      return women();
    } else if (name === "kids") {
      return kids();
    } else if (name === "sale") {
      return sale();
    } else if (name === "brand") {
      return brand();
    }
  }

  function thirdMenu(e) {
    const name = e.target.getAttribute("name");
    set3Menu(name);
  }

  function renderThirdMenu(name) {
    if (name === "releases") {
      return release();
    } else if (name === "new") {
      return menNew();
    } else if (name === "shoes") {
      return menShoes();
    } else if (name === "product") {
      return menProduct();
    } else if (name === "sports") {
      return menSports();
    } else if (name === "brand") {
      return menBrand();
    } else if (name === "clothes") {
      return menClothes();
    }
  }

  function release() {
    return (
      <div className="second-side sideLayout">
        <div className="prevSide allgrey" onClick={moveFirst}>
          {arrowReverse()}
          All
        </div>
        <div className="side-second-title">New Releases</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>????????? ????????????</li>
            <li>SNKRS</li>
            <li>?????? ?????? 1</li>
            <li>ACG</li>
            <li>NikeLab</li>
            <li>New For Men{secondArrow()}</li>
            <li>New For Women{secondArrow()}</li>
            <li>New For Kids{secondArrow()}</li>
            <li>?????? ?????????</li>
            <li>?????? ?????? ?????????</li>
          </ul>
        </div>
      </div>
    );
  }
  function men() {
    return (
      <div className="second-side sideLayout">
        <div className="prevSide allgrey" onClick={moveFirst}>
          {arrowReverse()}
          All
        </div>
        <div className="side-second-title">Men</div>
        <div className="side-second-menu relative-wrapper" onClick={thirdMenu}>
          <ul>
            <li name="new" onClick={moveThird}>
              New & Featured{secondArrow()}
            </li>
            <li>?????????</li>
            <li name="shoes" onClick={moveThird}>
              ??????{secondArrow()}
            </li>
            <li name="clothes" onClick={moveThird}>
              ??????{secondArrow()}
            </li>
            <li name="product" onClick={moveThird}>
              ??????{secondArrow()}
            </li>
            <li name="sports" onClick={moveThird}>
              ?????????{secondArrow()}
            </li>
            <li name="brand" onClick={moveThird}>
              ?????????{secondArrow()}
            </li>
            <li>?????? ??????</li>
            <li>??????????????? ?????????</li>
            <li>SNKRS</li>
            <li>SALE</li>
            <li>?????? ?????? ?????????</li>
          </ul>
        </div>
      </div>
    );
  }
  function women() {
    return (
      <div className="second-side sideLayout">
        <div className="prevSide allgrey" onClick={moveFirst}>
          {arrowReverse()}
          All
        </div>
        <div className="side-second-title">Women</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>New & Featured{secondArrow()}</li>
            <li>?????????</li>
            <li>??????{secondArrow()}</li>
            <li>??????{secondArrow()}</li>
            <li>??????{secondArrow()}</li>
            <li>?????????{secondArrow()}</li>
            <li>?????????{secondArrow()}</li>
            <li>?????? ??????</li>
            <li>??????????????? ?????????</li>
            <li>SNKRS</li>
            <li>SALE</li>
            <li>?????? ?????? ?????????</li>
          </ul>
        </div>
      </div>
    );
  }
  function kids() {
    return (
      <div className="second-side sideLayout">
        <div className="prevSide allgrey" onClick={moveFirst}>
          {arrowReverse()}
          All
        </div>
        <div className="side-second-title">Kids</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>New & Featured{secondArrow()}</li>
            <li>?????????</li>
            <li>????????????{secondArrow()}</li>
            <li>??????{secondArrow()}</li>
            <li>??????{secondArrow()}</li>
            <li>???????????? & ??????</li>
            <li>?????????{secondArrow()}</li>
            <li>Kids ??????</li>
            <li>SALE</li>
          </ul>
        </div>
      </div>
    );
  }
  function sale() {
    return (
      <div className="second-side sideLayout">
        <div className="prevSide allgrey" onClick={moveFirst}>
          {arrowReverse()}
          All
        </div>
        <div className="side-second-title">SALE</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>NEW TO SALE</li>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
          </ul>
        </div>
      </div>
    );
  }
  function brand() {
    return (
      <div className="second-side sideLayout">
        <div className="prevSide allgrey" onClick={moveFirst}>
          {arrowReverse()}
          All
        </div>
        <div className="side-second-title">Brand</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>Nike Sportswear</li>
            <li>NikeLab</li>
            <li>Jordan</li>
            <li>Converse</li>
            <li>NBA</li>
            <li>ACG</li>
          </ul>
        </div>
      </div>
    );
  }

  function menNew() {
    return (
      <div className="Third-side sideLayout">
        <div className="prevSide allgrey" onClick={moveSecond}>
          {arrowReverse()}
          Men
        </div>
        <div className="side-second-title">New & Featured</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>SNKRS</li>
            <li>THE BEST</li>
            <li>MEMBER SHOP</li>
            <li>?????? ?????????</li>
            <li>?????? ????????? ??? ?????????</li>
            <li>??? ???????????? ???????????? ?????????</li>
            <li>???????????? ?????????</li>
            <li>????????? ??????</li>
          </ul>
        </div>
      </div>
    );
  }
  function menShoes() {
    return (
      <div className="Third-side sideLayout">
        <div className="prevSide allgrey" onClick={moveSecond}>
          {arrowReverse()}
          Men
        </div>
        <div className="side-second-title">??????</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>????????????</li>
            <li>??????????????????</li>
            <li>??????</li>
            <li>???????????? & ???</li>
            <li>??????</li>
            <li>??????</li>
            <li>??????</li>
            <li>??????????????????</li>
            <li>??????</li>
            <li>?????????</li>
            <li>?????? & ?????????</li>
          </ul>
        </div>
      </div>
    );
  }
  function menClothes() {
    return (
      <div className="Third-side sideLayout">
        <div className="prevSide allgrey" onClick={moveSecond}>
          {arrowReverse()}
          Men
        </div>
        <div className="side-second-title">??????</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>?????? ??????</li>
            <li>??? & ?????????</li>
            <li>??? ??????</li>
            <li>?????? & ??????</li>
            <li>?????? & ?????????</li>
            <li>?????? & ?????????</li>
            <li>????????? ??????</li>
            <li>??????</li>
            <li>??????</li>
          </ul>
        </div>
      </div>
    );
  }
  function menProduct() {
    return (
      <div className="Third-side sideLayout">
        <div className="prevSide allgrey" onClick={moveSecond}>
          {arrowReverse()}
          Men
        </div>
        <div className="side-second-title">??????</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>?????? & ????????????</li>
            <li>??????</li>
            <li>?????????</li>
            <li>????????? & ?????????</li>
            <li>??????</li>
            <li>???????????? & ???</li>
            <li>????????????</li>
            <li>???</li>
          </ul>
        </div>
      </div>
    );
  }
  function menSports() {
    return (
      <div className="Third-side sideLayout">
        <div className="prevSide allgrey" onClick={moveSecond}>
          {arrowReverse()}
          Men
        </div>
        <div className="side-second-title">?????????</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>??????</li>
            <li>???????????? & ???</li>
            <li>??????</li>
            <li>??????</li>
            <li>??????????????????</li>
            <li>??????</li>
            <li>?????????</li>
          </ul>
        </div>
      </div>
    );
  }
  function menBrand() {
    return (
      <div className="Third-side sideLayout">
        <div className="prevSide allgrey" onClick={moveSecond}>
          {arrowReverse()}
          Men
        </div>
        <div className="side-second-title">?????????</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>Nike Sportswear</li>
            <li>NikeLab</li>
            <li>Jordan</li>
            <li>NBA</li>
            <li>ACG</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div id="SideBarMenu">
      <div id="sideBar-wrapper">
        <div className="firstSideBar sideLayout">
          <div className="menu-wrapper" onClick={secondMenu}>
            <ul>
              <li name="releases" onClick={moveSecond}>
                New Releases{arrow()}
              </li>
              <li name="men" onClick={moveSecond}>
                Men{arrow()}
              </li>
              <li name="women" onClick={moveSecond}>
                Women{arrow()}
              </li>
              <li name="kids" onClick={moveSecond}>
                Kids{arrow()}
              </li>
              <li name="sale" onClick={moveSecond}>
                SALE{arrow()}
              </li>
              <li>SNKRS</li>
              <li name="brand" onClick={moveSecond}>
                Brand{arrow()}
              </li>
            </ul>
          </div>
          <div className="otherBrands">
            <div className="brands">
              <WhatshotOutlinedIcon className="sideMenu-icons" />
              <span className="side-span"> Jordan</span>
            </div>
            <div className="brands">
              <EmojiNatureOutlinedIcon className="sideMenu-icons" />
              <span className="side-span"> Converse</span>
            </div>
          </div>
          <div className="login">
            <p className="side-login-p">
              '????????? ???????????? ?????? ????????? ????????? ???????????????.
              <span>????????? ??????</span>'
            </p>
            <button className="bannerButton">?????? ??????</button>
            <button
              className="bannerButton"
              style={{
                border: "#999 1px solid",
                backgroundColor: "white",
                color: "black"
              }}
            >
              ?????????
            </button>
          </div>
          <div className="side-bottom">
            <div className="relative-wrapper">
              <LocalMallOutlinedIcon className="side-bottom-icon" />
              <span className="side-span">????????????</span>
            </div>
            <div className="relative-wrapper">
              <SendIcon className="side-bottom-icon" />
              <span className="side-span">????????????</span>
            </div>
            <div className="relative-wrapper">
              <HelpOutlineOutlinedIcon className="side-bottom-icon" />
              <span className="side-span">????????????</span>
            </div>
          </div>
        </div>
        {renderSecondMenu(which2Menu)}
        {renderThirdMenu(which3Menu)}
      </div>
    </div>
  );
}
