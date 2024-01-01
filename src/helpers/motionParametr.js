export const motionParametr = (duration = 0.4, delay = 0.4) => {
  return {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
  transition: {
    duration,
    delay,
  },
}};

//       initial={{ y: 10, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       exit={{ y: -10, opacity: 0 }}
//       transition={{ duration: 0.35 }}