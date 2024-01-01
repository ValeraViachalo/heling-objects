import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./header.scss";
import { Nav } from "./Nav/Nav";

export const Header = ({isActive, setIsActive}) => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <header className="header">
      <span style={{ width: "1vw" }}/>

      <Link to="/" className="header__logo">
        HELING OBJECTS
      </Link>

      <MenuButton
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />

    {/* <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence> */}
    </header>
  );
};

const MenuButton = ({ isActive, toggleMenu }) => {
  return (
    <div className="navigation__button">
      <motion.div
        className="navigation__button_slider"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="el"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className="perspectiveText">
            <p>Menu</p>
          </div>
        </div>
        <div
          className="el"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className="perspectiveText">
            <p>Close</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

