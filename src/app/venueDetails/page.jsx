
import React from "react";
import Image1 from "../../../public/img/shopImage.png";
import LeftArray from "@/components/icon/LeftArray";
import Image from "next/image";

import Navigate from "@/components/shared/Navigate";
const page = () => {
  
  return (
    <div className="px-4 pt-6 pb-11">
      <div className="flex justify-between">
        <Navigate></Navigate>
        <h1 className="text-[16px] italic">Venue Details</h1>
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
          <h1 className="text-[#C9C6D6] text-sm mb-2">Venue Name</h1>
          <p>Midnight Lounge</p>
        </div>

        <div className="mt-4 bg-[#1A0E2E] rounded-2xl p-4 shadow-lg border border-[#2A2448]">
          <h1 className="text-[#C9C6D6] text-sm mb-2">Owner Name</h1>
          <p>Midnight Lounge</p>
        </div>

        <div className="mt-4 bg-[#1A0E2E] rounded-2xl p-4 shadow-lg border border-[#2A2448]">
          <h1 className="text-[#C9C6D6] text-sm mb-2">Contact Email</h1>
          <p>foisalrk2@gmail.com</p>
        </div>

         <div className="mt-4 bg-[#1A0E2E] rounded-2xl p-4 shadow-lg border border-[#2A2448]">
          <h1 className="text-[#C9C6D6] text-sm mb-2">Contact Number</h1>
          <p>+88324324342</p>
        </div>

        <div className="mt-4 bg-[#1A0E2E] rounded-2xl p-4 shadow-lg border border-[#2A2448]">
          <h1 className="text-[#C9C6D6] text-sm mb-2">Venue Address</h1>
          <p>123 Main Street, Austin, TX 78701</p>
        </div>
     
      </div>
    </div>
  );
};

export default page;
