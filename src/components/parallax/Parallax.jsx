import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;

//19 add base html and styles (17-29)
//20 import useScroll  and useTransform (3) and add scrollYProgress const (8-11)
// and add const yText and const yBg. in this const we use scrollYProgress const and framer doc
// + useRef(6) and choose ref sections(19)
// also (27,34,40)
//21 create services directory and files and go to services.jsx

// We can use useTransform to create a new motion value called opacity. By defining an input range and an output range we can say, "when x is 0, opacity should be 1. When x is 100, opacity should be 0."

// const opacity = useTransform(
//   x,
//   // Map x from these values:
//   [0, 100],
//   // Into these values:
//   [1, 0]
// )
