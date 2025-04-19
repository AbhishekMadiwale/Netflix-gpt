import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.langConfig.lang);

  return (
    <div>
      <form className=" flex justify-center pt-[10%] ">
        <input
          className=" mr-10 w-[40%] p-4 border border-black rounded-lg h-12 "
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="h-12 py-2 px-4 bg-red-700 text-white rounded-lg">
        {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
