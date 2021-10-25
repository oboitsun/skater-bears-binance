import React from "react";
import FaqItem from "./FaqItem";

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
    <div id="faq" className="bg-black px-10 py-14  overflow-hidden relative">
      <p className="text-white text-center pb-10 uppercase font-extrabold text-2xl lg:text-[32px] xl:text-[48px] relative z-[1]">
        faq
      </p>
      <div className="flex flex-col lg:grid grid-cols-2 gap-x-5 auto-rows-auto flex-wrap  relative z-[1] max-w-864 xl:max-w-1080 mx-auto">
        <div className="h-px bg-lghtGray w-full  opacity-50 flex-shrink-0"></div>
        <div className="hidden  lg:block h-px bg-lghtGray w-full opacity-50 flex-shrink-0"></div>
        {faqs.map((f, i) => (
          <FaqItem key={i} {...f} />
        ))}
      </div>

      <div className="absolute w-full h-full top-0 left-0">
        <img
          className="w-full h-full object-cover"
          src="/imgs/faq.png"
          alt="hero section"
        />
      </div>
    </div>
  );
}
