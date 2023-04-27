import React, { useState } from "react";
import "./app.css";
import Video from './video';

const App = (props) => {
  const [url, setUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleButtonClick = () => {
    const regex = /video\/([^/]+)/i;
    const match = url.match(regex);

    if (match) {
      const bvid = match[1];
      const apiUrl = `https://api.bilibili.com/x/player/pagelist?bvid=${bvid}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const cid = data.data[0].cid;
          const videoUrlApi = `https://api.bilibili.com/x/player/playurl?cid=${cid}&bvid=${bvid}&platform=html5&high_quality=1`;

          fetch(videoUrlApi)
            .then((response) => response.json())
            .then((data) => {
              const videoUrl = data.data.dash.video[0].baseUrl;
              setVideoUrl(videoUrl);
            })
            .catch((error) => {
              // Handle the error
            });
        })
        .catch((error) => {
          // Handle the error
        });
    } else {
      // Handle the case where the video URL is not found
    }
  };

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

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