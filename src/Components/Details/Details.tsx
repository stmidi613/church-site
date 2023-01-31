import React from "react";

interface Props {
  detailsTitle: string;
  detailsParagraph: string;
}

const Details: React.FC<Props> = ({ detailsTitle, detailsParagraph }) => {
  return (
    <>
      <section aria-labelledby="details" className="text-center text-gray">
        <h3 className="p-8 text-xl">{detailsTitle}</h3>
        <div className="w-full grid place-content-center">
          <div className="w-[25vw] text-sm border-gray border-t-2"></div>
        </div>
        <div className="w-full grid place-content-center">
          <p className="text-center max-w-2xl p-8">
            {detailsParagraph}
          </p>
        </div>
      </section>
    </>
  );
};

export default Details;
