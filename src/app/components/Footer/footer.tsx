import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./footer.css";

export default function Footer() {
    const router = useRouter();

  
    return (
      <footer className="footer">
          <h1 className="disclaimer-text">Disclaimer:     

            </h1>
      </footer>
    );
  }