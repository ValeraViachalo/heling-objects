import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import classNames from "classnames";

import { height, opacity } from "../../../helpers/anim";
import "./Nav.scss";
import { getProducts, getProductsDetails } from "../../../helpers/getProducts";

function handleClasses(path, href) {
  return classNames({
    'nav__link--active': (path === href)
  });
}

export const Nav = ({ isActive, setIsActive }) => {
  const [links, setLinks] = useState(null);
  const [product, setProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const isDesktop = !isMobile || isBrowser;
  
  const location = useLocation();
  const { pathname } = location;
  const productName = pathname.split('/')[2];

  const handleImage = () => {
    if(product && !hoveredProduct) {
      return product[0].mainImage.asset.url;
    }

    return hoveredProduct;
  }

  const setterImages = (image) => {
    if(isDesktop) {
      setHoveredProduct(image)
    }
  }

  useEffect(() => {
    getProducts().then(setLinks);
    
    if(productName) {
      getProductsDetails(productName).then(setProduct);
      // setHoveredProduct(product.mainImage.asset.url)
    }
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
              key={`l${index}`}
              to={`products/${curLink.slug.current}/`}
              onClick={() => {
                setIsActive(!isActive);
              }}
              onMouseEnter={() => setterImages(curLink.mainImage.asset.url)}
              onMouseLeave={() => setterImages(null)}
              className={`nav__link ${handleClasses(productName, curLink.slug.current)}`}
            >
              {curLink.name}
            </Link>
          </>
          ))}
        </div>

        <div className="nav__image-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              className="nav__image"
              variants={opacity(product)}
              key={hoveredProduct}
              initial={"initial"}
              animate={hoveredProduct ? "open" : "closed"}
              style={{ backgroundImage: `url(${handleImage()})` }}
            />
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
