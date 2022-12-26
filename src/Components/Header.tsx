import React from "react";

interface Props {
    backgroundImage: string;
    title: string;
    paragraph: string;
}

const Header: React.FC<Props> = ({backgroundImage, title, paragraph}) => {
  return (
    <section
      className={`w-full h-80 md:h-[60vh] lg:h-[75vh] bg-cover ${backgroundImage}`}
    >
      <div className="grid place-content-center h-full w-full bg-gray/40">
        <div className="text-center">
          <h2 className="text-5xl text-white pb-4">{title}</h2>
          <p className="text-white bg-gray/50 px-8 max-w-lg">{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
