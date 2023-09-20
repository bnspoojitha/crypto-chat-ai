import React from "react";
import Image from "next/image";
import chatIcon from "@/app/Assets/Chat-1.png";

type Props = {
  question: string;
};

export default function Ask({ question }: Props) {
  return (
    <div className="content flex p-3">
      <div className="flex-shrink-0">
        <Image
          src={chatIcon}
          width={50}
          height={50}
          alt="img"
          loading="lazy"
        ></Image>
      </div>
      <div className="flex-grow px-4 flex flex-col">
        <span className=" text-base text-[#343333]">{question}</span>
      </div>
    </div>
  );
}
