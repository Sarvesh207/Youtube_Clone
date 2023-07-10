import { useSelector } from "react-redux/es/hooks/useSelector";
import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";


const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={`${isMenuOpen ? "ml-40" : ""} pr-4 transition-all`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
