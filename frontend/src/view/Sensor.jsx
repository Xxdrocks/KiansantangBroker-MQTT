import React from "react";
import { motion } from "framer-motion";
import { Activity, Gauge, Cloud } from "lucide-react";
import { useData } from "../context/DataContext";

const Sensor = () => {
  const { devices } = useData();

  const totalSensor = devices.length;
  const totalEmission = devices.reduce((acc, d) => {
    const val = parseFloat(d.monthly);
    return acc + (isNaN(val) ? 0 : val);
  }, 0);

  return (
    <div className="p-10 min-h-screen bg-[#0E1014] text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Sensor</h1>

      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-[#171B23]/80 rounded-2xl p-5 text-center">
          <p className="text-gray-400 text-sm">Total Sensor</p>
          <p className="text-2xl font-bold">{totalSensor}</p>
        </div>
        <div className="bg-[#171B23]/80 rounded-2xl p-5 text-center">
          <p className="text-gray-400 text-sm">Jenis Sensor</p>
          <p className="text-2xl font-bold text-yellow-400">
            {devices.length > 0 ? devices[0].sensor : "-"}
          </p>
        </div>
        <div className="bg-[#171B23]/80 rounded-2xl p-5 text-center">
          <p className="text-gray-400 text-sm">Total Emisi Bulanan</p>
          <p className="text-2xl font-bold text-green-400">
            {totalEmission.toFixed(1)} CO₂
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl bg-[#171B23]/80 shadow-lg">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-300 text-sm uppercase border-b border-gray-700">
              <th className="py-4 px-6 font-semibold">Sensor</th>
              <th className="py-4 px-6 font-semibold">Perangkat</th>
              <th className="py-4 px-6 font-semibold">Harian</th>
              <th className="py-4 px-6 font-semibold">Mingguan</th>
              <th className="py-4 px-6 font-semibold">Bulanan</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((item, i) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`border-b border-gray-700 hover:bg-[#1C222E]/60 transition ${
                  i % 2 === 0 ? "bg-[#141821]/60" : ""
                }`}
              >
                <td className="py-4 px-6">{item.sensor}</td>
                <td className="py-4 px-6">{item.name}</td>
                <td className="py-4 px-6">{item.daily}</td>
                <td className="py-4 px-6">{item.weekly}</td>
                <td className="py-4 px-6">{item.monthly}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sensor;
