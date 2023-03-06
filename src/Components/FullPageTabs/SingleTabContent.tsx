import React from "react";

import SinglePDF from "./SinglePDF";

interface Props {
  tabNumber: number;
  number: number;
  title: string;
}

const SingleTabContent: React.FC<Props> = ({ tabNumber, number, title }) => {
  const outlines: {
    id: number;
    outlineName: string;
    date: string;
    link: string;
  }[] = [
    {
      id: 1,
      outlineName: "重い重荷",
      date: "2023/03/02",
      link: require("../../Pages/BibleSupport/PDF/heavyburdens2.pdf"),
    },
  ];
  const bibleBasics: {
    id: number;
    name: string;
    date: string;
    link: string;
  }[] = [
    {
      id: 1,
      name: "重い重荷",
      date: "2023/03/02",
      link: require("../../Pages/BibleSupport/PDF/heavyburdens2.pdf"),
    },
  ];
  return (
    <>
      {tabNumber === number ? (
        <div className="tabcontent">
          <h3 className="text-center pb-2 text-3xl">{title}</h3>
          {outlines.map((outline) => (
            number === 0 ?
            <SinglePDF
              key={outline.id}
              id={outline.id}
              outlineName={outline.outlineName}
              date={outline.date}
              link={outline.link}
            /> : ""
          ))}
          {bibleBasics.map((basic) => (
            number === 1 ?
            <SinglePDF
              key={basic.id}
              id={basic.id}
              outlineName={basic.name}
              date={basic.date}
              link={basic.link}
            /> : ""
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SingleTabContent;
