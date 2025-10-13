import React from "react";
import {
  FaMapMarkerAlt,
  FaPlug,
  FaBolt,
  FaPowerOff,
  FaUserCircle,
} from "react-icons/fa";
import { useData } from "../context/DataContext";

const Profile = () => {
  const { user } = useData();

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>

      {/* Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Profile Card */}
        <div className="col-span-1 bg-[#1f2025] rounded-2xl p-8 shadow-lg flex flex-col items-center">
          <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center text-white text-5xl">
            <FaUserCircle />
          </div>

          <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-400 text-sm">{user.email}</p>

          <div className="mt-6 w-full border-t border-[#333] pt-5 space-y-2 text-sm">
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`${
                  user.status === "Active" ? "text-green-400" : "text-red-400"
                }`}
              >
                {user.status}
              </span>
            </p>
            <p>
              <strong>Bergabung:</strong> {user.joinDate}
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              {user.city}, {user.district}
            </p>
            <p>
              <strong>RT/RW:</strong> {user.rt}/{user.rw}
            </p>
          </div>
        </div>
 
        <div className="col-span-2 bg-[#1f2025] rounded-2xl p-8 shadow-lg">
          <h2 className="text-lg font-semibold mb-6">Statistik Sensor</h2>

          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#2b2d33] rounded-xl p-5 text-center hover:scale-105 transition-all">
              <FaPlug className="text-blue-400 text-3xl mx-auto mb-2" />
              <p className="text-gray-400 text-sm">Total Sensor</p>
              <h3 className="text-2xl font-bold">{user.sensors.total}</h3>
            </div>
            <div className="bg-[#2b2d33] rounded-xl p-5 text-center hover:scale-105 transition-all">
              <FaBolt className="text-green-400 text-3xl mx-auto mb-2" />
              <p className="text-gray-400 text-sm">Sensor Aktif</p>
              <h3 className="text-2xl font-bold text-green-400">
                {user.sensors.on}
              </h3>
            </div>
            <div className="bg-[#2b2d33] rounded-xl p-5 text-center hover:scale-105 transition-all">
              <FaPowerOff className="text-red-400 text-3xl mx-auto mb-2" />
              <p className="text-gray-400 text-sm">Sensor Nonaktif</p>
              <h3 className="text-2xl font-bold text-red-400">
                {user.sensors.off}
              </h3>
            </div>
            <div className="bg-[#2b2d33] rounded-xl p-5 text-center hover:scale-105 transition-all">
              <FaBolt className="text-yellow-400 text-3xl mx-auto mb-2" />
              <p className="text-gray-400 text-sm">Sensor Error</p>
              <h3 className="text-2xl font-bold text-yellow-400">
                {user.sensors.error}
              </h3>
            </div>
          </div>

          
          <h2 className="text-lg font-semibold mb-4">Informasi Akun</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-[#2b2d33] p-4 rounded-xl">
              <p className="text-gray-400">Nama Lengkap</p>
              <p className="font-semibold">{user.name}</p>
            </div>
            <div className="bg-[#2b2d33] p-4 rounded-xl">
              <p className="text-gray-400">Email</p>
              <p className="font-semibold">{user.email}</p>
            </div>
            <div className="bg-[#2b2d33] p-4 rounded-xl">
              <p className="text-gray-400">Kota</p>
              <p className="font-semibold">{user.city}</p>
            </div>
            <div className="bg-[#2b2d33] p-4 rounded-xl">
              <p className="text-gray-400">Kecamatan</p>
              <p className="font-semibold">{user.district}</p>
            </div>
            <div className="bg-[#2b2d33] p-4 rounded-xl">
              <p className="text-gray-400">RT/RW</p>
              <p className="font-semibold">
                {user.rt}/{user.rw}
              </p>
            </div>
            <div className="bg-[#2b2d33] p-4 rounded-xl">
              <p className="text-gray-400">Tanggal Bergabung</p>
              <p className="font-semibold">{user.joinDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
