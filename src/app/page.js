"use client";

import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="ml-[224px] w-5/6">
        <nav className="w-full h-[64px] flex justify-between items-center bg-white px-8">
          <div className="flex">
            <p className="mr-4">Payments</p>
            <p className="text-[12px] text-[#4D4D4D] flex items-center">
              <Image
                src="./Help.svg"
                width={14}
                height={14}
                className="rounded w-[14px] h-[14px] inline mr-1"
              />
              How it works
            </p>
          </div>

          <div>
            <input
              type="text"
              className="bg-[#F2F2F2] h-[40px] w-[400px] rounded-md px-2 py-4 text-[#808080] text-base pl-7"
              placeholder="Search features, tutorials etc."
            />
            <Image
              src="./search.svg"
              width={16}
              height={16}
              className="rounded w-4 h-4 absolute top-6 mx-2"
            />
          </div>

          <div className="flex">
            <Image
              src="./message.svg"
              width={40}
              height={40}
              className="rounded w-10 h-10 mr-3"
            />
            <Image
              src="./arrow.svg"
              width={40}
              height={40}
              className="rounded w-10 h-10 "
            />
          </div>
        </nav>

        <div className="p-8">
          <div className="flex justify-between pb-6 ">
            <p className="text-[#1A181E] font-bold text-xl">Overview</p>
            <select className="bg-white h-9 w-[137px] border rounded">
              <option value="">Last Month</option>
            </select>
          </div>

          <div className="flex gap-x-4 w-full">
            <div className="w-1/2 bg-white flex-col p-5 rounded">
              <p className="text-[#4D4D4D] mb-4">Online Orders</p>
              <p className="text-xl text-[#1A181E]">231</p>
            </div>
            <div className="w-1/2 bg-white flex-col p-5 rounded">
              <p className="text-[#4D4D4D] mb-4">Amount received</p>
              <p className="text-xl text-[#1A181E]">₹ 23,92,312.19</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[#1A181E] font-bold text-xl mb-5 ">
              Transactions | This Month
            </p>
            <div className="bg-white">
              <div className="flex justify-between m-3">
                <div>
                  <input
                    type="text"
                    className="border h-[40px] w-[248px] rounded-md px-2 py-4 text-[#999999] text-sm pl-7"
                    placeholder="Search features, tutorials etc."
                  />
                  <Image
                    src="./search.svg"
                    width={16}
                    height={16}
                    className="rounded w-4 h-4 relative bottom-7 mx-2"
                  />
                </div>

                <div className="flex gap-x-3">
                  <div className="border h-9 w-20 rounded-md px-[6px] py-[12px] text-[#4D4D4D] text-base overflow-hidden flex items-center">
                    Sort
                    <Image
                      src="./Sort.svg"
                      width={16}
                      height={16}
                      className="rounded w-4 h-4 relative left-4"
                    />
                  </div>
                  <div className="border h-9 w-9 rounded-md overflow-hidden flex justify-center items-center">
                    <Image
                      src="./download.svg"
                      width={20}
                      height={20}
                      className="rounded w-5 h-5"
                    />
                  </div>
                </div>
              </div>

              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
