export const motionParametr = (duration = 0.4, delay = 0.6) => {
  return {
  initial: { y: 20, opacity: 0, filter: 'blur(1vw)' },
  animate: { y: 0, opacity: 1, filter: 'blur(0)' },
  exit: { y: -20, opacity: 0, filter: 'blur(1vw)' },
  transition: {
    duration,
    delay,
  },
}};

//       initial={{ y: 10, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       exit={{ y: -10, opacity: 0 }}
//       transition={{ duration: 0.35 }}