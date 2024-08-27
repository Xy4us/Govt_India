import React from "react";
import Header from "./Header";
import Pop from "./Pop";

const Body = () => {
  return (
    <div className=" bg-[#212121] min-h-[100vh] min-w-[100vw] flex items-center flex-col justify-between">
      <Header />
      <input
        type="text"
        placeholder="Enter your query"
        className="min-w-[650px] p-3 px-4 bg-[#2f2f2f] text-white rounded-lg"
      />
      <Pop />
    </div>
  );
};

export default Body;
