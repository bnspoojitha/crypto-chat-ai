"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from 'axios';
import { FaGooglePlusG } from "react-icons/fa6";
import {firebaseConfig} from "../../firebaseConfig";
import { initializeApp } from "@firebase/app";
import { useGlobalContext } from "../../context/globalContext";

initializeApp(firebaseConfig);

const signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();
  const { state: globalState, dispatch: globalDispatch } = useGlobalContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // setIsSubmitting(true);

    // const result = await signIn("credentials", {
    //   username: username,
    //   password: password,
    //   redirect: false,
    // });
    // setIsSubmitting(false);

    // if (result && result.error) {
    //   console.log("signin error", result);
    //   setError(result.error);
    // } else {
    //   console.log("Login successful , " +result);
    //   router.push("/");
    // }
  };
  async function authorizeUser(emailId: string | null) {
      const payload = {
        username: "test2@gmail.com",
        // email:emailId,
      };
  axios.post('http://localhost:8080/chatbotapp/authorizeuser', payload)
  // axios.post('https://33b8-2405-6e00-22ec-df7b-90c1-2bd5-407a-477c.ngrok-free.app/chatbotapp/authorizeuser', payload)
  .then((res) => {
    if(res){
      router.push("/");
    }
    else{
      setButtonDisabled(true);
      setError("Unauthorised User");
    }
  })
  .catch((error) => {
    setError("Unauthorised User");
    console.log("API Request Error:", error);
    // router.push("/");
  });  
  };


  const auth = getAuth();
  const [authing, setAuthing] = useState(false);
  const signInWithGoogle = async () => {
    setAuthing(true);
  signInWithPopup(auth, new GoogleAuthProvider())
      .then( (response) => {
       authorizeUser(response.user.email);
      //  globalDispatch({
      //   type: reducerTypes.MAIL_ID,
      //   payloadGlobal: response.user.email,
      // });
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl text-white font-light mb-10 text-center">
        Login
      </h1>
      <div className="glass p-8 shadow-lg rounded-md w-96">
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label className="block text-white mb-2">Account</label>
            <input
              type="text"
              placeholder="Your Username"
              className="w-full p-2 border bg-white selection:bg-purple-300 text-gray-600 rounded-md focus:outline-none focus:ring focus:border-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="w-full p-2 border bg-white selection:bg-purple-300 text-gray-600 rounded-md focus:outline-none focus:ring focus:border-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="absolute right-0 inset-y-auto px-4 py-[2px] border border-stone-200 bg-gradient-to-br from-[#743695] to-[#a859d2] text-white rounded-md transition-bg hover:bg-gradient-to-br hover:from-[#a859d2] hover:to-[#743695]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading w-5 h-[25.5px] mt-1"></span>
              ) : (
                <span className="text-3xl">&gt;</span>
              )}
            </button>
          </div>
          <div className="divider txt-color" style={{color: "#ffff"}} > or Sign in With</div>
          <FaGooglePlusG className="text-white text-4xl cursor-pointer"  onClick={signInWithGoogle}  />
        </form>
        {error && (
          <p className="absolute bottom-0 pb-4 pl-1 text-red-800">
            {"Unauthorised User"}
          </p>
        )}
      </div>
    </div>
  );
};

export default signin;