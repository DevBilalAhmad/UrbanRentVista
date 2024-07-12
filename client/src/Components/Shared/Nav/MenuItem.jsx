import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = [
  "#FF008C",
  "#D309E1",
  "#9C1AFF",
  "#7700FF",
  "#4400FF",
  "#FF008C",
  "#D309E1",
];

export const MenuItem = ({ i, name,href }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="list-none flex flex-col mb-10  cursor-pointer  "
    >
      <div className="flex gap-2">
        <div className="icon-placeholder" style={style} />
        <div className="text-placeholder">
          <Link to={href}>{name}</Link>
        </div>
      </div>
    </motion.li>
  );
};
