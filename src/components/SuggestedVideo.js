import React, { useEffect, useState } from "react";
import { SUGGESTED_VIDEO_LIST_API } from "../utils/constants";
import SuggestedVideoCart from "./SuggestedVideoCart";
import SearchVideoCard from "./SearchVideoCard";

const SuggestedVideo = ({ videoId }) => {
  const [suggestedVideo, setSuggestedVideo] = useState([]);
  console.log(suggestedVideo);
  console.log(videoId);

  const getSuggestedVideos = async () => {
    const res = await fetch(`${SUGGESTED_VIDEO_LIST_API}${videoId}`);
    const data = await res.json();
    setSuggestedVideo(data?.items);
  };

  useEffect(() => {
    getSuggestedVideos();
  }, [videoId]);
  return (
    <div className="flex flex-wrap gap-3">
      {suggestedVideo &&
        suggestedVideo.map((video) => <SuggestedVideoCart videoInfo={video} />)}
    </div>
  );
};

export default SuggestedVideo;
