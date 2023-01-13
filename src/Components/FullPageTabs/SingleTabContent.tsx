import React from "react";

interface Props {
  tabNumber: number;
  number: number;
  title: string;
}

const SingleTabContent: React.FC<Props> = ({ tabNumber, number, title }) => {
  return (
    <>
      {tabNumber == number ? (
        <div className="tabcontent">
          <h3>{title}</h3>
          <p>Title of outlines</p>
          <a href={require('../../Pages/BibleSupport/PDF/test.pdf')} target="_blank">Click to download</a> 
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SingleTabContent;
