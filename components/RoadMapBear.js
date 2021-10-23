import React from "react";
import Image from "next/image";
export default function RoadMapBear({ src, bg, odd }) {
  return (
    <div
      className={`overflow-hidden ${
        odd ? "right-[5%]" : "left-[5%]"
      } relative lg:w-full lg:pb-[100%] w-[55%] pb-[55%] h-full  transform ${
        !odd && "scale-x-[-1] lg:col-start-2 row-start-1"
      }`}
    >
      <div
        className={`${bg} absolute w-[90%] h-[90%] top-[9%] left-[9%] rounded-full border`}
      ></div>

      <Image src={src} alt="bear roadmap" objectFit="cover" layout="fill" />
    </div>
  );
}
