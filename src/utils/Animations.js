export const modalVariants = {
    
  initial: {
    opactity: 0,
    x: "-100vw",
  },
  final: {
    opactity: 1,
    x: 0,
    transition: {duration: 0.4}
  },
  // transition: {
  //   type: "spring",
  //   stiffness: 0,
  //   duration: 0.9,
  // },
  exit: {
    opactity: 0,
    x: "-100vw",
    transition: {duration: 0.2},
  }
};
