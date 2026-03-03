"use client";
import { useState } from "react";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import Mojito from "../../../public/img/mojito.png";
import OldFashioned from "../../../public/img/oldFashioned.png";
import LeftArray from "../icon/LeftArray";
import DeleteIco from "../icon/DeleteIco";
import Navigate from "../shared/Navigate";
import GoogleIco from "../icon/GoogleIco";
import AppleIco from "../icon/AppleIco";
import CardIco from "../icon/CardIco";
import RightMarkIco from "../icon/RightMarkIco";
import RIghtArray from "../icon/RIghtArray";
import Link from "next/link";

export default function CheckoutPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Mojito",
      desc: "Rum, mint, lime, soda",
      price: 52,
      qty: 4,
      stock: true,
      img: Mojito,
    },
    {
      id: 2,
      name: "Old Fashioned",
      desc: "Bourbon, bitters, orange",
      price: 48,
      qty: 2,
      stock: false,
      img: OldFashioned,
    },
  ]);

  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="px-4   ">
      {/* Header */}
      <div className="flex items-center justify-between relative pt-6 pb-6">
        <Navigate></Navigate>
        <h1 className="text-lg font-semibold">Checkout</h1>
        <div></div>
      </div>

      {/* Cart Items */}
      <div className=" space-y-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-[#1A0E2E] p-4 rounded-2xl border border-[#2A2448]"
          >
            <div className="flex justify-between">
              <div className="flex gap-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="rounded-xl bg-[#FEE2E2]"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-[#C9C6D6]">{item.desc}</p>
                  <p className="mt-1 font-bold">${item.price}</p>
                </div>
              </div>

              <button className="w-[40px] h-[40px] rounded-full bg-[#471b1bc4] flex justify-center items-center">
                <DeleteIco></DeleteIco>
              </button>
            </div>

            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => decrease(item.id)}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#822CE7] to-[#BB82FF]"
                >
                  −
                </button>

                <span className="text-lg font-semibold">{item.qty}</span>

                <button
                  onClick={() => increase(item.id)}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#822CE7] to-[#BB82FF]"
                >
                  +
                </button>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  item.stock
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                • {item.stock ? "In Stock" : "Out Of Stock"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Fixed Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-[#822CE7] p-6 rounded-t-3xl shadow-xl">
        <div className="flex justify-between text-white mb-4">
          <span>Total</span>
          <span className="font-bold text-lg">${total}</span>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-white text-[#822CE7] py-3 rounded-full font-semibold"
        >
          Checkout
        </button>
        <p className="text-center pt-3">
          Powered by Stripe • No signup required
        </p>
      </div>

      {/* Slide Up Modal */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          showModal ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowModal(false)}
      />

      <div
        className={`fixed bottom-0 left-0 w-full bg-white  p-3 transition-transform duration-500 ${
          showModal ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          onClick={() => setShowModal(false)}
          className="mb-4 text-gray-500"
        >
          ✕
        </button>

        <div className="space-y-4">
          <div className="w-full flex justify-center items-center gap-2 bg-black text-white py-2 rounded-lg">
            <GoogleIco></GoogleIco> Pay
          </div>
          <div className="w-full flex justify-center items-center gap-2 bg-black text-white py-2 rounded-lg">
            <AppleIco></AppleIco> Pay
          </div>
          <div className="border flex items-center gap-2 p-3 rounded-lg text-gray-600">
            <CardIco></CardIco> Card
          </div>
          <button
            onClick={() => {
              setShowModal(false);
              setShowSuccess(true);
            }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Pay ${total.toFixed(2)}
          </button>
        </div>
      </div>
      {/* Success Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          showSuccess ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowSuccess(false)}
      />

      {/* Success Slide Up Modal */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white p-3  transition-transform duration-500 ${
          showSuccess ? "translate-y-0" : "translate-y-full"
        }`}
      >
           <button
            onClick={() => setShowSuccess(false)}
            className="text-gray-500 text-xl"
          >
            ✕
          </button>
        <div className="items-center mb-6">
        <div className="flex justify-center">
            <h2 className="text-2xl flex gap-1 items-center font-bold text-gray-800">
            <RIghtArray></RIghtArray> link
          </h2>
        </div>
       
        </div>

        <div className="text-center py-6">
          <div className="flex justify-center"><RightMarkIco></RightMarkIco></div>
          <h3 className="text-3xl mt-3 font-bold text-gray-800">Success</h3>
          <p className="text-gray-600 mt-2">Your payment is successfully completed</p>
        </div>

        <Link href={'/myOrder'}><button
          onClick={() => setShowSuccess(false)}
          className="w-full bg-[#00D66F] text-black py-3 rounded-lg font-semibold"
        >
         See my orders 
        </button></Link>
      </div>
    </div>
  );
}
