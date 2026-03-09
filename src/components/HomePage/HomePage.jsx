"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Image1 from "../../../public/img/shopImage.png";
import Image3 from "../../../public/img/mojito.png";
import Image2 from "../../../public/img/oldFashioned.png";
import Plus from "../icon/Plus";
import Arrow from "../icon/Arrow";
import Link from "next/link";
import CheckoutIco from "../icon/CheckoutIco";
import ItemIco from "../icon/ItemIco";
import LocationIco from "../icon/LocationIco";

const categories = ["Cocktails", "Wine", "Beer", "Spin"];

const items = [
  {
    id: 1,
    name: "Mojito",
    desc: "Rum, mint, lime, soda",
    price: 13,
    category: "Cocktails",
    img: Image3,
    checkout: true,
  },
  {
    id: 2,
    name: "Old Fashioned",
    desc: "Bourbon, bitters, orange",
    price: 13,
    category: "Cocktails",
    img: Image2,
    checkout: true,
  },
  {
    id: 5,
    name: "Old Fashioned",
    desc: "Bourbon, bitters, orange",
    price: 13,
    category: "Cocktails",
    img: Image2,
    checkout: false,
  },
  {
    id: 6,
    name: "Old Fashioned",
    desc: "Bourbon, bitters, orange",
    price: 13,
    category: "Cocktails",
    img: Image2,
    checkout: false,
  },
  {
    id: 3,
    name: "Red Wine",
    desc: "Dry red grapes",
    price: 18,
    category: "Wine",
    img: Image2,
    checkout: false,
  },
];

export default function HomePage() {
  const [active, setActive] = useState("Cocktails");

  const filtered = items.filter((item) => item.category === active);

  // checkout true items
  const cartItems = items.filter((item) => item.checkout === true);

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [cartItems]);

  return (
    <div className="pt-16 px-4 pb-40">

      {/* Top Card */}
      <div className="mt-6 bg-[#1A0E2E] rounded-2xl p-4 shadow-lg border border-[#2A2448]">
        <Link href={"/shopDetails"}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                className="w-[70px] h-[70px] object-cover rounded-2xl"
                src={Image1}
                alt="Logo"
              />
              <div className="space-y-2">
                <h2 className="text-[17px]  text-white font-semibold">
                  Copper Alley Bar
                </h2>
                <span className="text-[#22C55E] bg-[#22C55E33] py-[4px] px-[12px] rounded-full text-sm">
                  • Open
                </span>
                <p className="text-gray-400 text-[12px] flex gap-1 items-center"><LocationIco></LocationIco> Austin, Texas, USA</p>
              </div>
            </div>
            <Arrow />
          </div>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mt-6 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 text-[16px] py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
              active === cat
                ? "bg-gradient-to-tr from-[#822CE7] to-[#BB82FF] text-white shadow-md"
                : "bg-[#1E1233] text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="mt-6 space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-[#1A0E2E] p-4 rounded-2xl border border-[#2A2448]"
          >
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#FEE2E2] rounded-xl flex items-center justify-center">
                <Image src={item.img} alt={item.name} width={60} height={60} />
              </div>
              <div>
                <h3 className="text-[16px]">{item.name}</h3>
                <p className="text-[#C9C6D6] text-[13px]">{item.desc}</p>
                <p className="mt-1 font-bold text-[15px] italic">${item.price}</p>
              </div>
            </div>

            {/* Conditional Button */}
            {item.checkout ? (
              <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#822CE7] to-[#BB82FF] flex items-center justify-center">
                <CheckoutIco />
              </button>
            ) : (
              <Link href={"/itemDetails"}>
                <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#822CE7] to-[#BB82FF] flex items-center justify-center">
                  <Plus />
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Fixed Bottom Checkout Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-[#822CE7] px-6 py-4 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="border border-white w-[45px] h-[45px] flex justify-center items-center rounded-lg">
              <ItemIco></ItemIco>
            </div>
            <div>
              <p className="text-[16px] font-bold text-white">
              {cartItems.length} Items
            </p>
            <p className="text-[16px] font-bold text-[#1D1733]">
              ${total}
            </p>
            </div>
          </div>

         <Link href={'/checkout'}> <button className="bg-white text-[#822CE7] px-6 py-2 rounded-full font-semibold">
            Checkout
          </button></Link>
        </div>
      )}
    </div>
  );
}