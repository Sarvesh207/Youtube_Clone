import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateName } from "../Helper/nameHelper";
import { generateMessage } from "../Helper/messageHelper";
import SuggestedVideo from "./SuggestedVideo";
import { BiSend } from "react-icons/bi";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messageArray = useSelector((store) => store.chat);

  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const IntervalId = setInterval(() => {
      dispatch(
        addMessages({
          name: generateName(),
          message: generateMessage(),
        })
      );
    }, 5000);

    return () => clearInterval(IntervalId);
  }, []);
  return (
    <div className="flex flex-col">
    <div className="ml-2 text-center border border-gray-300 rounded-t-xl border-b-0 bg-gray-50 pr-2 w-full">Live Chat</div>
    <div className="w-full h-[600px] bg-gray-50 ml-2 p-2 border border-gray-300 overflow-y-scroll border-t-0 flex flex-col-reverse overflow-hidden pt-5 border-b-0">
  
      <div className="">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
    </div>
    <form
      className="w-full p-2 ml-2 border border-gray-300 flex justify-between rounded-b-xl border-t-0 bg-gray-50"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("OnSubmit", liveMessage);
        dispatch(
          addMessages({
            name: "Sarvesh",
            message: liveMessage,
          })
        );
        setLiveMessage("");
      }}
    >
      <input
        className="w-full md:w-96 px-2 outline-none bg-slate-50"
        value={liveMessage}
        onChange={(e) => {
          setLiveMessage(e.target.value);
        }}
        type="text"
        placeholder="Type here..."
      />
      <button className="px-2 mx-2">
        <BiSend className="text-2xl text-gray-400" />
      </button>
    </form>
  
    <div className="text-gray-800 mt-4 text-center text-lg font-semibold">Suggestions</div>
  
    <SuggestedVideo />
  </div>
  
  );
};

export default LiveChat;
