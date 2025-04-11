import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-10">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex align-middle">
        <div className="inline-flex border-2 border-black h-10 rounded-lg p-2">
          <button className="flex align-middle font-bold" onClick={alert}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/27/27223.png"
              alt="play button"
              className="mx-2"
            />
            Play
          </button>
        </div>

        <div className="inline-flex border-2 border-black h-10 rounded-lg p-2 mx-7 bg-gray-500 bg-opacity-20 ">
          <button
            className="flex align-middle text-black font-bold"
            onClick={alert}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/471/471662.png"
              alt="play button"
              className="mx-2"
            />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
