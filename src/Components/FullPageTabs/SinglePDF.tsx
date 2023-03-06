import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";

interface Props {
  id: number;
  outlineName: string;
  date: string;
  link: string;
}

const SinglePDF: React.FC<Props> = ({ id, outlineName, date, link }) => {
  const { Japanese } = useContext(AppContext);
  return (
    <>
      <div className="py-6">
        <a className="hover:underline lg:justify-center flex gap-4 flex-wrap" href={link} target="_blank" rel="noreferrer">
          <p>{id}:</p>
          <p>{outlineName}</p>
          <p>{date}</p>
          <p>{Japanese ? "ファイルを見る" : "Click here to download"}</p>
        </a>
      </div>
    </>
  );
};

export default SinglePDF;
