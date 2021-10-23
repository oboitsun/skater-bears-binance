import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Logo({ wide }) {
  const svg = {
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { scale: 0, opacity: 0, transition: { duration: 1 } },
  };
  const item = {
    show: { scale: 1, opacity: 1, pathLength: 0, transition: { duration: 0.3 } },
    hidden: { scale: 0, opacity: 0, pathLength: 1, transition: { duration: 1 } },
  };
  return (
    <div className="w-[93px] lg:w-[139px] xl:w-[183px]">
      <Image
        src="/imgs/logo.png"
        layout="responsive"
        width={183}
        height={71}
        alt="SNEAKER BEARS"
      />
    </div>
  );
}
