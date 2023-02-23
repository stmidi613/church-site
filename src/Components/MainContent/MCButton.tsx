import React, { useContext } from "react";

import Button from "../Buttons/Button";

import { Link } from "react-router-dom";
import { AppContext } from "../../AppState/AppState";

const MCButton = () => {
  const { Japanese } = useContext(AppContext);

  return (
    <div className="bg-lightgray grid place-content-center pb-8">
      <Link to="BibleSupport">
        <Button buttonText={Japanese ? "聖書サポート" : "Study Guides"} />
      </Link>
    </div>
  );
};

export default MCButton;
