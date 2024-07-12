// import * as React from "react";
// import { motion } from "framer-motion";
// import { MenuItem } from "./MenuItem";

// const variants = {
//   open: {
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 }
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 }
//   }
// };

// export const Navigation = () => (
//   <motion.ul variants={variants}>
//     {itemIds.map(i => (
//       <MenuItem i={i} key={i} />
//     ))}
//   </motion.ul>
// );

// const itemIds = [0, 1, 2, 3, 4];


import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const routes = [
  {
    name: "Home",
    href: "#",
    isActive: true,
    // path: "/doctors",
    // display: "Find a Doctor"
  },
  { name: "About us", href: "/About", isActive: true },
  { name: "properties", href: "/properties", isActive: true },
  { name: "Contact", href: "/Contact", isActive: true },
  // { name: "My Account", href: "/account", isActive: true },
  // { name: "profile", href: "/profile", isActive: true },
  { name: "DataFetch", href: "/DataFetch", isActive: true },
  { name: "prac", href: "/prac", isActive: true },
  // { name: "account/:id", href: "/account/:id", isActive: true },
  // { name: "/properties:id", href: "#", isActive: false },
];

export const Navigation = () => (
  <motion.ul variants={variants} className="px-10 py-28 absolute top-100px w-230px ">
    {routes.map((route, index) => (
      <MenuItem key={index}  i={index} name={route.name} href={route.href}  />
    ))}
  </motion.ul>
);

