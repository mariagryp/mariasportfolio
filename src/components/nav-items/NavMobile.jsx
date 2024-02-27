import React, { useState } from "react";
import { Link } from "react-router-dom";

//import  navigation data from data.js
import { navigation } from "../../data";

//import close/open icons from heroicons
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

//import  framer motion
import { motion } from "framer-motion";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  //framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: 1,
    transition: {
      delay: 0.1,
    },
  };

  return (
    <nav className="relative">
      {/* menu icon */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <Bars3BottomRightIcon className="w-8 h-8 dark:text-white text-primary" />
      </div>

      {/* circle menu*/}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      ></motion.div>

      {/* menu */}
      <motion.ul
        variants={ulVariants}
        initial="visible"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8 text-light"
        >
          <XMarkIcon className="w-8 h-8" />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className="mb-8 text-white">
              <Link
                to={item.href}
                onClick={() => setIsOpen(false)}
                smooth={true}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
