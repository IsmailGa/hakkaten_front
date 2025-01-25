import Header from "@/components/main/Header";
import SideBar from "@/components/main/Sidebar";
import { cookies } from "next/headers";




export default function Home() {
  const theme = cookies().get('theme')?.value || 'light';
  return (
    <>
      <Header />
      <SideBar theme={theme} />
      <main className="min-h-[300vh] ml-[270px] pt-[70px]">
      </main>
    </>
  );
}