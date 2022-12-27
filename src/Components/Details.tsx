import React from "react";

interface Props {
  detailsTitle: string;
  detailsParagraph: string;
  backgroundColor?: string;
}

const Details: React.FC<Props> = ({ detailsTitle, detailsParagraph, backgroundColor }) => {
  return (
    <>
      <section aria-labelledby="details" className={`text-center text-gray ${backgroundColor}`}>
        <h3 className="p-8 text-lg">{detailsTitle}</h3>
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
