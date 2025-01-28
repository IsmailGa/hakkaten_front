import type { Metadata } from "next";
import { cookies } from 'next/headers';
import { Nunito } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const nunito = Nunito({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Hakkaten",
  description: "Project was made by Vortex Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get('theme')?.value || 'dark';
  return (
    <html lang="en" className={theme === 'dark' ? 'dark' : ''}>
      <body className={`${nunito.className} dark:bg-dark_theme_body bg-light_theme_body`}>
        <ClientLayout initialTheme={theme}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}