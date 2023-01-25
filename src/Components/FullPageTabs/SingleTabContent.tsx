import React from "react";

interface Props {
  tabNumber: number;
  number: number;
  title: string;
}

const SingleTabContent: React.FC<Props> = ({ tabNumber, number, title }) => {
  const outlines: {id: number; outlineName: string; link: string}[] = [{id: 1, outlineName: "Report", link: require("../../Pages/BibleSupport/PDF/test.pdf")}]
  return (
    <>
      {tabNumber === number ? (
        <div className="tabcontent">
          <h3 className="text-center">{title}</h3>
          {outlines.map(outline =>
          <>
          <p>{outline.id + outline.outlineName}</p>
          <a href={outline.link} target="_blank" rel="noreferrer">Click here</a> 
          </> 
            )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SingleTabContent;
