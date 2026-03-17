"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Navigate from "@/components/shared/Navigate";
import ShopDetailsIco from "@/components/icon/ShopDetailsIco";
import Image1 from "../../../public/img/shopImage.png";
import LocationIco from "@/components/icon/LocationIco";
import DateIcon from "@/components/icon/DateIcon";
import Link from "next/link";
import { Navbar } from "@/components/shared/Navbar";

const Page = () => {
  const [activeTab, setActiveTab] = useState("queued");
  const [position, setPosition] = useState(0);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleMove = (clientX) => {
    if (!dragging) return;

    const rect = sliderRef.current.getBoundingClientRect();
    let newX = clientX - rect.left - 30;

    if (newX < 0) newX = 0;
    if (newX > rect.width - 60) newX = rect.width - 60;

    setPosition(newX);
  };

  return (
    <div className="px-3">
      <Navbar></Navbar>
      {/* Header */}
      <div className="flex items-center justify-between pt-24 pb-6">
        <div className="flex items-center gap-3">
          <Navigate />
          <h2 className="text-[16px] italic">Shifts Details</h2>
        </div>

        <Link href={'/venueDetails'}>
        <button className="border flex gap-2 border-[#822CE7] text-[#822CE7] px-4 py-2 rounded-full text-sm">
          <ShopDetailsIco /> Venue Details
        </button></Link>
      </div>

      {/* Venue Card */}
      <div className="bg-gradient-to-r from-[#1A0E2E] to-[#241046] p-4 rounded-2xl mb-6 flex justify-between items-center">
        <div className="flex gap-3">
          <Image
            className="w-[70px] h-[70px] object-cover rounded-2xl"
            src={Image1}
            alt="Logo"
          />

          <div>
            <h3 className="font-semibold text-[18px]">Margarita</h3>
            <p className="text-[#C9C6D6] text-[12px] flex gap-1 items-center">
              <LocationIco /> Austin, Texas, USA
            </p>

            <p className="text-[#C9C6D6] text-[12px] flex gap-1 items-center">
              <DateIcon /> 9th Feb 2026 • 8:30 PM — 2:30 AM
            </p>
          </div>
        </div>

        <div className="text-right text-sm">
          <p className="text-[#FFFFFF]">Shift Will End</p>
          <p className="font-semibold text-[#FFFFFF]">01:59:59</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab("queued")}
          className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all
        ${
          activeTab === "queued"
            ? "border-[#F97316] text-[#F97316] bg-[#1A0F2E]"
            : "border-[#F973161A]"
        }`}
        >
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center border-2
          ${activeTab === "queued" ? "border-[#F97316]" : "border-[#F973161A]"}`}
          >
            {activeTab === "queued" && (
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#F97316] to-[#F97316]" />
            )}
          </span>
          Queued [12]
        </button>

        <button
          onClick={() => setActiveTab("progress")}
          className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all
        ${
          activeTab === "progress"
            ? "border-[#22C55E] text-[#22C55E] bg-[#22C55E1A]"
            : "border-[#2A2448]"
        }`}
        >
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center border-2
          ${
            activeTab === "progress" ? "border-[#22C55E] " : "border-[#2A2448]"
          }`}
          >
            {activeTab === "progress" && (
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#22C55E] to-[#22C55E]" />
            )}
          </span>
          In Progress [12]
        </button>

        <button
          onClick={() => setActiveTab("pickup")}
          className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all
        ${
          activeTab === "pickup"
            ? "border-[#822CE7] text-[#822CE7] bg-[#822CE71A]"
            : "border-[#2A2448]"
        }`}
        >
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center border-2
          ${activeTab === "pickup" ? "border-[#822CE7]" : "border-[#2A2448]"}`}
          >
            {activeTab === "pickup" && (
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#822CE7] to-[#BB82FF]" />
            )}
          </span>
          Ready For Pickup [12]
        </button>

        <button
          onClick={() => setActiveTab("completed")}
          className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all
        ${
          activeTab === "completed"
            ? "border-[#3D8BFF] text-[#3D8BFF] bg-[#3D8BFF1A]"
            : "border-[#2A2448]"
        }`}
        >
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center border-2
          ${
            activeTab === "completed" ? "border-[#3D8BFF]" : "border-[#2A2448]"
          }`}
          >
            {activeTab === "completed" && (
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#3D8BFF] to-[#3D8BFF]" />
            )}
          </span>
          Completed [12]
        </button>

        <button
          onClick={() => setActiveTab("cancelled")}
          className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all
        ${
          activeTab === "cancelled"
            ? "border-[#EF4444] text-[#EF4444] bg-[#EF44441A]"
            : "border-[#2A2448]"
        }`}
        >
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center border-2
          ${
            activeTab === "cancelled" ? "border-[#EF4444]" : "border-[#2A2448]"
          }`}
          >
            {activeTab === "cancelled" && (
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#EF4444] to-[#EF4444]" />
            )}
          </span>
          Cancelled [12]
        </button>
      </div>

      {/* Tab Content */}

      {activeTab === "queued" && (
        <div>
          <div className="bg-[#22C55E] text-white rounded-2xl p-4 mb-5">
            <div className="flex justify-between mb-3">
              <div>
                <p className="text-sm opacity-80">Order Code</p>
                <h3 className="text-xl font-bold">A44</h3>
              </div>

              <div className="text-right">
                <p className="text-sm opacity-80">Placed At</p>
                <p>8:45 PM</p>
              </div>
            </div>

            <div className="border-t border-white/40 pt-3 text-sm">
              <div className="flex justify-between mb-2">
                <div>
                  <p className="italic">Mojito</p>
                  <p className="opacity-80">Quantity: 1</p>
                </div>
                <p>$13</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p>Old Fashioned</p>
                  <p className="opacity-80 ">Quantity: 2</p>
                </div>
                <p>$26</p>
              </div>
            </div>

            <div className="flex border-t border-white/40 pt-3 gap-3 mt-4">
              <button className="flex-1 bg-[#FFFFFF] text-black py-2 rounded-full">
                Mark Unavailable
              </button>
              <button className="flex-1 bg-[#FFFFFF] text-black py-2 rounded-full">
                Start Making
              </button>
            </div>
          </div>

          <div className="bg-[#FFB020] text-white rounded-2xl p-4 mb-5">
            <div className="flex justify-between mb-3">
              <div>
                <p className="text-sm opacity-80">Order Code</p>
                <h3 className="text-xl font-bold">A44</h3>
              </div>

              <div className="text-right">
                <p className="text-sm opacity-80">Placed At</p>
                <p>8:45 PM</p>
              </div>
            </div>

            <div className="border-t border-white/40 pt-3 text-sm">
              <div className="flex justify-between mb-2">
                <div>
                  <p className="italic">Mojito</p>
                  <p className="opacity-80">Quantity: 1</p>
                </div>
                <p>$13</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p>Old Fashioned</p>
                  <p className="opacity-80 ">Quantity: 2</p>
                </div>
                <p>$26</p>
              </div>
            </div>

            <div className="flex border-t border-white/40 pt-3 gap-3 mt-4">
              <button className="flex-1 bg-[#FFFFFF] text-black py-2 rounded-full">
                Mark Unavailable
              </button>
              <button className="flex-1 bg-[#FFFFFF] text-black py-2 rounded-full">
                Start Making
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "progress" && (
        <div>
          <div className="bg-[#822CE7] text-white rounded-2xl p-4 mb-5">
            <div className="flex justify-between mb-3">
              <div>
                <p className="text-sm opacity-80">Order Code</p>
                <h3 className="text-xl font-bold">A44</h3>
              </div>

              <div className="text-right">
                <p className="text-sm opacity-80">Placed At</p>
                <p>8:45 PM</p>
              </div>
            </div>

            <div className="border-t border-white/40 pt-3 text-sm">
              <div className="flex justify-between mb-2">
                <div>
                  <p className="italic">Mojito</p>
                  <p className="opacity-80">Quantity: 1</p>
                </div>
                <p>$13</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p>Old Fashioned</p>
                  <p className="opacity-80 ">Quantity: 2</p>
                </div>
                <p>$26</p>
              </div>
            </div>

            <div className="w-full border-t border-white/40 pt-3 gap-3 mt-4">
              <button className=" bg-[#FFFFFF] w-full text-black py-2 rounded-full">
                Ready for pickup
              </button>
            </div>
          </div>

          <div className="bg-[#EF4444] text-white rounded-2xl p-4 mb-5">
            <div className="flex justify-between mb-3">
              <div>
                <p className="text-sm opacity-80">Order Code</p>
                <h3 className="text-xl font-bold">A44</h3>
              </div>

              <div className="text-right">
                <p className="text-sm opacity-80">Placed At</p>
                <p>8:45 PM</p>
              </div>
            </div>

            <div className="border-t border-white/40 pt-3 text-sm">
              <div className="flex justify-between mb-2">
                <div>
                  <p className="italic">Mojito</p>
                  <p className="opacity-80">Quantity: 1</p>
                </div>
                <p>$13</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p>Old Fashioned</p>
                  <p className="opacity-80 ">Quantity: 2</p>
                </div>
                <p>$26</p>
              </div>
            </div>

            <div className="w-full border-t border-white/40 pt-3 gap-3 mt-4">
              <button className=" bg-[#FFFFFF] w-full text-black py-2 rounded-full">
                Ready for pickup
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "pickup" && (
        <div>
          <div className="bg-[#3B82F6] text-white rounded-2xl p-4 mb-5">
            <div className="flex justify-between mb-3">
              <div>
                <p className="text-sm opacity-80">Order Code</p>
                <h3 className="text-xl font-bold">A44</h3>
              </div>

              <div className="text-right">
                <p className="text-sm opacity-80">Placed At</p>
                <p>8:45 PM</p>
              </div>
            </div>

            <div className="border-t border-white/40 pt-3 text-sm">
              <div className="flex justify-between mb-2">
                <div>
                  <p className="italic">Mojito</p>
                  <p className="opacity-80">Quantity: 1</p>
                </div>
                <p>$13</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p>Old Fashioned</p>
                  <p className="opacity-80 ">Quantity: 2</p>
                </div>
                <p>$26</p>
              </div>
            </div>

            <div className="w-full border-t border-white/40 pt-3 gap-3 mt-4">
              <div
                ref={sliderRef}
                className="relative bg-[#FFFFFF] h-11 rounded-full flex items-center px-2 overflow-hidden"
              >
                <span className="absolute inset-0 flex items-center justify-center text-gray-700 font-medium">
                  Slide to confirm
                </span>

                <div
                  onMouseDown={() => setDragging(true)}
                  onMouseUp={() => setDragging(false)}
                  onMouseLeave={() => setDragging(false)}
                  onMouseMove={(e) => handleMove(e.clientX)}
                  onTouchStart={() => setDragging(true)}
                  onTouchEnd={() => setDragging(false)}
                  onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                  style={{ left: position }}
                  className="absolute w-14 h-11 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer transition-all duration-200"
                >
                  Slide
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "completed" && (
        <>
          <div>
            <div className="bg-[#EF4444] text-white rounded-2xl p-4 mb-5">
              <div className="flex justify-between mb-3">
                <div>
                  <p className="text-sm opacity-80">Order Code</p>
                  <h3 className="text-xl font-bold">A44</h3>
                </div>

                <div className="text-right">
                  <p className="text-sm opacity-80">Placed At</p>
                  <p>8:45 PM</p>
                </div>
              </div>

              <div className="border-t pb-3 border-white/40 pt-3 text-sm">
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="italic">Mojito</p>
                    <p className="opacity-80">Quantity: 1</p>
                  </div>
                  <p>$13</p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p>Old Fashioned</p>
                    <p className="opacity-80 ">Quantity: 2</p>
                  </div>
                  <p>$26</p>
                </div>
              </div>

              <div className="flex border-t border-white/40 pt-3 justify-between mb-3">
                <div>
                  <p className="text-sm opacity-80">Total Quantity</p>
                </div>

                <div className="text-right">
                  <p className="text-sm opacity-80">20x</p>
                </div>
              </div>

              <div className="flex border border-white/40 p-2 rounded-xl justify-between mb-3">
                <div>
                  <p className="text-sm">Number of Tips</p>
                  <h3 className="">17x</h3>
                </div>

                <div className="text-right">
                  <p className="text-sm opacity-80">2x</p>
                  <p>$14.8</p>
                </div>
              </div>

              <div className="w-full  gap-3 mt-4">
                <button className=" border brder-white w-full  py-2 rounded-full">
                  Ready for pickup
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#84CC16] text-white rounded-2xl p-4 mb-5">
              <div className="flex justify-between mb-3">
                <div>
                  <p className="text-sm opacity-80">Order Code</p>
                  <h3 className="text-xl font-bold">A44</h3>
                </div>

                <div className="text-right">
                  <p className="text-sm opacity-80">Placed At</p>
                  <p>8:45 PM</p>
                </div>
              </div>

              <div className="border-t pb-3 border-white/40 pt-3 text-sm">
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="italic">Mojito</p>
                    <p className="opacity-80">Quantity: 1</p>
                  </div>
                  <p>$13</p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p>Old Fashioned</p>
                    <p className="opacity-80 ">Quantity: 2</p>
                  </div>
                  <p>$26</p>
                </div>
              </div>

              <div className="flex border-t border-white/40 pt-3 justify-between mb-3">
                <div>
                  <p className="text-sm opacity-80">Total Quantity</p>
                </div>

                <div className="text-right">
                  <p className="text-sm opacity-80">20x</p>
                </div>
              </div>

              <div className="flex border border-white/40 p-2 rounded-xl justify-between mb-3">
                <div>
                  <p className="text-sm">Number of Tips</p>
                  <h3 className="">17x</h3>
                </div>

                <div className="text-right">
                  <p className="text-sm opacity-80">2x</p>
                  <p>$14.8</p>
                </div>
              </div>

              <div className="w-full  gap-3 mt-4">
                <button className=" border brder-white w-full  py-2 rounded-full">
                  Ready for pickup
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {activeTab === "cancelled" && (
        <>
          <div>
            <div className="bg-[#EC4899] text-white rounded-2xl p-4 mb-5">
              <div className="flex justify-between mb-3">
                <div>
                  <p className="text-sm opacity-80">Order Code</p>
                  <h3 className="text-xl font-bold">A44</h3>
                </div>

                <div className="text-right">
                  <p className="text-sm opacity-80">Placed At</p>
                  <p>8:45 PM</p>
                </div>
              </div>

              <div className="border-t pb-3 border-white/40 pt-3 text-sm">
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="italic">Mojito</p>
                    <p className="opacity-80">Quantity: 1</p>
                  </div>
                  <p>$13</p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p>Old Fashioned</p>
                    <p className="opacity-80 ">Quantity: 2</p>
                  </div>
                  <p>$26</p>
                </div>
              </div>

              <div className="flex border-t border-white/40 pt-3 justify-between mb-3">
                <div>
                  <p className="text-sm opacity-80">Total Quantity</p>
                </div>

                <div className="text-right">
                  <p className="text-sm opacity-80">20x</p>
                </div>
              </div>

              <div className="flex border border-white/40 p-2 rounded-xl justify-between mb-3">
                <div>
                  <p className="text-sm">Number of Tips</p>
                  <h3 className="">17x</h3>
                </div>

                <div className="text-right">
                  <p className="text-sm opacity-80">2x</p>
                  <p>$14.8</p>
                </div>
              </div>

              <div className="w-full  gap-3 mt-4">
                <button className=" border brder-white w-full  py-2 rounded-full">
               Marked Unavailable & Refunded
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#0EA5E9] text-white rounded-2xl p-4 mb-5">
              <div className="flex justify-between mb-3">
                <div>
                  <p className="text-sm opacity-80">Order Code</p>
                  <h3 className="text-xl font-bold">A44</h3>
                </div>

                <div className="text-right">
                  <p className="text-sm opacity-80">Placed At</p>
                  <p>8:45 PM</p>
                </div>
              </div>

              <div className="border-t pb-3 border-white/40 pt-3 text-sm">
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="italic">Mojito</p>
                    <p className="opacity-80">Quantity: 1</p>
                  </div>
                  <p>$13</p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p>Old Fashioned</p>
                    <p className="opacity-80 ">Quantity: 2</p>
                  </div>
                  <p>$26</p>
                </div>
              </div>

              <div className="flex border-t border-white/40 pt-3 justify-between mb-3">
                <div>
                  <p className="text-sm opacity-80">Total Quantity</p>
                </div>

                <div className="text-right">
                  <p className="text-sm opacity-80">20x</p>
                </div>
              </div>

              <div className="flex border border-white/40 p-2 rounded-xl justify-between mb-3">
                <div>
                  <p className="text-sm">Number of Tips</p>
                  <h3 className="">17x</h3>
                </div>

                <div className="text-right">
                  <p className="text-sm opacity-80">2x</p>
                  <p>$14.8</p>
                </div>
              </div>

              <div className="w-full  gap-3 mt-4">
                
                <button className=" border brder-white w-full  py-2 rounded-full">
                  Marked Unavailable & Refunded
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
