import React from "react";

interface Props {
    quote: string;
    verse: string;
    home: boolean;
}

const BibleVerse:React.FC<Props> = ({quote, verse, home}) => {
  return (
    <div className={`grid place-content-center ${home ? "lg:w-1/3" : ""}`}>
      <blockquote className="max-w-[500px] italic opacity-70 text-xl m-8">
        {quote}
      </blockquote>
      <p className="text-center font-bold pb-8">{verse}</p>
    </div>
  );
};

export default BibleVerse;
