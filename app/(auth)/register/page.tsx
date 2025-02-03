"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "@/public/svg/Logo.svg";
import { Nunito } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type ErrorWithMessage = {
    message: string;
};

const nunito = Nunito({ subsets: ["latin"], weight: "500" })

const RegisterPage = () => {
    const router = useRouter();
    const [fullName, setFullName] = useState({ firstName: "", lastName: "" })
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const full_name = `${fullName.firstName} ${fullName.lastName}`;
        try {
            const response = await fetch('http://localhost:8000/api/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, full_name }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Registration failed');
            }

            router.push('/login');
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else if (typeof err === 'object' && err !== null && 'message' in err) {
                setError((err as ErrorWithMessage).message);
            } else {
                setError('An unknown error occurred during registration');
            }
        }
    };
    return (
        <div className="dark:bg-dark_theme_bg p-[20px] dark:border-none border-[1px] border-black/10 rounded-[20px] max-w-[400px] w-full flex flex-col gap-[45px]">

            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                    <Image src={Logo} alt="" className="max-w-[33px] h-auto" />
                    <h1 className="text-[23px] dark:text-white text-black font-bold">Hakkaten</h1>
                </div>
                <Link href="/" className="dark:text-white text-black font-medium text-[20px]">Home</Link>
            </div>
            <form className="flex flex-col gap-[25px]" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-[5px]">
                    <h1 className="text-[24px] font-medium leading-[33px] dark:text-[#FFFFFF] text-black">Registration</h1>
                </div>
                <input
                    required
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    value={fullName.firstName}
                    onChange={(e) => setFullName({ ...fullName, firstName: e.target.value })}
                    className="outline-none dark:focus:border-white transition-all duration-300 dark:bg-[#9B9C9C15] border-[1px] dark:text-white text-black focus:border-black/50 dark:border-[#9B9C9C30] rounded-[50px] w-full h-[48px] px-[16px]" />
                <input
                    required
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    value={fullName.lastName}
                    onChange={(e) => setFullName({ ...fullName, lastName: e.target.value })}
                    className="outline-none dark:focus:border-white transition-all duration-300 dark:bg-[#9B9C9C15] border-[1px] dark:text-white text-black focus:border-black/50 dark:border-[#9B9C9C30] rounded-[50px] w-full h-[48px] px-[16px]" />
                <input
                    required
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="outline-none dark:focus:border-white transition-all duration-300 dark:bg-[#9B9C9C15] border-[1px] dark:text-white text-black focus:border-black/50 dark:border-[#9B9C9C30] rounded-[50px] w-full h-[48px] px-[16px]" />
                <input
                    required
                    type="text"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="outline-none dark:focus:border-white transition-all duration-300 dark:bg-[#9B9C9C15] border-[1px] dark:text-white text-black focus:border-black/50 dark:border-[#9B9C9C30] rounded-[50px] w-full h-[48px] px-[16px]" />
                <input
                    required
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="outline-none dark:focus:border-white transition-all duration-300 dark:bg-[#9B9C9C15] border-[1px] dark:text-white text-black focus:border-black/50 dark:border-[#9B9C9C30] rounded-[50px] w-full h-[48px] px-[16px]" />
                {error && <div className="text-red-500">{error}</div>}
                <Link href="/login" className='w-fit'>Already have an account?</Link>
                <button type='submit' className={`w-full h-[50px] bg-primary  rounded-[50px] text-black text-[18px] font-medium leading-[25px] ${nunito.className}`}>Register</button>
            </form>
            <div className="flex flex-col gap-[15px] w-full">
                <Link href="/login" className={`w-full h-[50px] flex items-center justify-center bg-secondary rounded-[50px] text-white text-[18px] font-medium leading-[25px] ${nunito.className}`}>Log in</Link>
            </div>
        </div>
    )
}

export default RegisterPage