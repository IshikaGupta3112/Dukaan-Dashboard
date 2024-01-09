"use client";

import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="ml-[224px] w-5/6">
        <nav className="w-full h-[64px] flex justify-between items-center bg-white px-8 border-b-[1px] border-[#D9D9D9]">
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
              className="bg-[#F2F2F2] h-[40px] w-[400px] rounded-md px-2 py-4 text-[#808080] text-base pl-7 outline-none"
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
              className="rounded w-10 h-10 mr-3 cursor-pointer"
            />
            <Image
              src="./arrow.svg"
              width={40}
              height={40}
              className="rounded w-10 h-10 cursor-pointer"
            />
          </div>
        </nav>

        <div className="p-8">
          <div className="flex justify-between pb-6 ">
            <p className="text-[#1A181E] font-medium text-xl">Overview</p>
            <div className="bg-white w-[137px] flex align-middle box-border p-2 rounded border-[1px] border-black1 justify-between">
              Last Month
              <Image src="./dropdown2.svg" width={20} height={20}></Image>
            </div>
          </div>

          <div className="flex gap-x-4 w-full">
            <div className="w-1/2 bg-white flex-col p-5 rounded shadow-lg">
              <p className="text-[#4D4D4D] mb-4">Online Orders</p>
              <p className="text-xl text-[#1A181E]">231</p>
            </div>
            <div className="w-1/2 bg-white flex-col p-5 rounded shadow-lg">
              <p className="text-[#4D4D4D] mb-4">Amount received</p>
              <p className="text-xl text-[#1A181E]">₹ 23,92,312.19</p>
            </div>
          </div>

          <div className="mt-8 ">
            <p className="text-[#1A181E] font-medium text-xl mb-5 ">
              Transactions | This Month
            </p>
            <div className="bg-white rounded-lg px-3 shadow-xl flex-col justify-center items-center">
              <div className="flex justify-between mt-3">
                <div>
                  <input
                    type="text"
                    className="border h-[40px] w-[248px] rounded-md px-2 py-4 text-[#999999] text-sm pl-7 outline-none"
                    placeholder="Search by order id"
                  />
                  <Image
                    src="./search.svg"
                    width={16}
                    height={16}
                    className="rounded w-4 h-4 relative bottom-7 mx-2"
                  />
                </div>

                <div className="flex gap-x-3">
                  <div className="border h-9 w-20 rounded-md px-[6px] py-[12px] text-[#4D4D4D] text-base overflow-hidden flex items-center cursor-pointer">
                    Sort
                    <Image
                      src="./Sort.svg"
                      width={16}
                      height={16}
                      className="rounded w-4 h-4 relative left-4"
                    />
                  </div>
                  <div className="border h-9 w-9 rounded-md overflow-hidden flex justify-center items-center cursor-pointer">
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
              <hr></hr>
              <div className="flex w-fit m-auto my-6">
                <button className="h-8 w-24 border-[1px] border-[#D9D9D9] rounded text-[#4D4D4D]">
                  &lt; Previous
                </button>
                <div className="flex gap-x-2 mx-6">
                  <button className="p-1 text-[#4D4D4D] text-sm rounded">1</button>
                  <button className="p-1 rounded">...</button>
                  <button className="text-white text-sm bg-[#146EB4] h-7 w-7 box-border rounded">
                    10
                  </button>
                  <button className="p-1 text-[#4D4D4D] text-sm rounded">
                    11
                  </button>
                  <button className="p-1 text-[#4D4D4D] text-sm rounded">
                    12
                  </button>
                  <button className="p-1 text-[#4D4D4D] text-sm rounded">
                    13
                  </button>
                  <button className="p-1 text-[#4D4D4D]  text-sm rounded">
                    14
                  </button>
                  <button className="p-1  text-[#4D4D4D] text-sm rounded">
                    15
                  </button>
                  <button className="p-1 text-[#4D4D4D] text-sm rounded">
                    16
                  </button>
                  <button className="p-1 text-[#4D4D4D] text-sm rounded">
                    17
                  </button>
                  <button className="p-1 text-[#4D4D4D] text-sm rounded">
                    18
                  </button>
                </div>
                <button className="h-8 w-[74px] border-[#D9D9D9] border-[1px] rounded text-[#4D4D4D]">
                  Next &gt;{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
