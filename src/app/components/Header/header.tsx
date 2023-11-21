"use Client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Avatar from "@/app/Assets/Avatar.png";
import "./header.css";
interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const scrollToSection = (sectionId: string) => {
    router.push("/#" + sectionId);
  };


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userTypes = useRef<HTMLDivElement>(null);
  const pricing = useRef<HTMLDivElement>(null);
  const cryptoLawyers = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      isDropdownOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !target.classList.contains("option")
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const redirectToSettings = () => {
    console.log("redirected to Settings Page");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const redirectToLoginPage = (event: React.MouseEvent) => {
    event.stopPropagation();
    sessionStorage.clear();
    router.push("/auth/signin");
  };

  return (
    <header className="header">
      <div className="navbar-container-flex">
        <div className="navigation">
          <div className="header-heading x-large">
            <h1>Crypto Co Counsel - Compass</h1>
          </div>
          {/* <div className="nav__menu" > */}
            {/* <ul className="nav__list">
                <li onClick = { ()=> scrollToSection("UserTypes") } className="nav__item">
                  
               User Types
                </li>
                <li onClick = { ()=> scrollToSection("Pricing") } className="nav__item" >
              Pricing
                </li>
                <li onClick = { ()=> scrollToSection("CryptoLawyers") } className="nav__item" >
               Crypto Lawyers
                </li>
            </ul> */}
          {/* </div> */}
          <div className="signout-label">
            <div className="mb-6" ref={dropdownRef}>
              <Image
                src={Avatar}
                alt="User Avatar"
                className="image-positioning"
                onClick={toggleDropdown}
              />
            </div>
          </div>
          {isDropdownOpen && (
            <div className="dropdown">
              <div className="option text-white" id="sign-out-option" onClick={redirectToSettings}>
                Account Settings
              </div>
              <div className="option text-white"  onClick={(e) => redirectToLoginPage(e)}>
                Sign Out
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;