// src/view/Dashboard.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { devices } = useData();
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const getPlugImage = (kwh) => {
    if (kwh < 100) return "/images/plugswhite.png";
    else if (kwh < 200) return "/images/plugsyellow.png";
    else if (kwh < 300) return "/images/plugsorange.png";
    else return "/images/plugsred.png";
  };

  const getStatusLevel = (kwh) => {
    if (kwh < 100) return "Aman";
    if (kwh < 200) return "Sedang";
    if (kwh < 300) return "Bahaya";
    return "Kritis";
  };

  return (
    <div className="bg-[#0E1014] min-h-screen text-white px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {/* Tombol Login/Register/Logout */}
        {!token ? (
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white"
            >
              Register
            </button>
          </div>
        ) : (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white"
          >
            Logout
          </button>
        )}
      </div>

      {/* Bagian konten kamu sebelumnya tetap sama */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Carbon Emission */}
        <div className="bg-gradient-to-r from-[#6A759B] to-[#21273D] rounded-2xl p-6 shadow-lg relative overflow-hidden h-[280px]">
          <div className="flex flex-col z-10 relative">
            <div className="flex items-center bg-white text-black rounded-full px-4 py-1 w-fit">
              <img
                src="/icon/location.png"
                className="w-4 h-4 mr-2"
                alt="location"
              />
              <p className="text-[13px] font-semibold">Jakarta, Indonesia</p>
            </div>
            <div className="mt-8">
              <p className="text-[15px] font-medium">Carbon Emission</p>
              <p className="text-[12px] text-gray-300 mt-1">Now</p>
              <h1 className="text-[90px] font-bold mt-3 leading-none">
                {devices.reduce((sum, d) => sum + parseFloat(d.daily), 0)} kWh
              </h1>
            </div>
          </div>
          <img
            src="/images/thunder.png"
            className="absolute top-0 right-0 w-56 opacity-40"
            alt="thunder"
          />
        </div>

        {/* Today's Highlight */}
        <div className="bg-[#1b1d22] rounded-2xl p-6 shadow-md">
          <h2 className="text-[20px] font-semibold mb-6">Today's Highlight</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {devices.map((device) => {
              const kwhValue = parseFloat(device.daily);
              return (
                <div
                  key={device.id}
                  className="flex flex-col items-center bg-[#2a2d35] rounded-2xl py-4 px-3 hover:scale-105 transition-all"
                >
                  <img
                    src={getPlugImage(kwhValue)}
                    className="w-20 mb-2"
                    alt="plug icon"
                  />
                  <p className="text-[13px] font-semibold">{device.name}</p>
                  <p className="text-[12px] text-gray-400">
                    {getStatusLevel(kwhValue)}
                  </p>
                  <p className="text-[17px] font-bold mt-1">{device.daily}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 7 Days Forecast */}
      <div className="mt-8 bg-[#1b1d22] rounded-2xl p-6 shadow-md">
        <h2 className="text-[20px] font-semibold mb-5">7 Days Forecast</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {devices.map((device) => (
            <div
              key={device.id}
              className="flex justify-between items-center bg-[#2a2d35] rounded-2xl px-5 py-4 hover:bg-[#3a3d46] transition-all"
            >
              <div className="flex items-center">
                <img
                  src={getPlugImage(parseFloat(device.daily))}
                  className="w-10 h-auto mr-3"
                  alt="plug"
                />
                <div>
                  <p className="font-semibold">{device.daily}</p>
                  <p className="text-[12px] text-gray-400">
                    {getStatusLevel(parseFloat(device.daily))}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[12px]">{device.name}</p>
                <p className="text-[12px] text-gray-400">Today</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
