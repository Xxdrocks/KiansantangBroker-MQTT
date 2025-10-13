import React, { useState } from "react";
import { Tv, Refrigerator, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const Devices = () => {
  const [devices, setDevices] = useState([
    {
      id: 1,
      name: "TV",
      sensor: "Carbon",
      status: true,
      daily: "150 kWh",
      weekly: "800 kWh",
      monthly: "3.2 MWh",
      icon: <Tv size={24} />,
    },
    {
      id: 2,
      name: "Kulkas",
      sensor: "Carbon",
      status: false,
      daily: "90 kWh",
      weekly: "650 kWh",
      monthly: "2.5 MWh",
      icon: <Refrigerator size={24} />,
    },
    {
      id: 3,
      name: "Lampu Ruang Tamu",
      sensor: "Carbon",
      status: true,
      daily: "50 kWh",
      weekly: "300 kWh",
      monthly: "1.1 MWh",
      icon: <Lightbulb size={24} />,
    },
  ]);

  const toggleDevice = (id) => {
    setDevices((prev) =>
      prev.map((device) =>
        device.id === id ? { ...device, status: !device.status } : device
      )
    );
  };

  return (
    <div className="p-10 min-h-screen bg-[#0E1014] text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Devices</h1>

       
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-[#171B23]/80 rounded-2xl p-4 text-center">
          <p className="text-gray-400 text-sm">Total Devices</p>
          <p className="text-2xl font-bold">{devices.length}</p>
        </div>
        <div className="bg-[#171B23]/80 rounded-2xl p-4 text-center">
          <p className="text-gray-400 text-sm">Active Devices</p>
          <p className="text-2xl font-bold text-green-400">
            {devices.filter((d) => d.status).length}
          </p>
        </div>
        <div className="bg-[#171B23]/80 rounded-2xl p-4 text-center">
          <p className="text-gray-400 text-sm">Inactive Devices</p>
          <p className="text-2xl font-bold text-red-400">
            {devices.filter((d) => !d.status).length}
          </p>
        </div>
      </div>

      {/* Tabel */}
      <div className="overflow-x-auto rounded-2xl bg-[#171B23]/80 shadow-lg">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-300 text-sm uppercase border-b border-gray-700">
              <th className="py-4 px-6 font-semibold">Perangkat</th>
              <th className="py-4 px-6 font-semibold">Sensor</th>
              <th className="py-4 px-6 font-semibold">Status</th>
              <th className="py-4 px-6 font-semibold">Daily</th>
              <th className="py-4 px-6 font-semibold">Weekly</th>
              <th className="py-4 px-6 font-semibold">Monthly</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, i) => (
              <motion.tr
                key={device.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`border-b border-gray-700 hover:bg-[#1C222E]/60 transition ${
                  i % 2 === 0 ? "bg-[#141821]/60" : ""
                }`}
              >
                <td className="py-4 px-6 flex items-center gap-3">
                  <span className="bg-[#222A3A] p-2 rounded-lg">
                    {device.icon}
                  </span>
                  {device.name}
                </td>
                <td className="py-4 px-6">{device.sensor}</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => toggleDevice(device.id)}
                    className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors ${
                      device.status ? "bg-green-500" : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 bg-white rounded-full transform transition ${
                        device.status ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </td>
                <td className="py-4 px-6 text-gray-300">{device.daily}</td>
                <td className="py-4 px-6 text-gray-300">{device.weekly}</td>
                <td className="py-4 px-6 text-gray-300">{device.monthly}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Devices;
