import React from "react";

const SearchVideoCard = (info) => {
  console.log(info?.data?.snippet);
  //   const { title, publishTime, description, channelTitle } = info?.data?.snippet;
  return (
    <div className="p-2 m-2  w-80 rounded-xl transition-all h-80 ">
      <img
        className="rounded-lg hover:rounded-none"
        src={info?.data?.snippet?.thumbnails?.medium?.url}
        alt="thumbail"
      />
      <ul>
        <li className="font-bold py-2">{info?.data?.snippet?.title.split(0, 30)}...</li>
        <li>{info?.data?.snippet?.channelTitle}</li>
        {/* <li>{info?.data?.snippet?.publishTime}</li> */}
      </ul>
    </div>
  );
};

export default SearchVideoCard;
