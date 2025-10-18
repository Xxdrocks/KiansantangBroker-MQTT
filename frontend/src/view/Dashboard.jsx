import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [coords, setCoords] = useState(null);
  const [city, setCity] = useState("Mengambil lokasi...");
  const [error, setError] = useState("");

  useEffect(() => {
    loadData();

    const interval = setInterval(loadData, 2000);
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/inputemission");
      const last = res.data[res.data.length - 1];
      setData(last);
    } catch (err) {
      console.error("Gagal mengambil data:", err);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Browser tidak mendukung geolokasi.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ latitude, longitude });
        fetchCityName(latitude, longitude);
      },
      (err) => setError("Tidak bisa mendapatkan lokasi: " + err.message)
    );
  }, []);

  const fetchCityName = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await res.json();
      const { city, town, village, state, country } = data.address || {};
      setCity(`${city || town || village || state || "Tidak diketahui"}, ${country || ""}`);
    } catch {
      setCity("Gagal memuat lokasi");
    }
  };

  const getPlugImage = (co2) => {
    if (co2 < 100) return "/images/plugswhite.png";
    if (co2 < 200) return "/images/plugsyellow.png";
    if (co2 < 300) return "/images/plugsorange.png";
    return "/images/plugsred.png";
  };

  const getStatus = (value) => {
    if (value < 50) return "Aman";
    if (value < 200) return "Sedang";
    if (value < 300) return "Bahaya";
    return "Kritis";
  };

  if (!data) {
    return (
      <div className="bg-[#0E1014] min-h-screen flex items-center justify-center text-white text-xl">
        Memuat data...
      </div>
    );
  }

  const devices = [
    { id: 1, name: "Power", value: data.power },
    { id: 2, name: "Suhu Ruangan", value: data.tempAmbient },
    { id: 3, name: "Suhu Objek", value: data.tempObject },
    { id: 4, name: "Frekuensi", value: data.frequency },
  ];

  const totalCO2 = data.CO2 ?? 0;

  return (
    <div className="bg-[#0E1014] min-h-screen text-white px-4 sm:px-6 py-6 sm:py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard Sensor mu</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-[#6A759B] to-[#21273D] rounded-2xl p-6 shadow-lg relative overflow-hidden min-h-[240px] sm:h-[280px]">
          <div className="relative z-10">
            <div className="flex items-center bg-white text-black rounded-full px-4 py-1 w-fit text-sm">
              <img
                src="/icon/location.png"
                alt="loc"
                className="w-4 h-4 mr-2"
              />
              <p className="font-semibold">
                {error ? error : city}
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium">Carbon Emission</p>
              <p className="text-xs text-gray-300 mt-1">Sekarang</p>
              <h1 className="text-[70px] sm:text-[90px] font-bold mt-3 leading-none">
                {totalCO2.toFixed(1)} CO₂
              </h1>
            </div>
          </div>

          <img
            src="/images/thunder.png"
            alt="thunder"
            className="absolute top-0 right-0 w-40 sm:w-56 opacity-40"
          />
        </div>

        <div className="bg-[#1b1d22] rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-6">Today's Highlight</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {devices.map((d) => (
              <div
                key={d.id}
                className="flex flex-col items-center bg-[#2a2d35] rounded-2xl py-2 px-3 hover:scale-105 transition-all"
              >
                <img
                  src={getPlugImage(d.value)}
                  alt={d.name}
                  className="w-16 mb-2"
                />
                <p className="text-sm font-semibold text-center">{d.name}</p>
                <p className="text-xs text-gray-400 text-center">
                  {getStatus(d.value)}
                </p>
                <p className="text-lg font-bold mt-1">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
