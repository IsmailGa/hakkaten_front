"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Logo from "@/public/svg/Logo.svg";
import search_icon from "@/public/svg/search-icon.svg";
import notificaton from "@/public/svg/notification.svg";
import { Nunito } from "next/font/google";
import ThemeToggle from "../buttons/ThemeToggle";
import { useRouter } from "next/navigation";

const nunito = Nunito({ subsets: ["latin"], weight: "600" });

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setIsLoggedIn(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:8000/api/v1/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          throw new Error('Unauthorized');
        }
      } catch (err) {
        console.error((err as Error).message);
        setIsLoggedIn(false);
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:8000/api/v1/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      localStorage.removeItem('access_token');
      setIsLoggedIn(false);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-light_theme_body dark:bg-dark_theme_body h-[70px] flex items-center border-b-[1px] dark:border-[#3E4142] border-black/30">
      <div className="flex justify-between w-full mx-auto md:px-[35px] sm:px-[25px] px-[20px]">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-[10px]">
          <Image src={Logo} alt="" className="max-w-[33px] h-auto" />
          <h1 className="text-[30px] dark:text-white text-black font-bold">Hakkaten</h1>
        </Link>
        <div className="h-[40px] min-w-[380px] dark:bg-white bg-[#B0B0B0] text-black flex items-center rounded-[40px] px-[16px] py-[12px] gap-[12px]">
          <Image src={search_icon} alt="" className="w-[16px] h-[16px]" />
          <input
            type="text"
            className="w-full dark:bg-white bg-[#B0B0B0] outline-none border-none dark:placeholder-[#00000063] placeholder-[#00000080]"
            placeholder="Search Hakkaten"
          />
        </div>

        <ThemeToggle />
        <div className="flex items-center gap-[15px]">
          <Link href="/notifications">
            <Image src={notificaton} alt="" />
          </Link>
          
          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-medium hover:bg-gray-500 transition-colors"
              >
                {/* Add user initials or profile image here */}
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className={`${nunito.className} text-[16px] leading-[22px] w-[80px] h-[40px] rounded-[40px] flex items-center justify-center text-center bg-primary`}
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;