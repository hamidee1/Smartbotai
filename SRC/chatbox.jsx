import React, { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "مرحباً 👋 أنا SmartBot AI، كيف أقدر أساعدك؟" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "عذراً، لم أفهم 😅";

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ حدث خطأ أثناء الاتصال بالخادم." },
      ]);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-4">
      <div className="h-80 overflow-y-auto space-y-3 mb-4 p-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl max-w-xs ${
              msg.sender === "user"
                ? "ml-auto bg-indigo-500 text-white"
                : "mr-auto bg-gray-100 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="اكتب رسالتك..."
          className="flex-grow border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
        >
          إرسال
        </button>
      </div>
    </div>
  );
}
