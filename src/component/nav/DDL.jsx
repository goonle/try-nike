import React, { useState } from "react";
function DDL(props) {
  function choose(props) {
    let whichOne = props.show;

    if (whichOne === "new") {
      return <DDLNew />;
    } else if (whichOne === "men") {
      return <DDLMen />;
    } else if (whichOne === "women") {
      return <DDLWomen />;
    } else if (whichOne === "kids") {
      return <DDLKids />;
    } else if (whichOne === "sale") {
      return <DDLSale />;
    } else {
    }
  }

  const [changeHeight, setHeight] = useState({
    maxHeight: "500px"
  });
  function mouseOut() {
    setHeight({
      maxHeight: 0
    });
    document.getElementById("bodyBlur").style.filter = "blur(0)";
  }
  function mouseOn() {
    setHeight({
      maxHeight: "500px"
    });
    document.getElementById("bodyBlur").style.filter = "blur(5px)";
  }

  ///////////////////////////////  this is return
  return (
    <div
      className="DDL"
      onMouseOut={mouseOut}
      onMouseOver={mouseOn}
      style={props.onDDL ? { maxHeight: "500px" } : changeHeight}
    >
      {choose(props)}
    </div>
  );
}

function DDLNew() {
  return (
    <div className="ddl-container">
      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">New & Featured</p>
          <li>
            <a href="/">신상품 전체보기</a>
          </li>
          <li>
            <a href="/">SNKRS</a>
          </li>
          <li>
            <a href="/">에어 포스 1</a>
          </li>
          <li>
            <a href="/">ACG</a>
          </li>
          <li>
            <a href="/">NikeLab</a>
          </li>
          <li>
            <a href="/">NEW TO SALE</a>
          </li>
          <li>
            <a href="/">썸머 에센셜</a>
          </li>
          <li>
            <a href="/">지속 가능 컬렉션</a>
          </li>
        </ul>
      </div>
      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">New For Men</p>
          <li>
            <a href="/">신발</a>
          </li>
          <li>
            <a href="/">의류</a>
          </li>
          <li>
            <a href="/">용품</a>
          </li>
          <li>
            <a href="/">전체보기</a>
          </li>
        </ul>
      </div>

      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">New For Women</p>
          <li>
            <a href="/">신발</a>
          </li>
          <li>
            <a href="/">의류</a>
          </li>
          <li>
            <a href="/">용품</a>
          </li>
          <li>
            <a href="/">전체보기</a>
          </li>
        </ul>
      </div>

      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">New For Kids</p>
          <li>
            <a href="/">신발</a>
          </li>
          <li>
            <a href="/">의류</a>
          </li>
          <li>
            <a href="/">용품</a>
          </li>
          <li>
            <a href="/">전체보기</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
function DDLMen() {
  return (
    <div className="ddl-container">
      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">New & Featured</p>
          <li>
            <a href="/">신상품</a>
          </li>
          <li>
            <a href="/">SNKRS</a>
          </li>
          <li>
            <a href="/">THE BEST</a>
          </li>
          <li>
            <a href="/">MEMBER SHOP</a>
          </li>
          <li>
            <a href="/">런 피어리스 프로젝트 러닝화</a>
          </li>
          <li>
            <a href="/">세계 요가의날 컬렉션</a>
          </li>
          <li>
            <a href="/">젠더리스 컬렉션</a>
          </li>
          <li>
            <a href="/">애슬릿 리뷰</a>
          </li>
          <li>
            <a href="/">SALE</a>
          </li>
          <li>
            <a href="/">지속 가능 컬렉션</a>
          </li>
        </ul>
      </div>
      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">신발</p>
          <li>
            <a href="/">신발 전체</a>
          </li>
          <li>
            <a href="/">라이프스타일</a>
          </li>
          <li>
            <a href="/">러닝</a>
          </li>
          <li>
            <a href="/">트레이닝 & 짐</a>
          </li>
          <li>
            <a href="/">농구</a>
          </li>

          <li>
            <a href="/">조던</a>
          </li>

          <li>
            <a href="/">축구</a>
          </li>

          <li>
            <a href="/">스케이트보딩</a>
          </li>

          <li>
            <a href="/">골프</a>
          </li>

          <li>
            <a href="/">테니스</a>
          </li>

          <li>
            <a href="/">샌들 & 슬리퍼</a>
          </li>
        </ul>
      </div>

      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">의류</p>
          <li>
            <a href="/">의류 전체</a>
          </li>
          <li>
            <a href="/">탑 & 티셔츠</a>
          </li>
          <li>
            <a href="/">숏 팬츠</a>
          </li>
          <li>
            <a href="/">후디 & 크루</a>
          </li>
          <li>
            <a href="/">팬츠 & 타이츠</a>
          </li>

          <li>
            <a href="/">재킷 & 베스트</a>
          </li>

          <li>
            <a href="/">나이키 프로</a>
          </li>

          <li>
            <a href="/">양말</a>
          </li>

          <li>
            <a href="/">셋업</a>
          </li>
        </ul>
        <ul className="ddl-list">
          <p className="ddl-title">용품</p>
          <li>
            <a href="/">모자 & 헤드밴드</a>
          </li>
          <li>
            <a href="/">가방</a>
          </li>
          <li>
            <a href="/">애플워치</a>
          </li>
        </ul>
      </div>

      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">스포츠</p>
          <li>
            <a href="/">러닝</a>
          </li>
          <li>
            <a href="/">트레이닝 & 짐</a>
          </li>
          <li>
            <a href="/">농구</a>
          </li>
          <li>
            <a href="/">축구</a>
          </li>
          <li>
            <a href="/">스케이트보딩</a>
          </li>
          <li>
            <a href="/">골프</a>
          </li>
          <li>
            <a href="/">테니스</a>
          </li>
        </ul>
      </div>
      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">브랜드</p>
          <li>
            <a href="/">Nike Sportswear</a>
          </li>
          <li>
            <a href="/">NikeLab</a>
          </li>
          <li>
            <a href="/">Jordan</a>
          </li>
          <li>
            <a href="/">NBA</a>
          </li>
          <li>
            <a href="/">ACG</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
function DDLWomen() {
  return (
    <div className="ddl-container">
      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">New & Featured</p>
          <li>
            <a href="/">신상품</a>
          </li>
          <li>
            <a href="/">SNKRS</a>
          </li>
          <li>
            <a href="/">THE BEST</a>
          </li>
          <li>
            <a href="/">MEMBER SHOP</a>
          </li>
          <li>
            <a href="/">브라 & 타이츠 셋업</a>
          </li>
          <li>
            <a href="/">세계 요가의날 컬렉션</a>
          </li>
          <li>
            <a href="/">파스텔 컬렉션</a>
          </li>
          <li>
            <a href="/">홈트레이닝 컬렉션</a>
          </li>
          <li>
            <a href="/">썸머 에센셜</a>
          </li>
          <li>
            <a href="/">애슬릿 리뷰</a>
          </li>
          <li>
            <a href="/">SALE</a>
          </li>
          <li>
            <a href="/">지속 가능 컬렉션</a>
          </li>
        </ul>
      </div>
      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">신발</p>
          <li>
            <a href="/">신발 전체</a>
          </li>
          <li>
            <a href="/">라이프스타일</a>
          </li>
          <li>
            <a href="/">러닝</a>
          </li>
          <li>
            <a href="/">트레이닝 & 짐</a>
          </li>
          <li>
            <a href="/">조던</a>
          </li>

          <li>
            <a href="/">축구</a>
          </li>
          <li>
            <a href="/">골프</a>
          </li>

          <li>
            <a href="/">테니스</a>
          </li>

          <li>
            <a href="/">샌들 & 슬리퍼</a>
          </li>
        </ul>
      </div>

      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">의류</p>
          <li>
            <a href="/">의류 전체</a>
          </li>
          <li>
            <a href="/">스포츠브라</a>
          </li>
          <li>
            <a href="/">탑 & 티셔츠</a>
          </li>
          <li>
            <a href="/">후디 & 크루</a>
          </li>
          <li>
            <a href="/">타이츠 & 레깅스</a>
          </li>

          <li>
            <a href="/">팬츠 & 숏 팬츠</a>
          </li>

          <li>
            <a href="/">재킷 & 베스트</a>
          </li>

          <li>
            <a href="/">스커트 & 드레스</a>
          </li>

          <li>
            <a href="/">요가</a>
          </li>
          <li>
            <a href="/">양말</a>
          </li>
          <li>
            <a href="/">셋업</a>
          </li>
        </ul>
        <ul className="ddl-list">
          <p className="ddl-title">용품</p>
          <li>
            <a href="/">모자 & 헤드밴드</a>
          </li>
          <li>
            <a href="/">가방</a>
          </li>
          <li>
            <a href="/">애플워치</a>
          </li>
        </ul>
      </div>

      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">스포츠</p>
          <li>
            <a href="/">러닝</a>
          </li>
          <li>
            <a href="/">트레이닝 & 짐</a>
          </li>

          <li>
            <a href="/">축구</a>
          </li>
          <li>
            <a href="/">골프</a>
          </li>
          <li>
            <a href="/">테니스</a>
          </li>
          <li>
            <a href="/">요가</a>
          </li>
        </ul>
      </div>
      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">브랜드</p>
          <li>
            <a href="/">Nike Sportswear</a>
          </li>
          <li>
            <a href="/">NikeLab</a>
          </li>
          <li>
            <a href="/">Jordan</a>
          </li>
          <li>
            <a href="/">NBA</a>
          </li>
          <li>
            <a href="/">ACG</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
function DDLKids() {
  return (
    <div className="ddl-container">
      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">New & Featured</p>
          <li>
            <a href="/">신상품</a>
          </li>
          <li>
            <a href="/">키즈 썸머 에센셜</a>
          </li>
          <li>
            <a href="/">GOOD PRICE 컬렉션</a>
          </li>
          <li>
            <a href="/">나이키 키즈 클래식</a>
          </li>
          <li>
            <a href="/">조던 키즈</a>
          </li>
          <li>
            <a href="/">아이들을 위한 선물</a>
          </li>
          <li>
            <a href="/">SALE</a>
          </li>
        </ul>
      </div>
      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">신발</p>
          <li>
            <a href="/">베이비(160mm 이하)</a>
          </li>
          <li>
            <a href="/">리틀키즈(165-220mm)</a>
          </li>
          <li>
            <a href="/">주니어(225-250mm)</a>
          </li>
          <li>
            <a href="/">라이프스타일</a>
          </li>
          <li>
            <a href="/">러닝</a>
          </li>
          <li>
            <a href="/">축구</a>
          </li>
          <li>
            <a href="/">농구</a>
          </li>
          <li>
            <a href="/">샌들 & 슬리퍼</a>
          </li>
        </ul>
      </div>

      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">의류</p>
          <li>
            <a href="/">베이비 (0-4세)</a>
          </li>
          <li>
            <a href="/">리틀키즈 (4-7세)</a>
          </li>
          <li>
            <a href="/">주니어 (8-13세)</a>
          </li>
          <li>
            <a href="/">탑 & 티셔츠</a>
          </li>
          <li>
            <a href="/">팬츠 & 레깅스</a>
          </li>
          <li>
            <a href="/">스커트 & 드레스</a>
          </li>
          <li>
            <a href="/">후디 & 크루</a>
          </li>
          <li>
            <a href="/">트랙수트 & 세트</a>
          </li>
          <li>
            <a href="/">재킷 & 베스트</a>
          </li>
          <li>
            <a href="/">가방 & 모자 & 용품</a>
          </li>
        </ul>
      </div>

      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">스포츠</p>
          <li>
            <a href="/">러닝</a>
          </li>
          <li>
            <a href="/">축구</a>
          </li>
          <li>
            <a href="/">농구</a>
          </li>
          <li>
            <a href="/">테니스</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
function DDLSale() {
  return (
    <div className="ddl-container">
      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">New To Sale</p>
        </ul>
      </div>
      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">Mens Sale</p>
          <li>
            <a href="/">신발</a>
          </li>
          <li>
            <a href="/">의류</a>
          </li>
          <li>
            <a href="/">용품</a>
          </li>
          <li>
            <a href="/">전체보기</a>
          </li>
        </ul>
      </div>

      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">Womens Sale</p>
          <li>
            <a href="/">신발</a>
          </li>
          <li>
            <a href="/">의류</a>
          </li>
          <li>
            <a href="/">용품</a>
          </li>
          <li>
            <a href="/">전체보기</a>
          </li>
        </ul>
      </div>

      <div className="ddl-column">
        <ul className="ddl-list">
          <p className="ddl-title">Kids Sale</p>
          <li>
            <a href="/">신발</a>
          </li>
          <li>
            <a href="/">의류</a>
          </li>
          <li>
            <a href="/">용품</a>
          </li>
          <li>
            <a href="/">전체보기</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default DDL;
