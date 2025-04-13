import React from "react";

const GptSearchBar = () => {
  return (
    <div>
      <form className=" flex justify-center pt-[20%] ">
        <input
          className=" mr-10 w-[20%] p-4 border border-black rounded-lg h-12 "
          type="text"
          placeholder="What would you like to watch?"
        />
        <button className="h-12 py-2 px-4 bg-red-700 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
