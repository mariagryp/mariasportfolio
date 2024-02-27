import React from "react";

//a prop 'item', which can then be accessed within the component's function body.
const Project = ({ item }) => {
  const handleClick = () => {
    window.location.href = item.href;
  };
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="">
        <img
          className="w-[152px] lg:w-[452px] lg:hover:scale-110 transition-all"
          src={item.image}
          alt=""
          onClick={handleClick}
        />
      </div>
      <p>{item.category}</p>
    </div>
  );
};

export default Project;
