"use Client";
import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import "./landingPage.css";
// import { usePathname } from 'next/navigation';

// interface LandingPageProps {}
// function LandingPage() {
//     const router = useRouter();

//     // useEffect(() => {
//     //   const elementId = router.asPath.split("#")[1];
//     //   const targetElement = document.getElementById(elementId);
  
//     //   if (targetElement) {
//     //     window.scrollTo({
//     //       top: targetElement.offsetTop,
//     //       behavior: "smooth",
//     //     });
//     //   }
//     // }, [router.asPath]);
//     return (
// <main className="container w-screen">
// <div  id="UserTypes" className="UserTypes">
// <h3>User Types</h3>
// </div>
// <div  id="Pricing" className="Pricing">
// <h3>Pricing</h3>
// </div>
// <div id="CryptoLawyers" className="CryptoLawyers">
// <h3>Crypto Lawyers</h3>
// </div>
// </main>


//     );
//   }
//   export default LandingPage;


import React, { useRef } from "react";
import "./landingPage.css";

interface LandingPageProps {}
const LandingPage: React.FC<LandingPageProps> = () => {
    const userTypesRef = useRef<HTMLDivElement>(null);
    const pricingRef = useRef<HTMLDivElement>(null);
    const cryptoLawyersRef = useRef<HTMLDivElement>(null);

  return (
    <main className="container w-screen">
      <div ref={userTypesRef} id="UserTypes" className="UserTypes">
        <h3>User Types</h3>
      </div>
      <div ref={pricingRef} id="Pricing" className="Pricing">
        <h3>Pricing</h3>
      </div>
      <div ref={cryptoLawyersRef} id="CryptoLawyers" className="CryptoLawyers">
        <h3>Crypto Lawyers</h3>
      </div>
    </main>
  );
};

export default LandingPage;