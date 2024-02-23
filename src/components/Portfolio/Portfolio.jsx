import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`${css.heading} flexCenter`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              {" "}
              Perfect Soluion for Digital difference
            </p>
          </div>

          <span className="secondaryText">Explore more</span>
        </div>

        <div className={`flexCenter ${css.portfolios} `}>
          <div className={` ${css.portfolio}`}>
            <a>
              <motion.img
                variants={fadeIn("up", "tween", 0.5, 0.6)}
                src="./port1.png"
                alt="project"
              />
            </a>
          </div>
          <div className={` ${css.portfolio}`}>
            <a>
              <motion.img
                variants={fadeIn("up", "tween", 0.7, 0.6)}
                src="./port2.png"
                alt="project"
              />
            </a>
          </div>
          <div className={` ${css.portfolio}`}>
            <a>
              <motion.img
                variants={fadeIn("up", "tween", 0.9, 0.6)}
                src="./port3.jpg"
                alt="project"
              />
            </a>
          </div>

          <div className={` ${css.portfolio}`}>
            <a href="https://sirobeddstudio.com">
              <motion.img
                variants={fadeIn("up", "tween", 1.1, 0.6)}
                src="./port4.png"
                alt="project"
                className="imaging"
              />
            </a>
          </div>

          <div className={` ${css.portfolio}`}>
            <a>
              <motion.img
                variants={fadeIn("up", "tween", 1.3, 0.6)}
                src="./port5.jpg"
                alt="project"
              />
            </a>
          </div>
          <div className={` ${css.portfolio}`}>
            <a>
              <motion.img
                variants={fadeIn("up", "tween", 1.3, 0.6)}
                src="./noteBookApp.png"
                alt="sirobeddstudios"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
