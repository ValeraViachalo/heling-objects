import { useLocation, useRoutes } from "react-router-dom";
import "./styles/global.scss";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import React, { useEffect, useRef, useState } from "react";

import { Home } from "./pages/home/home";
import { ProductDetailsPage } from "./pages/productDetailsPage/ProductDetailsPage";
import { Header } from "./components/Header/header";
import { Nav } from "./components/Header/Nav/Nav";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

function App() {
  const [isActive, setIsActive] = useState(false);

  const element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          children: [
            {
              path: ":productsId?",
              element: <ProductDetailsPage />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 3,
      inifinite: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="app">
      <Header isActive={isActive} setIsActive={setIsActive} />

      <AnimatePresence mode="wait">
        {isActive && <Nav isActive={isActive} setIsActive={setIsActive} />}
      </AnimatePresence>
      <section className="app__section">
        <AnimatePresence mode="wait">
          {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </section>
    </div>
  );
}

export default App;
