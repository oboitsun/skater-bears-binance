import React from "react";
import RoadMapBear from "./RoadMapBear";
import RoadMapParagraph from "./RoadMapParagraph";
import Image from "next/image";
export default function Roadmap() {
  return (
    <div className="py-14 px-10 lg:px-0 max-w-864 xl:max-w-1080 mx-auto flex flex-col items-center">
      <p className="text-[32px] font-extrabold uppercase text-center">Roadmap </p>

      <div className="w-full flex flex-col lg:grid grid-cols-[42%,1fr] gap-x-20 items-center gap-y-6 mb-10 relative">
        <RoadMapBear src="/imgs/bear7.png" bg="bg-[#F3FFF0]" odd />
        <RoadMapParagraph
          odd
          month="july 2021"
          paragraph={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`}
        />
        <div className="absolute w-[20%] top-[80%] left-[40%] transform -translate-x-1/2">
          <Image
            src="/imgs/arrow-down.png"
            alt="arrow"
            layout="responsive"
            width={201}
            height={240}
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:grid grid-cols-[1fr,42%] gap-x-20 items-center gap-y-6 mb-10 relative">
        <RoadMapBear src="/imgs/bear10.png" bg="bg-[#FFF6F0]" />
        <RoadMapParagraph
          month="august 2021"
          paragraph={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`}
        />
        <div className="absolute w-[20%] top-[70%] right-[45%] transform translate-x-1/2 scale-x-[-1]">
          <Image
            src="/imgs/arrow-down.png"
            alt="arrow"
            layout="responsive"
            width={201}
            height={240}
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:grid grid-cols-[42%,1fr] gap-x-20 items-center gap-y-6 mb-10 relative">
        <RoadMapBear src="/imgs/bear5.png" bg="bg-[#F0FAFF]" odd />
        <RoadMapParagraph
          odd
          month="september 2021"
          paragraph={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`}
        />
        <div className="absolute w-[25%] top-[80%] left-[46%] transform -translate-x-1/2">
          <Image
            src="/imgs/arrow-last.png"
            alt="arrow"
            layout="responsive"
            width={315}
            height={306}
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:grid grid-cols-[1fr,42%] gap-x-20 items-center gap-y-6 mb-10 relative">
        <RoadMapBear src="/imgs/bear6.png" bg="bg-[#F7F7F7]" />
        <RoadMapParagraph
          month="october 2021"
          paragraph={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`}
        />
      </div>
    </div>
  );
}
