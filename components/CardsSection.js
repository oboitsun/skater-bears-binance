import React from "react";
import Button from "./Button";
import CarouselCards from "./CarouselCards";
const team = [
  {
    src: "/imgs/postcard1.png",
    name: "Bold Blueberry",
    position: "CEO",
  },
  {
    src: "/imgs/postcard2.png",
    name: "Pineapple",
    position: "Marketing",
  },
  {
    src: "/imgs/postcard3.png",
    name: "Loco Lemmon",
    position: "Developer",
  },
  {
    src: "/imgs/postcard4.png",
    name: "Funky Fig",
    position: "Developer",
  },
];
export default function CardsSection() {
  return (
    <div className="grid gap-10 px-10 lg:px-0 py-10 lg:py-[100px] lg:grid-cols-2 lg:max-w-864 mx-auto xl:max-w-1080 overflow-hidden">
      <div className="w-full place-items-center place-self-center  lg:pr-10 max-w-[375px] mx-auto">
        <CarouselCards />
      </div>
      <div className="w-full xl:text-[48px] xl:leading-[57px] text-[32px] leading-[38px] font-bold  place-self-center">
        <p className="text-black uppercase ">What is</p>
        <p className="text-crmsn uppercase">Skater Bears?</p>
        <p className="font-medium text-xs lg:text-sm lg:leading-loose lg:max-w-[372px] leading-loose pb-4 lg:py-4 xl:text-base xl:leading-loose xl:max-w-[415px]">
          Skater Bears is a game centered around breedable, and oh-so-adorable creatures
          we call Skater Bears! Each cat is one-of-a-kind and 100% owned by you; it cannot
          be replicated, taken away, or destroyed.
        </p>
        <Button type="outlined" text="Get Your Own Bear" icon={false} />
      </div>
    </div>
  );
}
