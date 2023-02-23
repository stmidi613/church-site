import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";

const LanguageButton = () => {
  const { setEnglish, setJapanese, Japanese } = useContext(AppContext);

  return (
    <>
      <div className="fixed right-5 bottom-24 md:top-[-10px]">
        <button onClick={Japanese ? setEnglish : setJapanese} className="transition hover:ease-in-out duration-500 text-xl md:text-xl lg:text-2xl mt-2 md:mt-4 p-3 text-darkgold bg-black rounded border-[1px] hover:bg-gray hover:text-gold">
          {Japanese ? "English" : "日本語"}
        </button>
      </div>
    </>
  );
};

export default LanguageButton;
