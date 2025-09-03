import React from "react";
import Navbar from "./Navbar";
import ChatBox from "./ChatBox";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          SmartBot AI
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
          اسأل أي شيء ودع الذكاء الاصطناعي يجيبك بسرعة وبدقة 🚀
        </p>
        <ChatBox />
      </main>
      <Footer />
    </div>
  );
}
