import React from "react";

interface Props {
  setTabNumber: any;
  number: number;
  tabName: string;
}

const SingleTab: React.FC<Props> = ({
  setTabNumber,
  number,
  tabName,
}) => {
  return (
    <>
      <button className="tablink" onClick={() => setTabNumber(number)}>
        {tabName}
      </button>
    </>
  );
};

export default SingleTab;
