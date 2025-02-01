import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: "400" });

export default function LayoutRegister({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${nunito.className} antialiased bg-light_theme_body dark:bg-dark_theme_body text-white`}>
            <main className="flex items-center justify-center w-full h-screen">
                {children}
            </main>
        </div>
    );
}