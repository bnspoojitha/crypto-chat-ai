"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });

    if (result && result.error) {
      console.log("signin error", error);
    } else {
      console.log("Login successful");
      router.push("/");
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
              className="w-full p-2 border bg-white text-gray-600 rounded-md focus:outline-none focus:ring focus:border-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="w-full p-2 border bg-white text-gray-600 rounded-md focus:outline-none focus:ring focus:border-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="absolute right-0 inset-y-auto px-4 py-[2px] border border-stone-200 bg-gradient-to-br from-[#743695] to-[#a859d2] text-white rounded-md transition-bg hover:bg-gradient-to-br hover:from-[#a859d2] hover:to-[#743695]"
              type="submit"
            >
              <span className="text-3xl">&gt;</span>
            </button>
          </div>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default signin;
