import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
const Footer = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={`${css.left}`}>
          <span className="primaryText">
            Let's make something
            <br /> amazing together
          </span>
          <span className="primaryText">
            Start by <a href="mailto:olaoluafolami@gmail.com">saying hi</a>
          </span>
        </div>
        <div className={`${css.right}`}>
          <div className={`${css.info}`}>
            <span className="secondaryText">Information</span>
            <p>18, Gbemisola street, Allen avenue, Ikeja, Lagos</p>
          </div>
          <div className={`${css.menu}`}>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
