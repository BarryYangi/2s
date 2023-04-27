import React, { useState } from "react";
import "./app.css";
import Video from './video';

const App = (props) => {
  const [url, setUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  
  const handleInputChange = (e) => {
    setUrl(e.target.value);
  }
  
  const handleButtonClick = () => {
    const id = url.split('=')[1];
    fetch(`https://hub.onmicrosoft.cn/public/video/ncm?vid=${id}&raw=false&no_cache=false`)
      .then(res => res.json())
      .then(data => {
        setVideoUrl(data.video_url);
      })
  }

  return (
    <div className="text-center p-4">
      <h1 className="text-5xl m-4">2s - 旨在快速保存你需要的视频</h1>
      <div className="relative top-52">
        {" "}
        <input
          type="text"
          placeholder="链接地址"
          className="input input-bordered input-secondary w-full max-w-xs"
          value={url}
          onChange={handleInputChange}
        />
        <button className="btn m-4" onClick={handleButtonClick}>
          解析
        </button>
      </div>
      <Video url={videoUrl}></Video>
    </div>
  );
};

export default App;