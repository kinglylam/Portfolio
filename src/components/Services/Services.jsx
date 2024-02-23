import React from "react";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import css from "./Services.module.scss";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <a className="anchor" id="services"></a>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.left}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.3)}
                className={css.exp}
                key={i}
              >
                <div className="flexCenter" style={{ background: exp.bg }}>
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <span className="secondaryText">{exp.projects} Projects</span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className={css.right}>
          <motion.span
            variants={fadeIn("left", "tween", 0.5, 1)}
            className="primaryText"
          >
            Services I Render
          </motion.span>
          <br />
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <motion.span
                variants={fadeIn("left", "tween", 0.5, 1)}
                className="secondaryText"
                key={i}
              >
                {paragraph}
              </motion.span>
            );
          })}
          <motion.div
            variants={fadeIn("right", "tween", 0.5, 1)}
            className={`flexCenter ${css.tools}`}
          >
            <AiFillHtml5 />
            <DiCss3 />
            <DiJavascript1 />
            <FaReact />
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={`flexCenter ${css.tools}`}
          >
            <FaNodeJs />
            <TbBrandReactNative />
            <SiRedux />
            <SiMongodb />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
