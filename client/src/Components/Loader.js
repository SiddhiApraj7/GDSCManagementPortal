import React from 'react'
import { motion } from "framer-motion";

const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          repeatType: "mirror",
          repeat:  Infinity,
          duration: 0.5,
        },
        y: {
          repeatType: "mirror",
          repeat:  Infinity,
          duration: 0.25,
          ease: "easeOut",
        },
      },
    },
  };

function Loader() {
  return (
    <div className="mx-auto p-20">
    <motion.div
      variants = {loaderVariants}
      initial="animationOne"
      animate="animationOne"
      className="w-3 h-3 bg-[#386cdb] rounded-full "
    >
    </motion.div>
    </div>
  )
}

export default Loader