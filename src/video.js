import React, { useState, useEffect } from "react";
import "./app.css"; 
import ReactPlayer from 'react-player'

const Video = (props) => {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.55);
  const [progress, setProgress] = useState(0);
  
  const handleKeyDown = (e) => {
    // ...
  }
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [playing, volume, progress]);
  
  return (
    <div className="flex justify-center">
      <div className="mockup-window border bg-base-300 h-auto w-auto top-72">
        <div className="flex justify-center bg-base-200 h-auto">
          <ReactPlayer 
            className="" 
            controls 
            url={props.url}
            playing={playing}
            volume={volume}
            onProgress={(p) => setProgress(p.played)}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;