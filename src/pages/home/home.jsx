import { motion } from "framer-motion";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { motionParametr } from "../../helpers/motionParametr";
import { useEffect, useState } from "react";
import { getProducts } from "../../helpers/getProducts";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <motion.section
      {...motionParametr()}
    >
      {products.map((product, index) => (
        <ProductCard
          key={index}
          id={index}
          title={product.name}
          image={product.mainPhoto}
          link={product.link}
        />
      ))}
      
      <Footer />
    </motion.section>
  )
};