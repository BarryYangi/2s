import React from "react";
import "./app.css";
import ReactPlayer from 'react-player'

const Video = (props) => {
  return (
    <div className="flex justify-center">
      <div className="mockup-window border bg-base-300 h-auto w-auto top-72">
        <div className="flex justify-center bg-base-200 h-auto">
        <ReactPlayer className="" controls url={props.url} playing />
        </div>
      </div>
    </div>
  );
};

export default Video;