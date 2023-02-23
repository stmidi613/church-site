import React, { useState, useRef, useContext } from "react";

import { AppContext } from "../../AppState/AppState";

import emailjs from "@emailjs/browser";

import "../Form/Form.css";

interface Props {
  request: string;
}
const Form: React.FC<Props> = ({ request }) => {
  const { Japanese } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const labels: { name: string; namePlaceholder: string; email: string; message: string; } = Japanese
    ? {
        name: "氏名（ニックナームはよろしいです）",
        namePlaceholder: "本田・勇気",
        email: "電子メール",
        message: "メッセージを書いてください",
      }
    : { 
        name: "Full Name (Nickname or Alias)", 
        namePlaceholder: "John Doe",
        email: "E-mail",
        message: "Please write your message here."
      };

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
          alert(
            result.text +
              "! Thank you for contacting us.  We have received your message."
          );
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
          <label htmlFor="name">{labels.name}</label>
          <input
            aria-required
            type="text"
            id="name"
            name="user-name"
            placeholder={labels.namePlaceholder}
            maxLength={50}
            value={formData.name}
            onChange={(e) =>
              console.log(setFormData({ ...formData, name: e.target.value }))
            }
          />
          <label htmlFor="email">{labels.email}</label>
          <input
            aria-required
            type="email"
            id="email"
            name="user_email"
            placeholder="yuukihonda123@gmail.com"
            maxLength={50}
            value={formData.email}
            onChange={(e) =>
              console.log(setFormData({ ...formData, email: e.target.value }))
            }
          />
          <label htmlFor="message">{request}</label>
          <textarea
            aria-required
            name="message"
            placeholder={labels.message}
            maxLength={300}
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
