import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import "../Form/Form.css";

interface Props {
  request: string;
}
const Form: React.FC<Props> = ({ request }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form: string | any = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i62c75x",
        "contact_form",
        form.current,
        "KWksnCjkJ-zXZFkh_"
      )
      .then(
        (result) => {
          alert(result.text + "! Thank you for contacting us.  We have received your message.");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">氏名（ニックナームはよろしいです）</label>
          <input
            aria-required
            type="text"
            id="name"
            name="user-name"
            placeholder="本田・勇気"
            value={formData.name}
            onChange={(e) =>
              console.log(setFormData({ ...formData, name: e.target.value }))
            }
          />
          <label htmlFor="email">電子メール</label>
          <input
            aria-required
            type="email"
            id="email"
            name="user_email"
            placeholder="yuukihonda123@gmail.com"
            value={formData.email}
            onChange={(e) =>
              console.log(setFormData({ ...formData, email: e.target.value }))
            }
          />
          <label htmlFor="message">{request}</label>
          <textarea
            aria-required
            name="message"
            placeholder="メッセージを書いてください。"
            value={formData.message}
            onChange={(e) =>
              console.log(setFormData({ ...formData, message: e.target.value }))
            }
          />
          <input
            className="transition hover:ease-in-out duration-500 text-xl md:text-xl lg:text-2xl mt-2 md:mt-4 text-darkgold bg-black rounded border-[1px] hover:bg-gray hover:text-gold"
            type="submit"
          />
        </fieldset>
      </form>
    </>
  );
};

export default Form;
