import { cookies } from "next/headers";
import PostsSection from "./SECTIONS/PostsSection";

export default function Home() {
  const theme = cookies().get('theme')?.value || 'dark';
  return (
    <>
      <PostsSection theme={theme} />
    </>
  );
}