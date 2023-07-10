import React from "react";
import { getCountFormated } from "../utils/helperFunction";

const VideoCard = ({ info }) => {
  // console.log(info.snippet);
  // console.log(info.statistics);
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-2  w-80 rounded-xl transition-all h-80  ">
      <img
        className=" w-full rounded-lg hover:rounded-none"
        src={thumbnails?.medium?.url}
        alt="thumbail"
      />
      <div className="flex items-start">
        <ul className="px-2">
          <li className="font-bold py-2">{title.slice(0, 40)}...</li>
          <li>{channelTitle}</li>
          <li>{getCountFormated(statistics.viewCount)} views</li>
        </ul>
        <div className="mt-3 opacity-0 hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
