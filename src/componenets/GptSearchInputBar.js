import React, { useRef, useState } from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
// import openai from "../utils/openai";
import useSearchMoviesResults from "../hooks/useSearchMoviesResults";
import GptRecomendations from "./GptRecomendations";

const GptSearchInputBar = () => {
  const languageName = useSelector(store=>store?.config?.lang);
  const checkForSearchedData = useSelector(store=>store?.gpt?.movieTitle)
  const gptSearchInput = useRef(null);
  const cssDiv = checkForSearchedData?'relative':'absolute'
  const [query, setQuery] = useState(null); 

  useSearchMoviesResults(query);
 
  const handleGptSearch = ()=>{
    // Normal movie lists based on searched names
    const query = gptSearchInput?.current?.value
    if (query) {
      setQuery(query)
    }

    // const Gptquery = 
    // 'Act as a movie recommendation system and suggest some movies as per the query :'
    // + gptSearchInput?.current?.value
    // +'. only give me names of 5 movies , comma separated like examplame result given ahead: Tees maar khan, gadar, sholay, don, golmal ';

    // const searchResults =  await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: Gptquery }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(searchResults?.choices);


  }

  return (
  <div >
      <div className={`pt-[10%] flex justify-center flex-wrap w-full ${cssDiv}`} >
        <form  onSubmit={(e) => e.preventDefault()}  className="bg-black w-1/2 grid grid-cols-12">
          <input
          ref={gptSearchInput}
            type="text"
            placeholder={lang[languageName]?.gptSearchPlaceholder}
            className="p-4 m-4 col-span-9"
          />
          <button className="bg-red-700 text-white col-span-3 rounded-lg p-4 m-4" onClick={handleGptSearch}>
            {lang[languageName].search}
          </button>
        </form>
    
    </div>
   
    </div>
  );
};

export default GptSearchInputBar;
