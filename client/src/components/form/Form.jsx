import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import "./Form.css";

const Form = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rs32wst",
        "template_cixmaja",
        form.current,
        "tGq8oE5ZwW-q0QB77"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSent(true);
          setTimeout(() => {
            setIsMessageSent(false);
            form.current.reset();
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="formMain">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Your Name" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Your Email" />
        <label>Message</label>
        <textarea name="message" placeholder="Your Message" />
        <input type="submit" value="Send Message" />
      </form>

      {isMessageSent && (
        <div className="alertContainer">
          <Alert variant="outlined" severity="success">
            Message sent successfully!
          </Alert>
        </div>
      )}
    </div>
  );
};

export default Form;
