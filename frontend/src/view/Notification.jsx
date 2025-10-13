import React from "react";
import { useData } from "../context/DataContext";

const Notification = () => {
  const { devices } = useData();

  // Fungsi untuk menentukan level notif berdasarkan konsumsi harian
  const getLevel = (daily) => {
    const value = parseFloat(daily); // "150 kWh" -> 150
    if (value <= 100) return "Aman";
    if (value <= 200) return "Sedang";
    if (value <= 300) return "Bahaya";
    return "Kritis";
  };

  // Fungsi untuk mendapatkan warna sesuai level
  const getColor = (level) => {
    switch (level) {
      case "Aman":
        return "bg-green-500";
      case "Sedang":
        return "bg-yellow-500";
      case "Bahaya":
        return "bg-orange-500";
      case "Kritis":
        return "bg-red-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-10 min-h-screen text-white bg-[#0E1014]">
      <h1 className="text-3xl font-bold mb-8">Notification</h1>

      {/* Legend */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="font-semibold">Riwayat Notification</span>
        <div className="flex space-x-2">
          {["bg-green-500", "bg-yellow-500", "bg-orange-500", "bg-red-600"].map(
            (color, i) => (
              <div key={i} className={`${color} w-4 h-4 rounded-full`} />
            )
          )}
        </div>
      </div>

      {/* List Notifikasi */}
      <div className="space-y-4">
        {devices.map((device) => {
          const level = getLevel(device.daily);
          let message = "Perangkat berjalan normal dan suhu stabil.";
          if (level === "Sedang")
            message =
              "Perangkat mengonsumsi listrik lebih tinggi dari biasanya.";
          if (level === "Bahaya")
            message = "Konsumsi listrik melebihi batas aman, segera periksa.";
          if (level === "Kritis")
            message = "Konsumsi listrik sangat tinggi, berisiko korsleting!";

          return (
            <div
              key={device.id}
              className="flex justify-between items-center bg-[#1f2025]/90 px-5 py-4 rounded-2xl shadow hover:shadow-lg transition-shadow duration-200"
            >
              <div>
                <h3 className="font-semibold text-lg">{device.name}</h3>
                <p className="text-gray-400 text-sm">{message}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`text-sm font-semibold ${getColor(
                    level
                  )} px-3 py-1 rounded-full`}
                >
                  {level}
                </span>
                <span className="text-gray-400 text-sm">10m ago</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notification;
