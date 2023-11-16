import React from "react";
import Image from "next/image";

import Typewriter from "typewriter-effect";
import chatIcon from "@/app/Assets/Chat-1.png";

type Props = {
  response: string;
};

export default function Response({ response }: Props) {
  const processedText = response.replace(/\\n/g, "<br>");

  return (
    <div className="content flex p-3"  style={{width:'fit-content'}}>
      <div className="flex-shrink-0 ">
        <Image
          src={chatIcon}
          width={45}
          height={45}
          alt="img"
          loading="lazy"
        ></Image>
      </div>
      <div className="flex-grow px-4 flex flex-col text-base text-[#343333]">
        {/* <div
          className="text-base text-[#343333]"
          dangerouslySetInnerHTML={{ __html: processedText }}
        /> */}

        <Typewriter
          options={{
            strings: processedText,
            autoStart: true,
            loop: false,
            delay: 55,
          }}
        />
      </div>
    </div>
  );
}
