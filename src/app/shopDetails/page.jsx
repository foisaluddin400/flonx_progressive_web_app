'use client'
import React from "react";
import Image1 from "../../../public/img/shopImage.png";
import LeftArray from "@/components/icon/LeftArray";
import Image from "next/image";
import { useRouter } from "next/navigation";
const page = () => {
    const router = useRouter();
  return (
    <div className="px-4 pt-6 pb-11">
      <div className="flex justify-between">
        <button   onClick={() => router.back()} className=" bg-[#1A0E2E] rounded-full w-[40px] h-[40px] flex justify-center items-center shadow-lg border border-[#2A2448]">
          <LeftArray></LeftArray>
        </button>
        <h1 className="text-2xl">Shop Details</h1>
        <div></div>
      </div>

      <div className="flex justify-center py-4">
        <Image
          className="w-[90px] h-[90px] object-cover rounded-2xl"
          src={Image1}
          alt={"Logo"}
          width={100}
          height={100}
        />
      </div>

      <div>
        <div className=" bg-[#1A0E2E] rounded-2xl p-4 shadow-lg border border-[#2A2448]">
          <h1 className="text-[#C9C6D6] text-sm mb-2">Bar Name</h1>
          <p>Midnight Lounge</p>
        </div>

        <div className="mt-4 bg-[#1A0E2E] rounded-2xl p-4 shadow-lg border border-[#2A2448]">
          <h1 className="text-[#C9C6D6] text-sm mb-2">Bar Name</h1>
          <p>Midnight Lounge</p>
        </div>

        <div className="mt-4 bg-[#1A0E2E] rounded-2xl p-4 shadow-lg border border-[#2A2448]">
          <h1 className="text-[#C9C6D6] text-sm mb-2">Bar Name</h1>
          <p>Midnight Lounge</p>
        </div>

        <div className="mt-4 bg-[#1A0E2E] rounded-2xl p-4 shadow-lg border border-[#2A2448]">
          <h1 className="text-[#C9C6D6] text-sm mb-2">Bar Name</h1>
          <p>Midnight Lounge</p>
        </div>
        <div className="mt-4 bg-[#1A0E2E] rounded-2xl p-4 shadow-lg border border-[#2A2448]">
          <h1 className="text-[#C9C6D6] text-sm mb-2">Bar Name</h1>
          <p>Midnight Lounge</p>
        </div>
      </div>
    </div>
  );
};

export default page;
