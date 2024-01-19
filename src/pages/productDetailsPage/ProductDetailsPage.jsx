import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import "./ProductDetailsPage.scss";
import { motionParametr } from "../../helpers/motionParametr";
import { useEffect, useState } from "react";
import { getProductsDetails } from "../../helpers/getProducts";
import { Footer } from "../../components/Footer/Footer";
import { useDocumentTitle } from "../../components/documentTitle/documentTitle";

export const ProductDetailsPage = () => {
  const location = useLocation();
  const { pathname } = location;
  const productName = pathname.split('/')[2];
  const [productDetails, setProductDetails] = useState(null);


  useEffect(() => {
    getProductsDetails(productName).then((p) =>  {
      setProductDetails(p[0]);
    });
  }, [productName])
  
  useDocumentTitle(productDetails ?`${productDetails.name} - HELING OBJECTS`: document.title);

  return (
    <motion.section
      className="product-details"
      {...motionParametr()}
    >
      {productDetails && (
        <>
          <div className="product-details__top">
            <h1 className="big-text">
              {productDetails.name}
            </h1>
            <h2>
              {productDetails.category}
            </h2>
            <div
              style={{ backgroundImage: `url(${productDetails.thirdImage.asset.url})` }}
              className="product-details__image product-details__image-1"
            />
            <div
              style={{ backgroundImage: `url(${productDetails.secondaryImage.asset.url})` }}
              className="product-details__image product-details__image-2"
            />
            <div
              style={{ backgroundImage: `url(${productDetails.mainImage.asset.url})` }}
              className="product-details__main-image"
            />
          </div>
          <div className="product-details__bottom">
            <p>
              {productDetails.author}
            </p>
            <p>
              {productDetails.aboutProduct}
            </p>
          </div>
        </>
      )}

      <Footer />
    </motion.section>
  );
};
