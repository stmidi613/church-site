import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { AppContext } from "../../../AppState/AppState";

interface Props {
  date: string;
  name: string;
  fullDate: string;
}

const SingleEvent: React.FC<Props> = ({ date, name, fullDate }) => {
  const { Japanese } = useContext(AppContext);
  return (
    <div className="lg:border-r-2 border-black border-opacity-70">
      <h3 className="text-xl py-8">{date}</h3>
      <h3 className="font-bold text-2xl pb-2">{name}</h3>
      <h4>{fullDate}</h4>
      <div className="p-4">
        <Link to="/Events">
          <button className="transition hover:ease-in-out duration-500 hover:text-black hover:bg-darkgold p-4 rounded">
            {Japanese ? "情報" : "Information"} &gt;&gt;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleEvent;
