"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useReducer } from "react";
import { globalReducer, init_state_global } from "./reducers/globalReducer";
import { globalContext } from "./context/globalContext";
// import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(globalReducer, init_state_global);

  return (
    <html lang="en">
      <body className={inter.className}>
        <globalContext.Provider value={{ state, dispatch }}>
          {/* <Providers></Providers> */}
          {children}
        </globalContext.Provider>
      </body>
    </html>
  );
}
