"use client";

import Image from "next/image";
import Sidebar from "@/app/components/Sidebar/sidebar";
import Ask from "./components/Ask/ask";
import Response from "./components/Response/Response";
import Search from "./components/Search/search";
import { useGlobalContext } from "./context/globalContext";
import { chatTypes, reducerTypes, UserData } from "./reducers/globalReducer";


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./page.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import LandingPage from "./components/Landingpage/landingPage";
import axios from "axios";


type jwtType = {

  username: string;
  accessToken: string;
};


export default function Home() {

  const [jwt, setJwt] = useState("");
  const { state: globalState, dispatch: globalDispatch } = useGlobalContext();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle  = (childValue: boolean) => {
    setIsOpen(childValue);
  };
  useEffect(() => {
    const sessionuserData = sessionStorage.getItem('userAuthDetails');
    const userAuthDetails = sessionuserData ? JSON.parse(sessionuserData) : null;
    if(userAuthDetails){
      if(userAuthDetails.accessToken && userAuthDetails.username){
        globalDispatch({
          type: reducerTypes.ADD_CHAT,
          payloadGlobal: {
            text: "Hi!👋",
            type: chatTypes.Question,
          },
        });
        globalDispatch({
          type: reducerTypes.ADD_CHAT,
          payloadGlobal: {
            text: "Hello! 😊 How can I assist you today?",
            type: chatTypes.Answer,
          },
        });
          const userEmailId = sessionStorage.getItem('userEmailId');
          fetchData(userEmailId);
      }
    }
    else {
      router.push("auth/signin");
      console.log("Invalid Session Details")
    }
  }, []);

  const fetchData = async (userEmailId: string | null) => {
    try {
      const cleanEmail = userEmailId?.replace(/^"(.*)"$/, '$1');
      const response = await axios.post(`/api/internal-route`, { username: cleanEmail });
      if (response.data) {
        const responseData = response.data as UserData;
        globalDispatch({
          type: reducerTypes.SET_USER_DATA,
          payloadGlobal: responseData,
        });
        sessionStorage.setItem('userData', JSON.stringify(responseData));
        router.push("/");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("API Request Error in main page after reload:", error);
    }
  };
  
  return (
<div className="main-page">
<Header />

    <main className="grid grid-cols-6 gap-3 p-5 glass" style={{minHeight:"80vh", gridAutoColumns: "1fr", marginTop: "10px"}} > 
 <div className="glass-side col-span-1" style={{width: isOpen? "100%" : "35%"}}>
        <Sidebar sendValueToParent={handleToggle} isOpen={isOpen} />
      </div>
      <div className="glass col-span-5 flex flex-col gap-2 p-5 overflow-y-auto" style={{marginLeft: isOpen? "0" : "-12%"}}>
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
     {/* <LandingPage /> */}
    <Footer />
    </div>
  );
}