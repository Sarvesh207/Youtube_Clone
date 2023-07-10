import React, { useEffect, useState, useRef } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cacheResults } from "../utils/searchSlice";

const InputSearch = () => {
  const searchQueryRef = useRef("");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggetions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);
  const disptach = useDispatch();

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggetions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
        setSelectedSuggestionIndex(-1);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const handleKeyDown = (event) => {
    console.log(event.key);

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedSuggestionIndex((prevIndx) =>
        prevIndx < suggestions.length - 1 ? prevIndx - 1 : 0
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedSuggestionIndex((prevIndx) =>
        prevIndx > suggestions.length - 1 ? prevIndx + 1 : 0
      );
    } else if (event.key === "Enter") {
      if (selectedSuggestionIndex !== -1) {
        searchQueryRef.current = suggestions[selectedSuggestionIndex];
      }
    }
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    disptach(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const handleSearch = (event, query) => {
    event.preventDefault();
    console.log(query);
    navigate(`/results?search_query=${query}`)
  };

  return (
    <div className=" col-span-10 px-12 ">
      <div className="mb-0.5 flex items-center"> 
        <form action="" className="flex items-center">
          <input
            className="xl:w-96 md:w-60 sm:w-40 py-1 px-3 border border-gray-500 shadow-lg rounded-l-full focus:outline-none focus:ring-0"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(event) => {
              searchQueryRef.current = event.target.value;
              setSearchQuery(event.target.value);
              
            }}
            onKeyDown={(event) => handleKeyDown(event)}
            onFocus={() => setShowSuggetions(true)}
            onBlur={() => setShowSuggetions(false)}
          />
          <button
            className="border border-gray-400 shadow-lg  px-5 py-2 rounded-r-full bg-gray-100"
            onClick={(event) => {
              handleSearch(event, searchQuery);
            }}
          >
            <GoSearch className="w-6 text-black bg-gray-100" />
          </button>
        </form>
      </div>
      <div>
        {(showSuggestions && suggestions.length > 0  )  && (
          <ul className=" fixed bg-white  w-[24rem] py-2 mt-2 flex-col shadow-lg rounded-lg border-gray-100">
            {suggestions.map((s) => (
              <li
                key={s.name}
                className="flex items-center py-2 font-bold px-3 my-2  hover:bg-gray-200 rounded-lg cursor-pointer" 
                onMouseDown={(event) => {
                  const suggestionValue = event.target.textContent;
                 
                  setSearchQuery(suggestionValue)
                }}
              >
                <GoSearch className="w-6 mr-2" /> {s}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InputSearch;
