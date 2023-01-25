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
      outlineName: "Report",
      date: "2023/02/2015",
      link: require("../../Pages/BibleSupport/PDF/test.pdf"),
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
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SingleTabContent;
