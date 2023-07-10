import React from "react";
import { Link } from "react-router-dom";

const SuggestedVideoCart = ({ videoInfo }) => {
  const title = videoInfo?.snippet?.title;
  // const title1 = videoInfo?.snippet?.title &&  title.slice(0, 60)

  const date1 = videoInfo[0]?.snippet?.publishedAt;
  const date = new Date(date1);
  console.log(date);
  const formattedDate = date.toLocaleString();

  return (
    <Link to={"/watch?v="+videoInfo?.id?.videoId}>
      <div className="flex gap-3 justify-center items-center mt-5 hover:bg-slate-100">
        <div className="w-40">
          <img
            className="w-full  object-cover"
            src={videoInfo?.snippet?.thumbnails?.standard?.url}
            alt="thumbnail"
          />
        </div>
        <div className="overflow-hidden ml-2">
          <p className="font-semibold mb-3 text-black">
            {title.slice(0, 50)}...
          </p>
          <div className="flex items-center gap-2">
            <img
              className="rounded-full w-8 h-8"
              src={videoInfo?.snippet?.thumbnails?.default?.url}
              alt=""
            />
            <p className="text-xs text-gray-600">
              {videoInfo?.snippet?.channelTitle}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuggestedVideoCart;
