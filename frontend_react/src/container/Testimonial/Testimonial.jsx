import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";
import { images } from "../../constants";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Current Employer</h2>
      <div className="app__testimonial-brands app__flex">
        {
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={images.aws}
          >
            <img src={images.aws} alt="current" />
          </motion.div>
        }
      </div>

      <h2 className="head-text">Previous Employers</h2>

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
