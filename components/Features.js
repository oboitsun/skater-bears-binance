import React from "react";
import { motion } from "framer-motion";
const features = [
  { h: `Buy & sell bears`, p: "with our community", icon: "/imgs/buy.svg" },
  { h: `Create collections`, p: "&earn rewards", icon: "/imgs/cubes.svg" },
  { h: `Breed adorable bears`, p: " & unlock rare traits", icon: "/imgs/star.svg" },
  { h: `Breed adorable bears`, p: " & unlock rare traits", icon: "/imgs/shield.svg" },
];
export default function Features() {
  const feauture_block = {
    show: {
      y: 0,
      transition: {
        duration: 1,
        transitionDelay: 1.5,
      },
    },
    hidden: {
      y: 400,
    },
  };
  return (
    <motion.div
      variants={feauture_block}
      initial="hidden"
      animate="show"
      className="w-full border-white border rounded-[10px] py-7 mt-10 lg:mt-0"
    >
      <div className=" grid grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-[30px] max-w-max mx-auto">
        {features.map((feat, i) => (
          <div
            key={i}
            className="flex items-center text-xs text-white hover:scale-105 transition-all group  "
          >
            <img src={feat.icon} alt="icon" />
            <div className="flex flex-col pl-5 lg:pl-2.5">
              <p className="font-bold group-hover:text-crmsn">{feat.h}</p>
              <p className="font-normal group-hover:text-crmsn">{feat.p}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
