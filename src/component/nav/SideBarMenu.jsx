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
            <li>신상품 전체보기</li>
            <li>SNKRS</li>
            <li>에어 포스 1</li>
            <li>ACG</li>
            <li>NikeLab</li>
            <li>New For Men{secondArrow()}</li>
            <li>New For Women{secondArrow()}</li>
            <li>New For Kids{secondArrow()}</li>
            <li>썸머 에센셜</li>
            <li>지속 가능 컬렉션</li>
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
            <li>신상품</li>
            <li name="shoes" onClick={moveThird}>
              신발{secondArrow()}
            </li>
            <li name="clothes" onClick={moveThird}>
              의류{secondArrow()}
            </li>
            <li name="product" onClick={moveThird}>
              용품{secondArrow()}
            </li>
            <li name="sports" onClick={moveThird}>
              스포츠{secondArrow()}
            </li>
            <li name="brand" onClick={moveThird}>
              브랜드{secondArrow()}
            </li>
            <li>남성 메인</li>
            <li>홈트레이닝 컬렉션</li>
            <li>SNKRS</li>
            <li>SALE</li>
            <li>지속 가능 컬렉션</li>
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
            <li>신상품</li>
            <li>신발{secondArrow()}</li>
            <li>의류{secondArrow()}</li>
            <li>용품{secondArrow()}</li>
            <li>스포츠{secondArrow()}</li>
            <li>브랜드{secondArrow()}</li>
            <li>여성 메인</li>
            <li>홈트레이닝 컬렉션</li>
            <li>SNKRS</li>
            <li>SALE</li>
            <li>지속 가능 컬렉션</li>
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
            <li>신상품</li>
            <li>사이즈별{secondArrow()}</li>
            <li>신발{secondArrow()}</li>
            <li>의류{secondArrow()}</li>
            <li>악세사리 & 용품</li>
            <li>스포츠{secondArrow()}</li>
            <li>Kids 메인</li>
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
            <li>썸머 에센셜</li>
            <li>세계 요가의 날 컬렉션</li>
            <li>런 피어리스 프로젝트 러닝화</li>
            <li>젠더리스 컬렉션</li>
            <li>에슬릿 리뷰</li>
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
        <div className="side-second-title">신발</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>전체보기</li>
            <li>라이프스타일</li>
            <li>러닝</li>
            <li>트레이닝 & 짐</li>
            <li>농구</li>
            <li>조던</li>
            <li>축구</li>
            <li>스케이트보딩</li>
            <li>골프</li>
            <li>테니스</li>
            <li>샌들 & 슬리퍼</li>
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
        <div className="side-second-title">의류</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>의류 전체</li>
            <li>탑 & 티셔츠</li>
            <li>숏 팬츠</li>
            <li>후디 & 크루</li>
            <li>팬츠 & 타이츠</li>
            <li>재킷 & 베스트</li>
            <li>나이키 프로</li>
            <li>양말</li>
            <li>셋업</li>
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
        <div className="side-second-title">용품</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>모자 & 헤드밴드</li>
            <li>가방</li>
            <li>보호대</li>
            <li>슬리브 & 암밴드</li>
            <li>장갑</li>
            <li>트레이닝 & 짐</li>
            <li>애플웨치</li>
            <li>공</li>
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
        <div className="side-second-title">스포츠</div>
        <div className="side-second-menu relative-wrapper">
          <ul>
            <li>러닝</li>
            <li>트레이닝 & 짐</li>
            <li>농구</li>
            <li>축구</li>
            <li>스케이트보딩</li>
            <li>골프</li>
            <li>테니스</li>
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
        <div className="side-second-title">브랜드</div>
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
              '나이키 맴버만을 위한 특별한 혜택을 알아보세요.
              <span>자세히 보기</span>'
            </p>
            <button className="bannerButton">맴버 가입</button>
            <button
              className="bannerButton"
              style={{
                border: "#999 1px solid",
                backgroundColor: "white",
                color: "black"
              }}
            >
              로그인
            </button>
          </div>
          <div className="side-bottom">
            <div className="relative-wrapper">
              <LocalMallOutlinedIcon className="side-bottom-icon" />
              <span className="side-span">장바구니</span>
            </div>
            <div className="relative-wrapper">
              <SendIcon className="side-bottom-icon" />
              <span className="side-span">주문배송</span>
            </div>
            <div className="relative-wrapper">
              <HelpOutlineOutlinedIcon className="side-bottom-icon" />
              <span className="side-span">고객센터</span>
            </div>
          </div>
        </div>
        {renderSecondMenu(which2Menu)}
        {renderThirdMenu(which3Menu)}
      </div>
    </div>
  );
}
