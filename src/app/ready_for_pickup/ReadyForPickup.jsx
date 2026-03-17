"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const ReadyForPickup = () => {
  const router = useRouter();
  const [position, setPosition] = useState(0);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleMove = (clientX) => {
    if (!dragging) return;

    const rect = sliderRef.current.getBoundingClientRect();
    let newX = clientX - rect.left - 28;

    const max = rect.width - 56;

    if (newX < 0) newX = 0;
    if (newX > max) newX = max;

    setPosition(newX);
  };

  const handleEnd = () => {
    setDragging(false);

    const rect = sliderRef.current.getBoundingClientRect();
    const max = rect.width - 56;

    // 👉 90%+ = complete
    if (position >= max * 0.9) {
      setPosition(max);

      setTimeout(() => {
        router.push("/completeOrder");
      }, 200);
    } else {
      // 👉 otherwise smooth reset
      setPosition(0);
    }
  };

  return (
    <div className="min-h-screen bg-[#2DBE60] text-white flex flex-col justify-between p-6">
      
      {/* Top Title */}
      <h1 className="text-center text-lg italic">
        Ready for pickup
      </h1>

      {/* Center Code */}
      <div className="text-center">
        <h1 className="text-7xl font-bold tracking-widest">
          A44
        </h1>
        <p className="text-xl mt-3 opacity-90">
          Pickup Code
        </p>
      </div>

      {/* Bottom */}
      <div>
        <div
          ref={sliderRef}
          className="relative bg-[#D9D9D9] h-14 rounded-full flex items-center px-2 overflow-hidden"
        >
          <span className="absolute inset-0 flex items-center justify-center text-gray-700 font-medium">
            Slide to confirm
          </span>

          <div
            onMouseDown={() => setDragging(true)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onMouseMove={(e) => handleMove(e.clientX)}
            onTouchStart={() => setDragging(true)}
            onTouchEnd={handleEnd}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            style={{
              left: position,
              transition: dragging ? "none" : "all 0.3s ease",
            }}
            className="absolute w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer"
          >
            Slide
          </div>
        </div>

        <p className="text-center mt-4 text-sm opacity-80">
          • Copper Alley Bar
        </p>
      </div>
    </div>
  );
};

export default ReadyForPickup;