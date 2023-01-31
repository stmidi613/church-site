import React from "react";

import Details from "./Details";

interface Props {
  detailsTitle: string;
  detailsTitle2: string;
  detailsTitle3: string;
  detailsParagraph: string;
  detailsParagraph2: string;
  detailsParagraph3: string;
}

const DetailsSection: React.FC<Props> = ({
  detailsTitle,
  detailsTitle2,
  detailsTitle3,
  detailsParagraph,
  detailsParagraph2,
  detailsParagraph3,
}) => {
  return (
    <>
      <section className="lg:flex">
        <Details
          detailsTitle={detailsTitle}
          detailsParagraph={detailsParagraph}
        />
        <Details
          detailsTitle={detailsTitle2}
          detailsParagraph={detailsParagraph2}
        />
        <Details
          detailsTitle={detailsTitle3}
          detailsParagraph={detailsParagraph3}
        />
      </section>
    </>
  );
};

export default DetailsSection;
