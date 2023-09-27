import React from "react";
import Image from "next/image";
import Avatar from "@/app/Assets/Avatar.png";

type Props = {
  question: string;
};

export default function Ask({ question }: Props) {
  return (
    <div className="content flex p-3">
      <div className="flex-shrink-0">
        <Image
          src={Avatar}
          width={40}
          height={40}
          alt="img"
          loading="lazy"
          style={{ borderRadius: "50%" }}
        ></Image>
      </div>
      <div className="flex-grow px-4 flex flex-col">
        <span className=" text-base text-[#343333] font-semibold">
          {question}
        </span>
      </div>
    </div>
  );
}
