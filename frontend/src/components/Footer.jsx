import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0E1014] text-gray-300 py-8 mt-10 border-t border-gray-800">
      {/* Gradient lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(16,185,129,0.1),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left - Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white tracking-wide">
            ⚡ Kiansantang Broker IoT
          </h2>
          <p className="text-sm text-gray-400">
            Smart Energy Monitoring Dashboard powered by MQTT
          </p>
        </div>

        {/* Middle - Social Links */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:support@kiansantang-iot.com"
            className="hover:text-green-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right - Copyright */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Kiansantang Energy Systems</span>.<br className="hidden md:block" /> 
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
