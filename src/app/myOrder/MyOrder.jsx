"use client";

import PrgressIco from "@/components/icon/PrgressIco";
import Navigate from "@/components/shared/Navigate";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const MyOrder = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/ready_for_pickup");
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // cleanup
  }, [router]);

  return (
    <div className="px-3">
      <div className="flex items-center justify-between relative pt-6 pb-6">
        <Navigate />
        <h1 className="text-2xl">My Order</h1>
        <div></div>
      </div>

      <div>
        <div className="bg-[#22C55E] p-11 rounded-3xl text-center">
          <h1 className="text-4xl font-bold">A44</h1>
          <p className="text-2xl">Order Code</p>
        </div>

        <div className="border mt-6 flex gap-2 items-center border-[#00D66F] bg-[#126b333f] p-2 rounded-xl">
          <div className="border flex justify-center items-center border-[#00D66F] w-[50px] h-[50px] rounded-xl">
            <PrgressIco />
          </div>
          <div>
            <h1 className="text-[#00D66F] font-semibold">
              In Progress
            </h1>
            <p className="text-[#8C88A3]">
              Your drink is being prepared
            </p>
          </div>
        </div>

        <p className="text-center pt-2 text-[#C9C6D6]">
          We'll update you when your order is ready
        </p>
      </div>
    </div>
  );
};

export default MyOrder;