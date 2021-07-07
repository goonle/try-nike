import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="customerService">
        <div className="cus customer1 csDiv">
          <ul className="customUl">
            <li className="customTitle custom-device horisontal ">주문배송</li>
            <li className="customTitle  horisontal">매장안내</li>
            <li className="customTitle custom-device horisontal">고객센터</li>
            <li className="customTitle custom-desktop">나이키 저널</li>
            <li className="customTitle custom-desktop">로그인</li>
            <li className="customTitle custom-desktop">멤버 가입</li>
          </ul>
        </div>
        <div className=" cus customer2 csDiv">
          <ul className="customUl">
            <li className="customTitle">고객센터</li>
            <li>
              <a className="custom-a" href="/">
                080-022-0182
              </a>
            </li>
            <li>
              <a className="custom-a" href="/">
                주문/결제
              </a>
            </li>
            <li>
              <a className="custom-a" href="/">
                배송
              </a>
            </li>
            <li>
              <a className="custom-a" href="/">
                주문배송조회
              </a>
            </li>
            <li>
              <a className="custom-a" href="/">
                맴버쉽 혜택/서비스
              </a>
            </li>
            <li>
              <a className="custom-a" href="/">
                공지사항
              </a>
            </li>
            <li>
              <a className="custom-a" href="/">
                1:1 채팅 문의
              </a>
            </li>
            <li>
              <a className="custom-a" href="/">
                1:1 이메일문의
              </a>
            </li>
            <li>
              <a className="custom-a" href="/">
                이용약관
              </a>
            </li>
            <li>
              <a className="custom-a" href="/">
                개인정보처리방침
              </a>
            </li>
          </ul>
        </div>
        <div className="cus customer3 csDiv">
          <ul className="customUl">
            <li className="customTitle">ABOUT NIKE</li>
            <li>
              <a className="custom-a" href="/">
                나이키에 대하여
              </a>
            </li>
          </ul>
        </div>
        <div className="cus customer4 csDiv">
          <ul className="customUl">
            <li className="customTitle">SOCIAL</li>
            <li>
              <a className="custom-a" href="/">
                <TwitterIcon />
              </a>
              <a className="custom-a" href="/">
                <FacebookIcon />
              </a>
              <a className="custom-a" href="/">
                <YouTubeIcon />
              </a>
              <a className="custom-a" href="/">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <span className="copy-left">
          {" "}
          <span className="footerWhite">
            <RoomIcon fontSize="small" />
            대한민국
          </span>
        </span>
        <span className="copy-middle">ⓒ2021 Jun, Inc. All Right Reserved</span>
        <span className="copy-right">
          <span>
            <a className="noChange" href="/">
              이용약관
            </a>
          </span>
          <span>
            <a className="noChange" href="/">
              개인정보처리방침
            </a>
          </span>
        </span>
      </div>
      <div className="company">
        <p className="company-content">
          (유) 준코리아 대표 HUH JUN HYUNG{" "}
          <div className="change-line">
            <div className="change-line">|</div>
          </div>{" "}
          서울 00구 000로 000 00000센터 00층 <br />
          통신판매업신고번호 0000-서울강남-00000{" "}
          <div className="change-line">|</div> 등록번호 000-00-00000
          사업자정보확인 고객센터 전화문의{" "}
          <span className="footerWhite">000-000-0000</span> <br />
          FAX 00-0000-0000 <div className="change-line">|</div> E-mail
          service@email.co.kr <div className="change-line">|</div>{" "}
          호스팅서비스사업자 AWS
        </p>
        <p className="company-content">
          안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 KG
          이니시스의 구매안전 서비스 (채무지급보증)를 이용하실 수 있습니다.{" "}
          <br />
          <br />
          온라인디지털콘텐츠사업발전법에 의한{" "}
          <span className="footerWhite">콘텐츠보호안내 자세히보기</span>{" "}
          이니페이
        </p>
      </div>
    </div>
  );
}
