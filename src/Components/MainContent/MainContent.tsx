import React, { ReactElement } from "react";

import Details from "../Details/Details";
import BibleVerse from "../BibleVerse";

interface Props {
  image: string;
  detailsTitle: string;
  detailsParagraph: string;
  quote?: string;
  verse?: string;
  extra?: ReactElement;
}

const MainContent: React.FC<Props> = ({
  image,
  detailsTitle,
  detailsParagraph,
  quote,
  verse,
  extra,
}) => {
  return (
    <>
      <section className="bg-lightgray grid place-content-center">
        <div className="grid md:flex">
          <div className="grid place-content-center pb-8">
            <img
              className="pt-8 px-8"
              src={image}
              alt="Hands in a heart shape around the sun"
            />
          </div>
          <div>
            <Details
              detailsTitle={detailsTitle}
              detailsParagraph={detailsParagraph}
            />
            {extra}
            {quote && verse ? (
              <BibleVerse quote={quote} verse={verse} home={false} />
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
