import React from "react";
const features = [
  { h: `Buy & sell bears`, p: "with our community", icon: "/imgs/buy.svg" },
  { h: `Create collections`, p: "&earn rewards", icon: "/imgs/cubes.svg" },
  { h: `Breed adorable bears`, p: " & unlock rare traits", icon: "/imgs/star.svg" },
  { h: `Breed adorable bears`, p: " & unlock rare traits", icon: "/imgs/shield.svg" },
];
export default function Features() {
  return (
    <div className="w-full border-white border rounded-[10px] py-7 mt-10 lg:mt-0">
      <div className=" grid grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-[30px] max-w-max mx-auto">
        {features.map((feat, i) => (
          <div key={i} className="flex items-center text-xs text-white ">
            <img src={feat.icon} alt="icon" />
            <div className="flex flex-col pl-5 lg:pl-2.5">
              <p className="font-bold">{feat.h}</p>
              <p className="font-normal">{feat.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
