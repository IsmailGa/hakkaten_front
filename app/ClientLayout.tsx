'use client';

import { usePathname } from 'next/navigation';
import Header from "@/components/main/Header";
import SideBar from "@/components/main/Sidebar";
import { useState } from 'react';

export default function ClientLayout({ children, initialTheme }: { 
    children: React.ReactNode, 
    initialTheme: string 
}) {
    const pathname = usePathname();
    const hideLayout = ['/login', '/register'].includes(pathname);
    const [theme] = useState(initialTheme);
    return (
        <>
            {!hideLayout && <Header />}
            {!hideLayout && <SideBar theme={theme} />}
            <main className={hideLayout ? 'ml-0 pt-0' : 'ml-[270px] pt-[70px]'}>
                {children}
            </main>
        </>
    );
}