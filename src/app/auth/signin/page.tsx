"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from 'axios';
import { FaGooglePlusG } from "react-icons/fa6";
import {firebaseConfig} from "../../firebaseConfig";
import { initializeApp } from "@firebase/app";
import { useGlobalContext } from "../../context/globalContext";
import { reducerTypes, UserData } from "@/app/reducers/globalReducer";

initializeApp(firebaseConfig);
export type payloadtype = {
  username: string;
}
const signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();
  const [apiData, setApiData] = useState<any>(null);
  const { state: globalState, dispatch: globalDispatch } = useGlobalContext();
  console.log("Logged into login page")

  async function authorizeUser(emailId: string | null) {
    const cleanEmail = emailId?.replace(/^"(.*)"$/, '$1');
    const payload = {
      username:cleanEmail,
    };
    try {
      const response = await axios.post(`/api/internal-route`, payload);
      console.log(response,"response for authorise user")
     if(response.data.status == 403) {
        setButtonDisabled(true);
        setError("Unauthorised User");
      }
      else {
        const responseData = response.data as UserData;
        globalDispatch({
          type: reducerTypes.SET_USER_DATA,
          payloadGlobal: responseData,
        });
        sessionStorage.setItem('userEmailId', JSON.stringify(response.data.username)); // Store the emailId
        sessionStorage.setItem('userAccessToken', JSON.stringify(response.data.accessToken)); // Store the accessToken
        sessionStorage.setItem('userAuthDetails', JSON.stringify(responseData));
        router.push("/auth/main");
        console.log("User data in signin page:", globalState.userData);
      }
    } catch (error) {
      setError("Server Error");
      console.log("API Request Error:", error);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // useEffect(() => {
    //   const userEmailId = globalState.userData.accessToken;
    //   authorizeUser(userEmailId);
    //   console.log(userEmailId, "On Reload calling authorize user Func")
    // }, []);

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


  const auth = getAuth();
  const [authing, setAuthing] = useState(false);
  const signInWithGoogle = async () => {
    setAuthing(true);
  signInWithPopup(auth, new GoogleAuthProvider())
      .then( (response) => {
        sessionStorage.setItem('displayName', JSON.stringify(response.user.displayName))
       authorizeUser(response.user.email);     
      })
      .catch((error) => {
        setAuthing(false);
      });
    const storedUserData = localStorage.getItem('userData');
if (storedUserData) {
  const parsedUserData = JSON.parse(storedUserData) as UserData;
  // Dispatch user data to global state
  globalDispatch({
    type: reducerTypes.SET_USER_DATA,
    payloadGlobal: parsedUserData,
  });
}
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
          <div className="divider txt-color" style={{color: "#ffff"}} >----- or ----- </div>
          {/* <div className="signinwithGoogle"> */}
          <button
          className="button-sidebar text-white py-2 px-4 rounded w-full" style={{borderBlock: "revert"}}
          onClick={signInWithGoogle} 
        >
          Sign in with Google
        </button>
          {/* </div> */}
          {/* <FaGooglePlusG className="text-white text-4xl cursor-pointer"  onClick={signInWithGoogle}  /> */}
        </form>
        {error && (
          <p className="absolute bottom-0 pb-4 pl-1 text-red-800">
  <strong>{"Unauthorised User"}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default signin;