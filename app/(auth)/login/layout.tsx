import { cookies } from "next/headers";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: "400" });

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = cookies().get('theme')?.value || 'dark';
    return (
        <div className={`${nunito.className} antialiased bg-light_theme_body dark:bg-dark_theme_body text-white`}>
            <main className="flex items-center justify-center w-full h-screen">
                {children}
            </main>
        </div>
    );
}