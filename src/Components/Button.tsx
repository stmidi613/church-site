import React from "react";

interface Props{
    buttonText: string;
}
const Button: React.FC<Props> = ({buttonText}) => {
  return (
    <button className="transition hover:ease-in-out duration-500 text-xl md:text-xl lg:text-2xl mt-2 md:mt-4 p-3 text-darkgold bg-black rounded border-[1px] hover:bg-gray hover:text-gold">
      {buttonText}
    </button>
  );
};

export default Button;
