import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/svg/Logo.svg";
import search_icon from "@/public/svg/search-icon.svg";
import notificaton from "@/public/svg/notification.svg";
import { Nunito } from "next/font/google";
import ThemeToggle from "../buttons/ThemeToggle";

const nunito = Nunito({ subsets: ["latin"], weight: "600" });

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-light_theme_body dark:bg-dark_theme_body h-[70px] flex items-center border-b-[1px] dark:border-[#3E4142]">
      <div className="flex justify-between w-full mx-auto md:px-[35px] sm:px-[25px] px-[20px]">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="" />
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
          <Link
            href="/login"
            className={`${nunito.className} text-[16px] leading-[22px] w-[80px] h-[40px] rounded-[40px] flex items-center justify-center text-center bg-primary`}
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
