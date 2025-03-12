import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="p-[40px] flex items-center justify-between bg-amber-400">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <span className="text-green-700 font-bold text-xl">HilalMart</span>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-[500px] mx-4">
        <input
          type="text"
          placeholder="Qidirish"
          className="w-full p-2 rounded-lg border border-gray-300"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-[40px]">
        <Link href="/about" className="text-black hover:text-gray-700">
          Bog'lanish
        </Link>
        <Link href="/profile" className="text-black hover:text-gray-700">
          Payme
        </Link>
      </div>

      {/* Currency Selector */}
      <div className="flex items-center gap-2">
        <select className="p-2 rounded-lg border border-gray-300">
          <option value="UZS">UZS</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </div>
  );
};