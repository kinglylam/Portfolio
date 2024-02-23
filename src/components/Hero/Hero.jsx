import React from "react";
import css from "./Hero.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.25 }}
        className={`innerwidth ${css.container}`}
      >
        <div className={css.upperDiv}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There, <br /> I'm Olaolu
          </motion.span>
          <motion.span
            variants={fadeIn("right", "tween", 0.4, 1)}
            className="secondaryText"
          >
            I am a Software Engineer
          </motion.span>
        </div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.icons}
        >
          <a
            href="https://github.com/kinglylam"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <AiFillGithub size={"2em"} width="4rem" />
          </a>
          <a
            href="https://linkedin.com/in/olaolu-adigun-949647224"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <AiFillLinkedin size={"2em"} width="4rem" />
          </a>
          <a
            href="https://twitter.com/olaoluafolami"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <AiFillTwitterSquare size={"2em"} width="4rem" />
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.4)}
            src="./OOOLA-1.png"
            alt=""
          />
        </motion.div>
        <a className={css.email} href="mailto:olaoluafolami@gmail.com">
          olaoluafolami@gmail
        </a>

        <div className={css.lowerDiv}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">3+</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED DEVELOPER</span>
            <span>SOFTWARE DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
