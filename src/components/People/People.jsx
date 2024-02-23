import React from "react";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./People.module.scss";
import Slider from "react-slick";
import { comments, sliderSettings } from "../../utils/data";
const People = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="testimonial"></a>
      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Testimonials</span>
          <p style={{ marginTop: "2rem" }}>Feedback from satisfied clients</p>
        </div>

        {/* carousel */}

        <div className={`ypaddings ${css.comments}`}>
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              {
                return (
                  <div className={`flexCenter ${css.comment}`} key={i}>
                    <img src={comment.img} />
                    <p>{comment.comment}</p>
                    <div className={css.line}></div>
                    <div className={css.bio}>
                      <span>{comment.name}</span>
                      <span>{comment.post}</span>
                    </div>
                  </div>
                );
              }
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default People;
