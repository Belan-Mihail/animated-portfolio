import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      {/* add as a prop inside ToggleButton */}
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;

//6 create toggleButton directiona and jsx
//7 create links direction and components - add templates functions
//8 create open and close variants (8-24) and states (26, 34) - go to ToggleButton
//10 add animate condition (29) and add vatiants to children element (30) - go to links

