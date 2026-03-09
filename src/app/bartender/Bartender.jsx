"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navigate from "@/components/shared/Navigate";
import Link from "next/link";

const Bartender = () => {
  const [selected, setSelected] = useState(null);
  const [showCustom, setShowCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [5, 10, 15, 20];

  return (
    <div className=" px-3">
      
      {/* Back Button */}
      <div className="flex items-center justify-between relative pt-6 pb-6">
        <Navigate></Navigate>
      </div>

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold">
          Tip Your Bartender
        </h1>
        <p className="text-sm text-[#A59FBF] mt-2">
          Show Your Appreciation
        </p>
      </div>

      {/* Amount Buttons */}
      <div className="space-y-4">
        {amounts.map((amt) => (
          <button
            key={amt}
            onClick={() => {
              setSelected(amt);
              setShowCustom(false);
            }}
            className={`w-full py-4 rounded-full border transition-all duration-300 ${
              selected === amt
                ? "bg-gradient-to-r from-purple-600 to-indigo-500 border-transparent"
                : "border-[#5B2C91] bg-[#1A0830]"
            }`}
          >
            ${amt}
          </button>
        ))}
      </div>

      {/* Custom Input */}
      {showCustom && (
        <div className="mt-6">
          <label className="text-sm text-white">
            Enter Tip Amount *
          </label>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            placeholder="Enter Your Amount"
            className="w-full mt-2 px-4 py-4 rounded-full bg-[#1A0830] border border-[#5B2C91] outline-none"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="mt-8 space-y-4">
        <div className="flex gap-4">
          <button
            onClick={() => {
              setShowCustom(true);
              setSelected(null);
            }}
            className=" py-4 rounded-full w-full 
            bg-gradient-to-br from-[#BB82FF] to-[#822CE7]
            shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            Custom
          </button>

         
            <Link className="w-full" href={'/'}><button className=" w-full py-4 rounded-full
            bg-gradient-to-br from-[#BB82FF] to-[#822CE7]
            shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300">
            Continue
          </button></Link>
          
        </div>

        <Link href={'/completeOrder'}><button className="w-full mt-6 py-4 rounded-full bg-[#E5E5E5] text-black">
          Skip & Continue Ordering
        </button></Link>
      </div>
    </div>
  );
};

export default Bartender;