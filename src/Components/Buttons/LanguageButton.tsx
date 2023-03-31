import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";

const LanguageButton = () => {
  const { setEnglish, setJapanese, Japanese } = useContext(AppContext);

  return (
    <>
      <button
        onClick={Japanese ? setEnglish : setJapanese}
        className="transition hover:ease-in-out duration-500 text-xl md:text-xl lg:text-2xl mt-2 md:mt-4 p-3 text-darkgold bg-black rounded border-[1px] hover:bg-gray hover:text-gold"
      >
        {Japanese ? "English" : "日本語"}
      </button>
    </>
  );
};

export default LanguageButton;
