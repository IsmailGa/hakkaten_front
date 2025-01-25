import Header from "@/components/main/Header";
import SideBar from "@/components/main/Sidebar";
import { cookies } from "next/headers";
import PostsSection from "./SECTIONS/PostsSection";

export default function Home() {
  const theme = cookies().get('theme')?.value || 'dark';
  return (
    <>
      <Header />
      <SideBar theme={theme} />
      <PostsSection/>
    </>
  );
}