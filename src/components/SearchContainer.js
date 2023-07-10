import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { YOUTUBE_VIDEO_SEARCH_API } from "../utils/constants";
import useFetch from "../utils/useFetch";
import { useSelector } from "react-redux";
import SearchVideoCard from "./SearchVideoCard";

const SearchContainer = () => {
  const [searchParms] = useSearchParams();
  const searchQuery = searchParms.get("search_query");
 
  const {data:searchSuggestions, isLoading, error} = useFetch(YOUTUBE_VIDEO_SEARCH_API+searchQuery)
 
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  return (
    <div className={`${isMenuOpen? "ml-40" : ""} pr-4 transition-all flex justify-center  items-center flex-wrap`}>
    
      {
       searchSuggestions && searchSuggestions.map((video) => {
          return  <Link key={video?.id?.videoId} to={"/watch?v="+video?.id?.videoId}>
           <SearchVideoCard  data={video}/>
           </Link>
        })
      }
    </div>
  );
};

export default SearchContainer;
