"use client"

import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="ml-40 w-4/5 ">
        <nav className="w-full h-[40px] flex space-between ">
          <div className="flex">
            
          </div>

        </nav>
        <Table />
      </div>
    </>
  );
}
