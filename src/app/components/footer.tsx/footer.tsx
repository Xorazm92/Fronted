import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="p-[40px] bg-amber-400 flex justify-between text-black">
      {/* Logo and Copyright Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-green-700 font-bold text-xl">HilalMart</span>
          </Link>
        </div>
        <p className="text-sm">HilalMart © 2021</p>
        <p className="text-sm">Barcha huquqlar kafolatlangan</p>
        {/* App Store Buttons */}
        <div className="flex gap-4">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <span>Get it on</span>
              <span className="font-bold">Google Play</span>
            </button>
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <span>Download on the</span>
              <span className="font-bold">App Store</span>
            </button>
          </a>
        </div>
      </div>

      {/* Foydali Havolalar Section */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">Foydali havolalar</h3>
        <Link href="/about" className="text-sm hover:underline">
          Biz haqimizda
        </Link>
        <Link href="/terms" className="text-sm hover:underline">
          Yordam markazi?
        </Link>
        <Link href="/conditions" className="text-sm hover:underline">
          Foydalanish shartlari
        </Link>
        <Link href="/privacy" className="text-sm hover:underline">
          Maxfiylik siyosati
        </Link>
      </div>

      {/* Biz Haqimizda Section */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">Biz haqimizda</h3>
        <p className="text-sm">
          Manzil: #214, G-dong, Lotte Castle, 347 JONG, Jongno-gu, Seoul, 03113,
          Crescent trade Itd
        </p>
        <p className="text-sm">Korxona nomi: Crescent trade Itd</p>
        <p className="text-sm">Korxona rahbari: DADAJONOV RAKHIMJON</p>
        <p className="text-sm">Registratsiya raqami: 433-62-00377</p>
        <p className="text-sm">
          Telefon raqami: 1833-2178 02-3670-6808
        </p>
      </div>
    </div>
  );
};