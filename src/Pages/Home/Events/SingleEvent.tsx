import React from "react";
import { Link } from "react-router-dom";

interface Props {
  date: string;
  name: string;
  fullDate: string;
}

const SingleEvent: React.FC<Props> = ({ date, name, fullDate }) => {
  return (
    <div className="lg:w-1/3 lg:border-r-2 border-black border-opacity-70">
      <h3 className="text-xl py-8">{date}</h3>
      <h3 className="font-bold text-2xl pb-2">{name}</h3>
      <h4>{fullDate}</h4>
      <div className="p-4">
        <Link to="/Events">
          <button className="transition hover:ease-in-out duration-500 hover:text-black hover:bg-darkgold p-4 rounded">
            情報 &gt;&gt;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleEvent;
