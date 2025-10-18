// src/view/Dashboard.jsx
import React from "react";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { devices } = useData();
  const navigate = useNavigate();

  const getPlugImage = (CO2) => {
    if (CO2 < 100) return "/images/plugswhite.png";
    else if (CO2 < 200) return "/images/plugsyellow.png";
    else if (CO2 < 300) return "/images/plugsorange.png";
    else return "/images/plugsred.png";
  };

  const getStatusLevel = (CO2) => {
    if (CO2 < 100) return "Aman";
    if (CO2 < 200) return "Sedang";
    if (CO2 < 300) return "Bahaya";
    return "Kritis";
  };

  return (
    <div className="bg-[#0E1014] min-h-screen text-white px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-0">
          Dashboard
        </h1>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Carbon Emission Card */}
        <div className="bg-gradient-to-r from-[#6A759B] to-[#21273D] rounded-2xl p-5 sm:p-6 shadow-lg relative overflow-hidden min-h-[220px] sm:h-[280px]">
          <div className="flex flex-col z-10 relative">
            <div className="flex items-center bg-white text-black rounded-full px-3 sm:px-4 py-1 w-fit text-xs sm:text-sm">
              <img
                src="/icon/location.png"
                className="w-3 sm:w-4 h-3 sm:h-4 mr-2"
                alt="location"
              />
              <p className="font-semibold">Jakarta, Indonesia</p>
            </div>
            <div className="mt-6 sm:mt-8">
              <p className="text-sm sm:text-[15px] font-medium">
                Carbon Emission
              </p>
              <p className="text-[11px] sm:text-[12px] text-gray-300 mt-1">
                Now
              </p>
              <h1 className="text-[50px] sm:text-[90px] font-bold mt-3 leading-none break-words">
                {devices.reduce((sum, d) => sum + parseFloat(d.daily), 0)} CO2
              </h1>
            </div>
          </div>
          <img
            src="/images/thunder.png"
            className="absolute top-0 right-0 w-40 sm:w-56 opacity-40"
            alt="thunder"
          />
        </div>

        {/* Today's Highlight */}
        <div className="bg-[#1b1d22] rounded-2xl p-5 sm:p-6 shadow-md">
          <h2 className="text-lg sm:text-[20px] font-semibold mb-5 sm:mb-6">
            Today's Highlight
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {devices.map((device) => {
              const CO2Value = parseFloat(device.daily);
              return (
                <div
                  key={device.id}
                  className="flex flex-col items-center bg-[#2a2d35] rounded-2xl py-3 sm:py-4 px-2 sm:px-3 hover:scale-105 transition-all"
                >
                  <img
                    src={getPlugImage(CO2Value)}
                    className="w-14 sm:w-20 mb-2"
                    alt="plug icon"
                  />
                  <p className="text-[12px] sm:text-[13px] font-semibold text-center">
                    {device.name}
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-gray-400 text-center">
                    {getStatusLevel(CO2Value)}
                  </p>
                  <p className="text-[15px] sm:text-[17px] font-bold mt-1">
                    {device.daily}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 7 Days Forecast */}
      <div className="mt-6 sm:mt-8 bg-[#1b1d22] rounded-2xl p-5 sm:p-6 shadow-md">
        <h2 className="text-lg sm:text-[20px] font-semibold mb-4 sm:mb-5">
          7 Days Forecast
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto">
          {devices.map((device) => (
            <div
              key={device.id}
              className="flex justify-between items-center bg-[#2a2d35] rounded-2xl px-4 sm:px-5 py-3 sm:py-4 hover:bg-[#3a3d46] transition-all min-w-[260px] sm:min-w-0"
            >
              <div className="flex items-center">
                <img
                  src={getPlugImage(parseFloat(device.daily))}
                  className="w-8 sm:w-10 h-auto mr-3"
                  alt="plug"
                />
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    {device.daily}
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-gray-400">
                    {getStatusLevel(parseFloat(device.daily))}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] sm:text-[12px]">{device.name}</p>
                <p className="text-[10px] sm:text-[12px] text-gray-400">
                  Today
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
