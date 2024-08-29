import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const tabs = [
    {
      name: "Chat Query",
      path: "/",
    },
    {
      name: "Sensitive Cases",
      path: "/sensitive",
    },
    {
      name: "Pending Cases",
      path: "/pending",
    },
    {
      name: "E-Filing",
      path: "/E-filing",
    },
  ];

  return (
    <div className="w-full text-white flex items-center justify-center bg-secondary min-h-[70px]">
      <div className="w-[75%] justify-between flex">
        <div>Govt Website</div>
        <div className="flex gap-x-12 text-white">
          {tabs.map((item, index) => (
            <Link className="text-lg cursor-pointer" to={item.path} key={index}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
