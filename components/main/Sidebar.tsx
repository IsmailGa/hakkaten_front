"use client";
import "./Sidebar.css"
import { HomeIcon, PopularIcon } from '@/public/icons'
import { Nunito } from 'next/font/google';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const nunito = Nunito({ subsets: ["latin"], weight: "600" })

const SideBar = ({ theme }: { theme: string }) => {
    const pathName = usePathname();
    return (
        <div className="sidebar-scroll h-[calc(100vh-70px)] max-w-[270px] w-full border-r-[1px] dark:border-[#3E4142] fixed pt-[35px] text-white left-0 top-[70px] overflow-y-scroll">
            <div className="w-full mx-auto px-[25px]">
                {/* TWO LINKS */}
                <div className="grid grid-rows-4 flex-col items-center gap-[15px]">
                    <Link href="/" className={`w-full h-[50px] py-[15px] pl-[25px] rounded-[50px] flex items-center gap-[10px] ${pathName === "/" ? "dark:text-black dark:bg-white bg-black text-white" : "text-[#B0B0B0] bg-[#1A1919]"}`}>
                        <HomeIcon
                            isActive={pathName === "/"}
                            theme={theme}
                        />
                        Home
                    </Link>
                    <Link href="/popular" className={`w-full h-[50px] py-[15px] pl-[25px] rounded-[50px] flex items-center gap-[10px] ${pathName === "/popular" ? "dark:text-black dark:bg-white bg-black text-white" : "text-[#B0B0B0] bg-[#1A1919]"}`}>
                        <PopularIcon
                            isActive={pathName === "/popular"}
                            theme={theme}
                        />
                        Popular
                    </Link>
                </div>
                <span className="block w-full dark:bg-[#3E4142] bg-black h-[1px]">
                </span>
                {/* TWO BUTTONS */}
                <div className="w-full flex flex-col gap-[15px] mt-[25px]">
                    <button className="flex items-center justify-between rounded-[45px] h-[45px] px-[15px] w-full dark:text-[#DADADA] text-[black] dark:bg-[#1A1919]">
                        Events
                        <div className="relative">
                            <span className="border-[1px] w-[12px] rounded-[20px] absolute -translate-x-[55%] right-[50%] top-[50%] translate-y-[-50%] rotate-[50deg]  bg-[#9B9C9C]"></span>
                            <span className="border-[1px] w-[12px] rounded-[20px] absolute translate-x-[0%] right-[50%] top-[50%] translate-y-[-50%] rotate-[130deg]  bg-[#9B9C9C]"></span>
                        </div>
                    </button>
                    <button className="flex items-center justify-between rounded-[45px] h-[45px] px-[15px] w-full dark:text-[#DADADA] text-[black] ">
                        Interestings
                        <div className="relative">
                            <span className="border-[1px] w-[12px] rounded-[20px] absolute -translate-x-[55%] right-[50%] top-[50%] translate-y-[-50%] rotate-[50deg]  bg-[#9B9C9C]"></span>
                            <span className="border-[1px] w-[12px] rounded-[20px] absolute translate-x-[0%] right-[50%] top-[50%] translate-y-[-50%] rotate-[130deg]  bg-[#9B9C9C]"></span>
                        </div>
                    </button>
                </div>

                {/* CREATE BUTTON */}
                <Link href="/create/form" className={`${nunito.className} flex items-center justify-center gap-[15px] text-black w-full h-[50px] bg-primary rounded-[50px] mt-[80px]`}>
                    Create
                    <div className="relative">
                        <span className="h-[1.5px] w-[16px]  dark:bg-black rotate-[90deg] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"></span>
                        <span className="h-[1.5px] w-[16px] dark:bg-black rotate-[0deg] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"></span>
                    </div>
                </Link>
                {/* SEPARATOR */}
                <span className="block w-full dark:bg-[#3E4142] bg-black h-[1px] mt-[130px]">
                </span>
                {/* DROPDOWN */}
                <div className="w-full flex flex-col gap-[15px] mt-[25px]">
                    <button className="flex items-center justify-between rounded-[45px] h-[45px] px-[15px] w-full dark:text-[#DADADA] text-[black]">
                        Resources
                        <div className="relative">
                            <span className="border-[1px] w-[12px] rounded-[20px] absolute -translate-x-[55%] right-[50%] top-[50%] translate-y-[-50%] rotate-[50deg]  bg-[#9B9C9C]"></span>
                            <span className="border-[1px] w-[12px] rounded-[20px] absolute translate-x-[0%] right-[50%] top-[50%] translate-y-[-50%] rotate-[130deg]  bg-[#9B9C9C]"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideBar