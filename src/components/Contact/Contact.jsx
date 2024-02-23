import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import css from "./Contact.module.scss";
import { slideIn, staggerContainer } from "../../utils/motion";

const Contact = () => {
  const [toSendForm, setToSendForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const form = useRef(toSendForm);
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    setToSendForm({ ...toSendForm, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j0hzjbt",
        "template_2n5b1nr",
        form.current,
        "ZEAr9liHdr1Uf8Oz3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setToSendForm({
            user_name: "",
            user_email: "",
            message: "",
          });
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className={` ${css.wrapper}`}
    >
      <a className="anchor" id="contact"></a>
      <motion.div
        variants={slideIn("up", "tween", 0.5, 1.4)}
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={` ${css.contacts}`}>
          <div className={`${css.left}`}>
            <span className="primaryText">Get in touch</span>
            <span className="secondaryText">Contact me</span>
          </div>
          <div className={`${css.right}`}>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                value={toSendForm.user_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="user_email"
                placeholder="Email"
                value={toSendForm.user_email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                value={toSendForm.message}
                onChange={handleChange}
              />
              <button type="submit">Send</button>
              <span>{done && "Thanks for contacting me!"}</span>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
