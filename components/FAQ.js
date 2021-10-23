import React from "react";
import FaqItem from "./FaqItem";
import Image from "next/image";
const faqs = [
  { qstn: "How do I buy a Skater Bears?", answr: "The Answer" },
  { qstn: "What Blockhain and technology are Skater Bears on?", answr: "The Answer" },
  { qstn: "What can I do with once I get my Skaters Bears NFT?", answr: "The Answer" },
  { qstn: "How many Skater Bears caan I buy?", answr: "The Answer" },
  { qstn: "What wallet do I need to be able to connect to buy?", answr: "The Answer" },
  {
    qstn: "What are the future plans for the Skaters Bears project?",
    answr: "The Answer",
  },
];
export default function FAQ() {
  return (
    <div className="bg-black px-10 py-14  overflow-hidden relative">
      <div className="flex flex-col lg:grid grid-cols-2 gap-x-10 auto-rows-auto flex-wrap  relative z-[1]">
        <div className="h-px bg-lghtGray w-full  opacity-50 flex-shrink-0"></div>
        <div className="hidden  lg:block h-px bg-lghtGray w-full opacity-50 flex-shrink-0"></div>
        {faqs.map((f, i) => (
          <FaqItem key={i} {...f} />
        ))}
      </div>

      <div className="absolute w-full h-full top-0 left-0">
        <Image
          src="/imgs/hero-back.png"
          layout="fill"
          objectFit="cover"
          alt="hero section"
        />
      </div>
      <div className="lg:hidden absolute w-full h-full top-0 left-0 ">
        <Image src="/imgs/hero.png" layout="fill" objectFit="cover" alt="hero section" />
      </div>
    </div>
  );
}
