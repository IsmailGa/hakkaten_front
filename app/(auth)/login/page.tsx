import Image from 'next/image'
import React from 'react'
import Logo from "@/public/svg/Logo.svg";
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ["latin"], weight: "500" })

const LoginPage = () => {

    return (
        <div className="dark:bg-dark_theme_bg p-[20px] rounded-[20px] max-w-[400px] w-full flex flex-col gap-[45px]">
            <div className="flex items-center gap-[10px]">
                <Image src={Logo} alt="" className="max-w-[33px] h-auto" />
                <h1 className="text-[23px] dark:text-white text-black font-bold">Hakkaten</h1>
            </div>
            <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-[5px]">
                    <h1 className="text-[24px] font-medium leading-[33px] text-[#FFFFFF]">Log in via Email</h1>
                    <p className="text-[18px] font-normal leading-[25px] text-[#FFFFFF50]">Only for registered user</p>
                </div>
                <input type="text" name="email" id="email" placeholder="E-mail" className="outline-none hover:border-white transition-all duration-300 bg-[#9B9C9C15] border-[1px] border-[#9B9C9C30] rounded-[50px] w-full h-[48px] px-[16px]" />
            </div>
            <div className="flex flex-col gap-[15px] w-full">
                <button className={`w-full h-[50px] bg-primary rounded-[50px] text-black text-[18px] font-medium leading-[25px] ${nunito.className}`}>Log in</button>
                <button className={`w-full h-[50px] bg-secondary rounded-[50px] text-white text-[18px] font-medium leading-[25px] ${nunito.className}`}>Register</button>
            </div>
        </div>
    )
}

export default LoginPage