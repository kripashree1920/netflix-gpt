import React from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchInputBar = () => {
  const languageName = useSelector(store=>store?.config?.lang)

  return (
   
      <div className="pt-[10%] flex justify-center w-full absolute">
        <form action="" className="bg-black w-1/2 grid grid-cols-12">
          <input
            type="text"
            placeholder={lang[languageName]?.gptSearchPlaceholder}
            className="p-4 m-4 col-span-9"
          />
          <button className="bg-red-700 text-white col-span-3 rounded-lg p-4 m-4">
            {lang[languageName].search}
          </button>
        </form>
    
    </div>
  );
};

export default GptSearchInputBar;
