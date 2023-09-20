import React from "react";
import Image from "next/image";
import Avatar from "@/app/Assets/Avatar.png";

type Props = {
  response: string;
};

export default function Response({ response }: Props) {
  return (
    <div className="content flex p-3">
      <div className="flex-shrink-0">
        <Image
          src={Avatar}
          width={50}
          height={50}
          alt="img"
          loading="lazy"
        ></Image>
      </div>
      <div className="flex-grow px-4 flex flex-col">
        <span className=" text-base text-[#343333]">{response}</span>
      </div>
    </div>
  );
}
