import React from "react";

import Button from "../Button";

import { Link } from "react-router-dom";

const MCButton = () => {
  return (
    <div className="bg-lightgray grid place-content-center pb-8">
      <Link to="BibleSupport">
        <Button buttonText="聖書サポート" />
      </Link>
    </div>
  );
};

export default MCButton;
