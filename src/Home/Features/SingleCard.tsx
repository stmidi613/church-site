import React from "react";

interface Props {
  heading: string;
  paragraph: string;
  picture: string;
  alt: string;
}

const SingleCard: React.FC<Props> = ({ heading, paragraph, picture, alt }) => {
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
        <a className="w-full text-center absolute bottom-0 py-6 hover:text-gray hover:bg-teal" href="/#">
          もっと読む &gt;&gt;
        </a>
      </div>
    </div>
  );
};

export default SingleCard;
