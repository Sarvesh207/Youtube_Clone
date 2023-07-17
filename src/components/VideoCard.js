import React from "react";
import { getCountFormated } from "../utils/helperFunction";

const VideoCard = ({ info }) => {
  // console.log(info.snippet);
  // console.log(info.statistics);
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-2  w-80 rounded-xl transition-all h-80 ">
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
       
      </div>
    </div>
  );
};

export default VideoCard;
