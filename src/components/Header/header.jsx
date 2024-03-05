import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./header.scss";
import { Nav } from "./Nav/Nav";
import classNames from "classnames";

export const Header = ({ isActive, setIsActive }) => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <header className="header">
      <div className="navigation__list">
        <NavLink
          to="/"
          onClick={() => {
            setIsActive(false);
          }}
          className={({ isActive }) =>
            classNames(`header__link`, "body-text-2", {
              "header__link--active": isActive,
            })
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          onClick={() => {
            setIsActive(false);
          }}
          className={({ isActive }) =>
            classNames(`header__link`, "body-text-2", {
              "header__link--active": isActive,
            })
          }
        >
          Products
        </NavLink>
      </div>

      <Link to="/" className="header__logo body-text-2">
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
          <div className="perspectiveText body-text-3">
            <p>Catalog</p>
          </div>
        </div>
        <div
          className="el"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className="perspectiveText body-text-3">
            <p>Close</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
