import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import './ProductCard.scss';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export const ProductCard = ({ title, link, image, id }) => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: `#product-card-${id}`,
        start: 'top center',
        end: 'bottom top',
        scrub: 0.2,
      }
    })
    .to(`#product-card__title-${id}`, {
      yPercent: gsap.utils.random(-150, -100),
    })
  }, [])

  return (
    <div className="product-card" id={`product-card-${id}`}>
      <Link to={`products/${link}/`} className={`product-card__link`} >
        <div
          className="product-card__main-image" 
          style={{ backgroundImage: `url(${image})` }}
        />
      </Link>
      
      <motion.h1 className={`product-card__title big-text`} id={`product-card__title-${id}`}>
        {title}
      </motion.h1>
    </div>
  );
};