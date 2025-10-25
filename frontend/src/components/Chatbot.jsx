import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAvlHay_snKrj7uCIm0bENZRx8S5O_6Dww");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const ChatbotCarbon = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Halo! Aku OxyBot, asisten pintar tentang emisi karbon, energi hijau, dan efek rumah kaca!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingText, setTypingText] = useState("");
  const isTypingRef = useRef(false); 

  const typeText = async (text) => {
    setTypingText("");
    let i = 0;
    isTypingRef.current = true;

    const interval = setInterval(() => {
      if (i < text.length) {
        setTypingText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setMessages((prev) => [...prev, { sender: "bot", text }]);
        setTypingText("");
        setLoading(false);
        isTypingRef.current = false; 

        setTimeout(() => {
          chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }, 15);
  };

  const getGeminiResponse = async (prompt) => {
    try {
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error("Error Gemini:", error);
      return "Maaf, aku mengalami kesalahan saat menjawab. 🌿";
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const botReply = await getGeminiResponse(input);
      await typeText(botReply);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Terjadi kesalahan. Silakan coba lagi." },
      ]);
      setLoading(false);
    }
  };

  return (
    <div className="w-[1000px] flex flex-col h-140 text-white font-poppins ">
      <div className="p-5 items-center flex flex-col justify-center gap-5">
        <img src="../images/chatbotlogo.png" alt="Logo" className="w-12" />
        <p className="text-sm text-[#E4EFE7]">
        Bagaimana lingkungan mu saat ini? 
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-green-600 text-white rounded-br-none"
                  : "bg-[#1C222E] text-gray-100 rounded-bl-none"
              }`}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: msg.text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"),
                }}
              />
            </div>
          </motion.div>
        ))}

        {typingText && (
          <div className="flex justify-start">
            <div className="bg-[#1C222E] text-gray-100 px-4 py-3 rounded-2xl text-sm rounded-bl-none max-w-[75%]">
              {typingText}
            </div>
          </div>
        )}

        {loading && !typingText && (
          <div className="flex justify-start">
            <div className="animate-pulse bg-[#1C222E] px-4 py-3 rounded-2xl text-sm text-gray-400">
              Biarkan aku berpikir...
            </div>
          </div>
        )}

      </div>

      <div className="p-4 flex items-center gap-3 relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Tulis pertanyaanmu..."
          className="flex-1 xl:px-4 p-8 py-2 bg-[#1C222E] border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none "
        />
        <button
          onClick={sendMessage}
          className="items-center flex"
        >
          <img src="../images/send.png" className="w-5 absolute right-10"/>
        </button>
      </div>
      
    </div>
  );
};

export default ChatbotCarbon;
