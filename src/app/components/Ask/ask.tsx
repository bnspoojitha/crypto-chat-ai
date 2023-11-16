import React from "react";
import Image from "next/image";
import Avatar from "@/app/Assets/Avatar.png";
import { wrap } from "module";

type Props = {
  question: string;
};

export default function Ask({ question }: Props) {
  return (
    <div className="content flex p-3" style={{width:'fit-content'}}>
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
        <span className=" text-base text-[#343333] font-semibold" style={{width:"fit-content",wordBreak:"break-word" }} >
          {question}
        </span>
      </div>
    </div>
  );
}
