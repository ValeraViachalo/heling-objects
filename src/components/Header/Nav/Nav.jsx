import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import { height, opacity } from "../../../helpers/anim";
import "./Nav.scss";
import classNames from "classnames";
import { getNavigationLinks } from "../../../helpers/getProducts";

function handleClasses(path, href) {
  return classNames({
    'nav__link--active': (path === href)
  });
}

export const Nav = ({ isActive, setIsActive }) => {
  const [links, setLinks] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  
  const location = useLocation();
  const { pathname } = location;
  const productName = pathname.split('/')[2];

  useEffect(() => {
    getNavigationLinks().then(setLinks);
  }, [])
  
  return (
    <motion.div
      className="nav"
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="nav__content">
        <div className="container">
          <Link
              to="/"
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={`nav__link ${handleClasses(pathname, '/')}`}
            >
              Home
            </Link>
          {links && links.map((curLink, index) => (
            <>
            <Link
              key={`link_${index}`}
              to={`products/${curLink.title}/`}
              onClick={() => {
                setIsActive(!isActive);
              }}
              onMouseEnter={() => setHoveredProduct(curLink.photo)}
              onMouseLeave={() => setHoveredProduct(null)}
              className={`nav__link ${handleClasses(productName, curLink.title)}`}
            >
              {curLink.title}
            </Link>
          </>
          ))}
        </div>

        <div className="nav__image-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              className="nav__image"
              variants={opacity}
              key={hoveredProduct}
              initial="initial"
              animate={hoveredProduct ? "open" : "closed"}
              style={{ backgroundImage: `url(/${hoveredProduct})` }}
            />
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
