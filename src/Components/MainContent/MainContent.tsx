import React, { ReactElement } from "react";

import Details from "../Details/Details";
import BibleVerse from "../BibleVerse";
import Button from "../Button";

import { Link } from "react-router-dom";

interface Props {
  button: boolean;
  image: ReactElement;
  detailsTitle: string;
  detailsParagraph: string;
  quote?: string;
  verse?: string;
}

const MainContent: React.FC<Props> = ({
  button,
  image,
  detailsTitle,
  detailsParagraph,
  quote,
  verse,
}) => {
  return (
    <>
      <section className="bg-lightgray">
        <div className={button ? "grid" : "grid md:flex"}>
          {image}
          <div>
            <Details
              detailsTitle={detailsTitle}
              detailsParagraph={detailsParagraph}
            />
            {quote && verse ? <BibleVerse quote={quote} verse={verse} home={false} /> : ""}
          </div>
          {button ? (
            <div className="bg-lightgray grid place-content-center pb-8">
              <Link to="BibleSupport">
                <Button buttonText="聖書サポート" />
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default MainContent;
