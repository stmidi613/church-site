import React from "react";

interface Props {
    backgroundImage: string;
    title: string;
    paragraph: string;
}

const Header: React.FC<Props> = ({backgroundImage, title, paragraph}) => {
  return (
    <section
      className={`w-full h-80 md:h-[60vh] bg-cover z-0 ${backgroundImage}`}
    >
      <div className="grid place-content-center h-full w-full bg-gray/40 z-10">
        <div className="text-center">
          <h2 className="text-3xl text-white pb-4">{title}</h2>
          <p className="text-white px-8">{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
