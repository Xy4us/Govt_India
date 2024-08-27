import React from "react";

const Header = () => {
  return (
    <div className="w-full text-white flex items-center justify-center">
      <div className="w-[75%] justify-between flex">
        <div>Govt Website</div>
        <div className="flex gap-x-4 text-white">
          <p>Chat query</p>
          <p>Sensitive cases</p>
          <p>pending cases</p>
          <p>E-filing</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
