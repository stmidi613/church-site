import React from "react";
import { Link } from "react-router-dom";

interface Props {
  heading: string;
  paragraph: string;
  picture: string;
  alt: string;
  link: string;
}

const SingleCard: React.FC<Props> = ({
  heading,
  paragraph,
  picture,
  alt,
  link,
}) => {
  return (
    <div className="pb-6 grid place-content-center w-[300px]">
      <img
        className="h-[200px]"
        width="640px"
        height="479px"
        src={picture}
        alt={alt}
      />
      <div className="bg-[#f7f6f2] pb-8j h-[300px] relative">
        <h4 className="text-center text-xl p-4">{heading}</h4>
        <p className="text-center text-sm px-4 pb-8">{paragraph}</p>
        <Link to={link}>
          <button className="transition hover:ease-in-out duration-500 w-full text-center absolute bottom-0 py-6 hover:text-black hover:bg-darkgold">
            もっと読む &gt;&gt;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
