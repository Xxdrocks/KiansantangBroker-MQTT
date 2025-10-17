import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0E1014] text-gray-300 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    
        <div>
          <h1 className="text-white text-2xl font-bold mb-2">
            Kiansantang Broker MQTT
          </h1>
          <p className="text-sm text-gray-400 mb-4">
            Platform monitoring energi listrik berbasis IoT yang membantu
            pengguna memantau konsumsi daya, efisiensi energi, dan status
            perangkat secara real-time.
          </p>
        </div>

    
        <div>
          <h2 className="text-white font-semibold mb-3">Navigasi Cepat</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/overview" className="hover:text-white">
                Overview
              </a>
            </li>
            <li>
              <a href="/devices" className="hover:text-white">
                Devices
              </a>
            </li>
            <li>
              <a href="/sensor" className="hover:text-white">
                Sensor Data
              </a>
            </li>
            <li>
              <a href="/notification" className="hover:text-white">
                Notification
              </a>
            </li>
            <li>
              <a href="/settings" className="hover:text-white">
                Settings
              </a>
            </li>
            <li>
              <a href="/profile" className="hover:text-white">
                Profile
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3">Halaman</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Beranda
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="/documentation" className="hover:text-white">
                Dokumentasi
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Kontak
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white">
                Bantuan / FAQ
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-white font-semibold mb-3">Email Kami</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <div className="flex flex-col space-y-1 mt-1">
                <a
                  href="mailto:hidayah@kiansantangbroker.com"
                  className="hover:text-white"
                >
                  hidayahmadillah@gmail.com
                </a>
                <a
                  href="mailto:khadafi@kiansantangbroker.com"
                  className="hover:text-white"
                >
                  alif1919hakims@gmail.com
                </a>
                <a
                  href="mailto:ramadhan@kiansantangbroker.com"
                  className="hover:text-white"
                >
                  fachribusinessacc@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-5 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center">
        <p>© 2025 Kiansantang Broker MQTT. All rights reserved.</p>
        <p>
          Created by{" "}
          <span className="text-white font-medium">Kiansantang Group</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
