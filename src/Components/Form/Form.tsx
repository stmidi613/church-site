import React from "react";

import '../Form/Form.css'

const Form = () => {
  return (
    <>
      <form>
        <fieldset>
          <label htmlFor="name">氏名（ニックナームはよろしいです）</label>
          <input type="text" id="name" name="name" placeholder="本田・勇気" />
          <label htmlFor="email">電子メール</label>
          <input type="email" id="email" name="email" placeholder="yuukihonda123@gmail.com" />
          <label htmlFor="message">メッセージ</label>
          <textarea
            name="message"
            placeholder="メッセージを書いてください。"
          ></textarea>
          <input className="transition hover:ease-in-out duration-500 text-xl md:text-xl lg:text-2xl mt-2 md:mt-4 text-darkgold bg-black rounded border-[1px] hover:bg-gray hover:text-gold" type="submit" />
        </fieldset>
      </form>
    </>
  );
};

export default Form;
