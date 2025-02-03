"use client";
import "./Sidebar.css"
import { HomeIcon, InfoIcon, LogoIcon, PopularIcon } from '@/public/icons'
import { Nunito } from 'next/font/google';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const nunito = Nunito({ subsets: ["latin"], weight: "600" })

const SideBar = ({ theme }: { theme: string }) => {
    const pathName = usePathname();
    const [isTopicsOpen, setIsTopicsOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    

   

    return (
        <div className="sidebar-scroll-custom h-[calc(100vh-70px)] max-w-[270px] w-full border-r-[1px] dark:border-[#3E4142] border-black/30 fixed pt-[35px] text-white left-0 top-[70px] overflow-y-auto hover:scrollbar-thin scrollbar-track-black/50 scrollbar-thumb-gray-600">
            <div className="w-full mx-auto px-[25px]">
                {/* TWO LINKS */}
                <div className="grid grid-rows-4 flex-col items-center gap-[15px]">

                    <Link href="/" className={`w-full h-[50px] py-[15px] pl-[25px] rounded-[50px] flex items-center gap-[10px] ${pathName === "/" ? "dark:text-black dark:bg-white border-black border-[1px] text-black" : "dark:text-[#B0B0B0] dark:bg-[#1A1919] text-black "}`}>
                        <HomeIcon
                            isActive={pathName === "/"}
                            theme={theme}
                        />
                        Home
                    </Link>
                    <Link href="/popular" className={`w-full h-[50px] py-[15px] pl-[25px] rounded-[50px] flex items-center gap-[10px] ${pathName === "/popular" ? "dark:text-black dark:bg-white border-black border-[1px] text-black" : "dark:text-[#B0B0B0] dark:bg-[#1A1919] text-black "}`}>
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
                    <button
                        onClick={() => setIsTopicsOpen(!isTopicsOpen)}
                        className="flex items-center justify-between rounded-[45px] h-[45px] px-[15px] w-full dark:text-[#DADADA] text-[black] hover:bg-gray-100 dark:hover:bg-[#1A1919] transition-colors"
                    >
                        Topics
                        <div className={`transform transition-transform duration-200`}>
                            <span className="border-[1px] w-[12px] rounded-[20px] absolute -translate-x-[55%] right-[50%] top-[50%] translate-y-[-50%] rotate-[50deg] dark:border-[#9B9C9C] border-black "></span>
                            <span className="border-[1px] w-[12px] rounded-[20px] absolute translate-x-[0%] right-[50%] top-[50%] translate-y-[-50%] rotate-[130deg] dark:border-[#9B9C9C] border-black "></span>
                        </div>
                    </button>
                    {/* TOPICS TOGGLE CONTENT */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isTopicsOpen ? 'max-h-40' : 'max-h-0'}`}>
                        <div className="px-[16px]">
                            <ul className="space-y-2">
                                <li className="dark:text-[#DADADA] text-black hover:bg-gray-100 dark:hover:bg-[#2d2e2e] p-2 rounded-lg">Topic 1</li>
                                <li className="dark:text-[#DADADA] text-black hover:bg-gray-100 dark:hover:bg-[#2d2e2e] p-2 rounded-lg">Topic 2</li>
                                <li className="dark:text-[#DADADA] text-black hover:bg-gray-100 dark:hover:bg-[#2d2e2e] p-2 rounded-lg">Topic 3</li>
                            </ul>
                        </div>
                    </div>
                    <button className="flex items-center justify-between rounded-[45px] h-[45px] px-[15px] w-full dark:text-[#DADADA] text-[black] ">
                        Interestings
                        <div className="relative">
                            <span className="border-[1px] w-[12px] rounded-[20px] absolute -translate-x-[55%] right-[50%] top-[50%] translate-y-[-50%] rotate-[50deg] dark:border-[#9B9C9C] border-[#000000]"></span>
                            <span className="border-[1px] w-[12px] rounded-[20px] absolute translate-x-[0%] right-[50%] top-[50%] translate-y-[-50%] rotate-[130deg] dark:border-[#9B9C9C] border-[#000000]"></span>
                        </div>
                    </button>
                </div>

                {/* CREATE BUTTON */}
                <Link href="/create/form" className={`${nunito.className} flex items-center justify-center gap-[15px] text-black w-full h-[50px] bg-primary rounded-[50px] mt-[80px]`}>
                    Create
                    <div className="relative">
                        <span className="h-[1.5px] w-[16px]  bg-black rotate-[90deg] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"></span>
                        <span className="h-[1.5px] w-[16px] bg-black rotate-[0deg] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"></span>
                    </div>
                </Link>
                {/* SEPARATOR */}
                <span className="block w-full dark:bg-[#3E4142] bg-black h-[1px] mt-[130px]">
                </span>
                {/* DROPDOWN */}
                <div className="w-full flex flex-col gap-[15px] mt-[25px]">
                    <button
                        onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                        className="flex items-center justify-between rounded-[45px] h-[45px] px-[15px] w-full dark:text-[#DADADA] text-[black] hover:bg-gray-100 dark:hover:bg-[#1A1919] transition-colors"
                    >
                        Resources
                        {/* Arrow icon with rotation transition */}
                        <div className={`block transform transition-transform duration-200
                            }`}>
                            <span className="border-[1px] w-[12px] rounded-[20px] absolute -translate-x-[55%] right-[50%] top-[50%] translate-y-[-50%] rotate-[50deg] dark:border-[#9B9C9C] border-black "></span>
                            <span className="border-[1px] w-[12px] rounded-[20px] absolute translate-x-[0%] right-[50%] top-[50%] translate-y-[-50%] rotate-[130deg] dark:border-[#9B9C9C] border-black "></span>
                        </div>
                    </button>

                    {/* Dropdown content with sliding transition */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isResourcesOpen ? 'max-h-40' : 'max-h-0'
                        }`}>
                        <div className="flex flex-col gap-[20px] pb-2">
                            <Link href="/aboutus" className="px-[15px] flex items-center gap-[11px] dark:text-white text-black hover:bg-gray-100 dark:hover:bg-[#2d2e2e] p-2 rounded-lg">
                                <LogoIcon theme={theme} />
                                About Us
                            </Link>
                            <Link href="/help" className="px-[15px] flex items-center gap-[11px] dark:text-white text-black hover:bg-gray-100 dark:hover:bg-[#2d2e2e] p-2 rounded-lg">
                                <InfoIcon theme={theme} />
                                Help
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar