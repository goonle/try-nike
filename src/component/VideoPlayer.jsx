import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer(props) {
  return (
    <div className="VideoPlayer">
      <ReactPlayer
        className="reactPlayer"
        muted={true}
        playing={true}
        url={props.url}
        loop={true}
        width="100%"
        height="100%"
        controls={false}
      />
    </div>
  );
}
