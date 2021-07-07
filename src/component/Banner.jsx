import React from "react";

function renderBtn(btn, index) {
  return (
    <button key={index} index={index} className="bannerButton">
      {btn}
    </button>
  );
}

export default function Banner(props) {
  return (
    <div className="Banner">
      <dt className="bannerTitle">{props.title}</dt>
      <p className="bannerContent">{props.content}</p>
      {props.button.map((btn, index) => {
        return renderBtn(btn, index);
      })}
    </div>
  );
}
