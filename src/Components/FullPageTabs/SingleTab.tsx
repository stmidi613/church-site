import React from "react";

interface Props {
  setTabNumber: any;
  number: number;
  tabNumber: number;
  tabName: string;
}

const SingleTab: React.FC<Props> = ({
  setTabNumber,
  tabNumber,
  number,
  tabName,
}) => {
  return (
    <>
      <button className={tabNumber == number ? "tablink tablink-active" : "tablink"} onClick={() => setTabNumber(number)}>
        {tabName}
      </button>
    </>
  );
};

export default SingleTab;
