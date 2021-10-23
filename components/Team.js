import React from "react";
import Image from "next/image";
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
export default function Team() {
  return (
    <div id="team" className="bg-lghtGray py-14 lg:py-[100px] xl:py-[120px]">
      <div className="px-10 max-w-864 xl:max-w-1080 lg:px-0 mx-auto">
        <p className="text-crmsn font-extrabold uppercase text-4xl text-center">team</p>
        <p className="text-black font-medium   text-xs leading-loose text-center">
          {` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s`}
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-6 mt-6 lg:grid-cols-4 lg:grid-rows-1 lg:mt-10">
          {team.map((t, i) => (
            <div key={i} className="flex flex-col w-full">
              <Image
                src={t.src}
                alt={t.name}
                layout="responsive"
                width={239}
                height={253}
              />
              <p className="text-black font-bold text-sm py-0.5 lg:text-base xl:text-2xl">
                {t.name}
              </p>
              <p className="text-crmsn font-bold text-xs lg:text-sm xl:text-base">
                {t.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
