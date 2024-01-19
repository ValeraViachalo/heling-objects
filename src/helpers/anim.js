export const height = {
  initial: {
    height: 0,
    left: 0,
    rigth: 0,
  },
  enter: {
    height: "100lvh",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    height: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export const opacity = (product) => {
  return {
    initial: {
      opacity: product ? 1 : 0,
      filter: "blur(1vw)",
      transition: { duration: 0.35 },
    },
    open: {
      opacity: 1,
      filter: "blur(0)",
      transition: { duration: 0.35 },
    },
    closed: {
      opacity: product ? 1 : 0,
      filter: product ? "blur(0)" : "blur(0.5vw)",
      transition: { duration: 0.35 },
    },
  };
};
