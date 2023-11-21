"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "./page.css";

export default function MyApp() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/signin");
  }, []); 

  return <div className="main-page"></div>;
}
