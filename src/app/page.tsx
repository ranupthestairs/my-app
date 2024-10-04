import Image from "next/image";
import About from "./components/about";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="lg:hidden sm:coloum-2">
        <p className="text-indigo-500 hover:text-pink-500 underline">Well, let me tell you something, ...</p>
        <p className="hover:break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
        <p className="box-content">Look. If you think this is...</p>
      </div>
      <About />
    </div>
  );
}
