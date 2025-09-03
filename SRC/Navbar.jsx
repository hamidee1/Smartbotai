import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-md shadow-sm px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-indigo-600">SmartBot AI</div>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-indigo-600 cursor-pointer">الرئيسية</li>
        <li className="hover:text-indigo-600 cursor-pointer">عنّا</li>
        <li className="hover:text-indigo-600 cursor-pointer">تواصل معنا</li>
      </ul>
    </nav>
  );
}
