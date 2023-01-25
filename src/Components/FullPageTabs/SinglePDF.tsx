import React from "react";

interface Props {
  id: number;
  outlineName: string;
  date: string;
  link: string;
}

const SinglePDF: React.FC<Props> = ({ id, outlineName, date, link }) => {
  return (
    <>
      <div className="lg:justify-center flex gap-4 flex-wrap py-6">
        <p>{id}:</p>
        <p>{outlineName}</p>
        <p>{date}</p>
      <a href={link} target="_blank" rel="noreferrer">
        Click here to download
      </a>
      </div>
    </>
  );
};

export default SinglePDF;
