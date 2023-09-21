"use client";

import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";
import Ask from "./components/Ask";
import Response from "./components/Response";
import Search from "./components/Search";
import { useGlobalContext } from "./context/globalContext";
import { chatTypes, reducerTypes } from "./reducers/globalReducer";
import { signOut, useSession } from "next-auth/react";
import { Session } from "inspector";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Cookies from "js-cookie";

type jwtType = {
  iat: number;
  exp: number;
  jti: string;
  customField: {
    token: string;
  };
};

export default function Home() {
  const [jwt, setJwt] = useState("");
  const { state: globalState, dispatch: globalDispatch } = useGlobalContext();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const user = session?.user as jwtType;

    if (user) {
      globalDispatch({
        type: reducerTypes.SET_JWT,
        payloadGlobal: user.customField.token,
      });
    } else {
      router.push("auth/signin");
    }
  }, []);

  return (
    <main className="grid grid-cols-6 gap-3 w-screen h-screen p-5">
      <div className="glass-side col-span-1  ">
        <Sidebar />
      </div>

      <div className="glass col-span-5 flex flex-col gap-2 p-5 overflow-y-auto">
        <div className="flex flex-col gap-2 overflow-y-auto">
          {globalState.chats.map((chat, index) =>
            chat.type === chatTypes.Question ? (
              <Ask key={index} question={chat.text} />
            ) : (
              <Response key={index} response={chat.text} />
            )
          )}
        </div>
        <div className="mt-auto pt-4 ">
          <Search />
        </div>
      </div>
    </main>
  );
}
