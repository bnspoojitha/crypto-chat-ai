import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";
import Ask from "./components/Ask";
import Response from "./components/Response";
import Search from "./components/Search";

export default function Home() {
  return (
    <main className="grid grid-cols-6 gap-3 w-screen h-screen p-5">
      <div className="glass-side col-span-1  ">
        <Sidebar />
      </div>

      <div className="glass col-span-5 flex flex-col gap-2 p-5 overflow-y-auto">
        <div className="flex flex-col gap-2 overflow-y-auto">
          <Ask />
          <Response />
        </div>
        <div className="mt-auto pt-4 ">
          <Search />
        </div>
      </div>
    </main>
  );
}
