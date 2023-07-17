import React from "react";

const Shimmer = () => {
  return (
    <div className="flex items-center justify-center flex-wrap">
      {Array(48)
        .fill("")
        .map((e, index) => (
          <div class="m-2  w-80 transition-all  rounded-lg shadow animate-pulse ">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-200 rounded-xl "></div>
            <div class="flex justify-start  animate-pulse  items-center  h-full   mx-3">
              <div class="flex justify-start  flex-col  gap-4  mb-2">
                <div class="w-64 bg-gray-200 h-5 rounded-md "></div>
                <div class="w-32 bg-gray-200 h-5 rounded-md  "></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
