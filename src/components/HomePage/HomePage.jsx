"use client";

import { useState } from "react";
import Image from "next/image";
import Image1 from "../../../public/img/shopImage.png";
import Image3 from "../../../public/img/mojito.png";
import Image2 from "../../../public/img/oldFashioned.png";
import Plus from "../icon/Plus";
import Arrow from "../icon/Arrow";
import Link from "next/link";
const categories = ["Cocktails", "Wine", "Beer", "Spin"];

const items = [
  {
    id: 1,
    name: "Mojito",
    desc: "Rum, mint, lime, soda",
    price: "$13",
    category: "Cocktails",
    img: Image3,
  },
  {
    id: 2,
    name: "Old Fashioned",
    desc: "Bourbon, bitters, orange",
    price: "$13",
    category: "Cocktails",
    img: Image2,
  },
  {
    id: 3,
    name: "Red Wine",
    desc: "Dry red grapes",
    price: "$18",
    category: "Wine",
    img: Image2,
  },
];

export default function HomePage() {
  const [active, setActive] = useState("Cocktails");

  const filtered = items.filter((item) => item.category === active);

  return (
    <div className="pt-16 px-4 pb-24">
      {/* Top Bar Card */}
      <div className="mt-6 bg-[#1A0E2E] rounded-2xl p-4 shadow-lg border border-[#2A2448]">
      <Link href={'/shopDetails'}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="  flex items-center justify-center">
              <Image
                className="w-[70px] h-[70px] object-cover rounded-2xl"
                src={Image1}
                alt={"Logo"}
                width={100}
                height={100}
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg text-white font-semibold">
                Copper Alley Bar
              </h2>
              <span className="text-[#22C55E] bg-[#22C55E33] p-1 rounded-full px-3 text-sm ">
                • Open
              </span>
              <p className="text-gray-400 text-sm">Austin, Texas, USA</p>
            </div>
          </div>
          <Arrow></Arrow>
        </div></Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mt-6 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
              active === cat
                ? "bg-gradient-to-tr from-[#822CE7] to-[#BB82FF] text-white shadow-md"
                : "bg-[#1E1233] text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="mt-6 space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-[#1A0E2E] p-4 rounded-2xl border border-[#2A2448] shadow-md"
          >
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#FEE2E2] rounded-xl flex items-center justify-center overflow-hidden">
                <Image src={item.img} alt={item.name} width={60} height={60} />
              </div>
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-[#C9C6D6] text-sm">{item.desc}</p>
                <p className="mt-1 font-bold">{item.price}</p>
              </div>
            </div>

           <Link href={'/itemDetails'}>
            <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#822CE7] to-[#BB82FF] flex items-center justify-center text-xl font-bold">
              <Plus></Plus>
            </button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
