import React from "react";

import Details from "./Details";

interface Props {
  details: {
    detailsTitle: string;
    detailsTitle2: string;
    detailsTitle3: string;
    detailsParagraph: string;
    detailsParagraph2: string;
    detailsParagraph3: string;
  }[];
}

const DetailsSection: React.FC<Props> = ({ details }) => {
  return (
    <>
      <section className="lg:flex">
        {details.map((detail) => (
          <>
            <Details
              detailsTitle={detail.detailsTitle}
              detailsParagraph={detail.detailsParagraph}
            />
            <Details
              detailsTitle={detail.detailsTitle2}
              detailsParagraph={detail.detailsParagraph2}
            />
            <Details
              detailsTitle={detail.detailsTitle3}
              detailsParagraph={detail.detailsParagraph3}
            />
          </>
        ))}
      </section>
    </>
  );
};

export default DetailsSection;
