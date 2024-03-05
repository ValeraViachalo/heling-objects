import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./ProductDetailsPage.scss";
import { motionParametr } from "../../helpers/motionParametr";
import { useEffect, useState } from "react";
import { getProducts, getProductsDetails } from "../../helpers/getProducts";
import { useDocumentTitle } from "../../components/documentTitle/documentTitle";

function getLinkToNextProduct(products, productDetails) {
  let foundCurrentProduct = false;

  if (products && productDetails) {
    const nextProduct = products.find((product) => {
      if (foundCurrentProduct) return true;
      if (product.slug && product.slug.current === productDetails.slug.current)
        foundCurrentProduct = true;
      return false;
    });

    return nextProduct ? nextProduct.slug.current : null;
  }

  return null;
}

export const ProductDetailsPage = () => {
  const location = useLocation();
  const { pathname } = location;
  const productName = pathname.split("/")[2];
  const [productDetails, setProductDetails] = useState(null);
  const [products, setProducts] = useState([]);
  const [nextProduct, setNextProduct] = useState(null);

  const navigate = useNavigate();

  const handleToNextPage = () => {
    if(productDetails && nextProduct) {
      navigate(`/products/${nextProduct}/`);
      console.log(nextProduct);
    }
  }

  useEffect(() => {
    getProductsDetails(productName).then((p) => {
      setProductDetails(p[0]);
    });
    getProducts().then(setProducts);
  }, [productName]);
  
  // useGSAP(() => {
  //   window.scrollTo(0, 0);

  //   if(products && productDetails) {
  //     setNextProduct(getLinkToNextProduct(products, productDetails))
  //     gsap.registerPlugin(ScrollTrigger);

  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.link-to-next',
  //       start: 'bottom bottom',
  //       end: 'bottom bottom',
  //       onEnter: () => handleToNextPage(),
  //       markers: 1
  //     }
  //   })
  //   }
  // }, [products, productDetails, location])

  useDocumentTitle(
    productDetails ? `${productDetails.name} - HELING OBJECTS` : document.title
  );

  return (
    <motion.section className="product-details" {...motionParametr()}>
      {productDetails && (
        <>
          <div className="product-details__top">
            <h1 className="big-text">{productDetails.name}</h1>
            <h2>{productDetails.category}</h2>
            <div
              style={{
                backgroundImage: `url(${productDetails.thirdImage.asset.url})`,
              }}
              className="product-details__image product-details__image-1"
            />
            <div
              style={{
                backgroundImage: `url(${productDetails.secondaryImage.asset.url})`,
              }}
              className="product-details__image product-details__image-2"
            />
            <div
              style={{
                backgroundImage: `url(${productDetails.mainImage.asset.url})`,
              }}
              className="product-details__main-image"
            />
          </div>
          <div className="product-details__bottom">
            <p>{productDetails.author}</p>
            <p>{productDetails.aboutProduct}</p>
          </div>

          <Link className="link-to-next" to={`/products/${nextProduct}/`} style={{ fontSize: "16vw", textAlign: "center" }}>
            {nextProduct}
          </Link>
        </>
      )}
    </motion.section>
  );
};
