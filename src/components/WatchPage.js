import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommetsContainer from "./CommetsContainer";
import LiveChat from "./LiveChat";

import VideoDetail from "./VideoDetail";
import SuggestedVideo from "./SuggestedVideo";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="flex flex-col  xl:auto lg:mx-10  mt-5">
    <div className="md:flex md:flex-row ">
      <div className="">
        <div className="aspect-w-16 aspect-h-9 h-[600px]">
          <iframe
            className="w-full h-full"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <VideoDetail videoId={videoId} />
      </div>
      <div className="md:w-2/4 mt-4 md:mt-0">
        <LiveChat />
        <SuggestedVideo videoId={videoId} />
      </div>
    </div>
  </div>
  );
};

export default WatchPage;
