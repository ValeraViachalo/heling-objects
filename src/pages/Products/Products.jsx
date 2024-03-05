import { motion } from "framer-motion";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { motionParametr } from "../../helpers/motionParametr";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../../helpers/getProducts";
import { Footer } from "../../components/Footer/Footer";

import './Products.scss';
import { useDocumentTitle } from "../../components/documentTitle/documentTitle";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useDocumentTitle('Products - HELING OBJECTS');
  
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <motion.section
      {...motionParametr()}
      className="products"
    >

        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={index}
            title={product.name}
            image={product.mainImage.asset.url}
            link={product.slug.current}
          />
        ))}
      <Footer />
    </motion.section>
  );
};
