import React from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useState, useEffect } from "react";
import { PiShareFatLight } from "react-icons/pi";
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiFillDislike,
  AiFillLike,
} from "react-icons/ai";
import { getCountFormated } from "../utils/helperFunction";
import SuggestedVideo from "./SuggestedVideo";

const VideoDetail = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisLiked] = useState(false);

  console.log(videoInfo);

  const getVideoInfo = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`
    );
    const data = await res.json();
    console.log(data);
    setVideoInfo(data.items);
  };
  useEffect(() => {
    getVideoInfo();
  }, [videoId]);

  const date1 = videoInfo[0]?.snippet?.publishedAt;
  const date = date1 ? new Date(date1) : null;

  const formattedDate = date ? date.toLocaleString() : "";

  const handleClick = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleDisLike = () => {
   
    setIsDisLiked(!isDisLiked);
  };
  const handleLike = () => {
    
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="mr-32">
        {videoInfo.length > 0 && (
          <div className="text-lg font-semibold mt-3">
            {videoInfo[0]?.snippet?.title}
          </div>
        )}
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center mt-3 ">
            <img
              className="w-12 h-12 rounded-full"
              src={videoInfo[0]?.snippet?.thumbnails?.medium?.url}
              alt="thumnail"
            />
            <div>
              <p className="text-lg font-semibold mx-4">
                {videoInfo[0]?.snippet?.channelTitle}
              </p>
              <p className="mx-4 text-gray-600 text-xs">
                {getCountFormated(videoInfo[0]?.statistics?.commentCount)}{" "}
                subscribers
              </p>
            </div>
            <button
              className="text-white font-semibold bg-black px-3 py-1 rounded-full hover:opacity-80"
              onClick={handleClick}
            >
              {isSubscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>
          <div className="flex justify-end items-center">
            <button
              className="bg-gray-200 hover:bg-slate-300 flex rounded-l-full px-3 py-1"
              onClick={handleLike}
            >
              {isLiked ? (
                <AiOutlineLike className="text-2xl mr-1" />
              ) : (
                <AiFillLike className="text-2xl mr-1" />
              )}
              <p>{getCountFormated(videoInfo[0]?.statistics?.likeCount)}</p>
            </button>
            <button
              className="bg-gray-200 hover:bg-slate-300  flex rounded-r-full px-3 py-1"
              onClick={handleDisLike}
            >
              {isDisLiked ? (
                <AiOutlineDislike className="text-2xl" />
              ) : (
                <AiFillDislike className="text-2xl" />
              )}
            </button>
            <button className="bg-gray-200 hover:bg-slate-300 flex rounded-full ml-3 px-3 py-1">
              <PiShareFatLight className="text-2xl" /> <p> share</p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        <div
          className={`${
            isCollapsed
              ? "cursor-pointer overflow-hidden  bg-gray-100 hover:bg-zinc-300"
              : "bg-zinc-200 "
          }  relative rounded-lg px-3 py-5 mt-3 mr-32`}
          onClick={() => {
            isCollapsed && setIsCollapsed(false);
          }}
        >
          <div className="flex items-center gap-3 child:font-bold "></div>
          <p
            className={`whitespace-pre-line ${
              isCollapsed ? "h-12" : ""
            } mb-2 overflow-hidden`}
          >
            <p className="text-black font-semibold">
              {getCountFormated(videoInfo[0]?.statistics?.viewCount)} views
              Premiered on {formattedDate}
            </p>
            <p>{videoInfo[0]?.snippet?.description}</p>
          </p>
          <button
            className="absolute bottom-0 left-3 font-bold"
            onClick={() => {
              setIsCollapsed((prevState) => !prevState);
            }}
          >
            {isCollapsed ? "Show more" : "Show Less"}
          </button>
        </div>
       
      </div>
 
      
    </>
  );
};

export default VideoDetail;
