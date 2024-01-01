import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

import { motionParametr } from '../../helpers/motionParametr';
import { getProducts } from '../../helpers/getProducts';
import { Link } from 'react-router-dom';
import './ErrorPage.scss';

export const ErrorPage = () => {
  const [products, setProducts] = useState([]);
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) => {
    return start * (1 - amount) + target * amount;
  }

const animate = () => {
  xForce = lerp(xForce, 0, easing);
  yForce = lerp(yForce, 0, easing);
  if (plane1.current) {
    const childrenArray = Array.from(plane1.current.children);
    gsap.set(childrenArray.slice(0,3), {
      xPercent: `+=${xForce* 0.2}`,
      yPercent: `+=${yForce * 0.2}`
    });
    gsap.set(childrenArray.slice(3,6), {
      xPercent: `+=${xForce * 0.5}`,
      yPercent: `+=${yForce * 0.5}`,
    });
  }
  // gsap.set(plane3.current, {
  //   x: `+=${xForce * 0.25}`,
  //   y: `+=${yForce * 0.25}`,
  // });

  if (Math.abs(xForce) < 0.01) xForce = 0;
  if (Math.abs(yForce) < 0.01) yForce = 0;

  if (xForce != 0 || yForce != 0) {
    requestAnimationFrame(animate);
  } else {
    cancelAnimationFrame(requestAnimationFrameId);
    requestAnimationFrameId = null;
  }
};

  return (
    <motion.section
      {...motionParametr()}
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="error-page"
    >      
      <div ref={plane1} className="plane">
        {products.map((currProduct, index) => (
          <Link 
            to={`/products/${currProduct.link}/`}
            key={index}
            className="plane__image-wrapper"
          >
            <div style={{ backgroundImage: `url(/${currProduct.mainPhoto})` }} className="plane__image"/>
          </Link>
        ))}
      </div>

      <div className="error-page__text">
        <h1 className="error-page__text-title">
          Looks like you lost,
        </h1>
        <p className="error-page__text-main">
          So let's just go
          &nbsp;
          <Link
            to="/"
            className="error-page__text-main"
          >
            Home
          </Link>
        </p>
      </div>

      {/* <div ref={plane2} className="plane">
        {products.slice(3,6).map((currProduct, index) => (
          <Link 
            to={`products/${currProduct.link}/`}
            key={index}
            className="plane__image-wrapper"
          >
            <div style={{ backgroundImage: `url(${currProduct.mainPhoto})` }} className="plane__image"/>
          </Link>
        ))}
      </div> */}
    </motion.section>
  )
}
