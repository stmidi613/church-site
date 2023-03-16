import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";

import SinglePDF from "./SinglePDF";

interface Props {
  tabNumber: number;
  number: number;
  title: string;
}

const SingleTabContent: React.FC<Props> = ({ tabNumber, number, title }) => {
  const {Japanese} = useContext(AppContext)

  const noFile: string = Japanese ? "申し訳ありませんが、ファイルがありません。" : "We are sorry but there are no files at this time."

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
      name: "聖書について事実",
      date: "2022/12/08",
      link: require("../../Pages/BibleSupport/PDF/TheBible.pdf"),
    },
    {
      id: 2,
      name: "聖書の本（旧約聖書）",
      date: "2022/12/15",
      link: require("../../Pages/BibleSupport/PDF/BibleBooks.pdf"),
    },
    {
      id: 3,
      name: "聖書の本（福音書）",
      date: "2023/01/05",
      link: require("../../Pages/BibleSupport/PDF/TheGospels.pdf"),
    },
    {
      id: 4,
      name: "神様の羊",
      date: "2023/01/05",
      link: require("../../Pages/BibleSupport/PDF/LambofGod.pdf"),
    },
    {
      id: 5,
      name: "神様の羊2",
      date: "2023/01/05",
      link: require("../../Pages/BibleSupport/PDF/LambofGod2.pdf"),
    },
    {
      id: 6,
      name: "新約聖書の本1",
      date: "2023/03/09",
      link: require("../../Pages/BibleSupport/PDF/NTBooks1.pdf"),
    },
    {
      id: 7,
      name: "新約聖書の本２",
      date: "2023/03/16",
      link: require("../../Pages/BibleSupport/PDF/NTBooks2.pdf"),
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
          {number === 2 ? noFile : ""}
          {number === 3 ? noFile : ""}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SingleTabContent;
