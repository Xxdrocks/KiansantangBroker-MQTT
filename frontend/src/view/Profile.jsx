import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users").then((res) => {
      if (Array.isArray(res.data) && res.data.length > 0) {
        setUser(res.data[res.data.length - 1]);
      }
    }).catch(() => {}).finally(() => setLoadingUser(false));
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/devices").then((res) => {
      setDevices(res.data);
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const totalDaily = devices.reduce((a, d) => a + parseFloat(d.daily || 0), 0);
  const totalWeekly = devices.reduce((a, d) => a + parseFloat(d.weekly || 0), 0);
  const totalMonthly = devices.reduce((a, d) => a + parseFloat(d.monthly || 0), 0);
  const totalDevices = devices.length;
  const totalSensorType = devices.length > 0 ? devices[0].sensor : "-";

  if (loading || loadingUser) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-400 text-center text-lg">
        Memuat data profil...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-400 text-center text-lg">
        Data user tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-10 text-white bg-[#0E1014] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Profile</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="col-span-1 bg-[#1f2025] rounded-2xl p-6 md:p-8 shadow-lg flex flex-col items-center text-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28 bg-blue-600 rounded-full flex items-center justify-center text-white text-5xl">
            <FaUserCircle />
          </div>
          <h2 className="mt-4 text-lg sm:text-xl font-semibold">{user.name || "-"}</h2>
          <p className="text-gray-400 text-sm">{user.email || "-"}</p>
          <div className="mt-6 w-full border-t border-[#333] pt-5 space-y-2 text-sm">
            <p><strong>No Telp:</strong> {user.nomer || "-"}</p>
            <p><strong>Kecamatan:</strong> {user.kecamatan || "-"}</p>
            <p><strong>Kelurahan:</strong> {user.kelurahan || "-"}</p>
            <p><strong>Kode Pos:</strong> {user.kodepos || "-"}</p>
            <p><strong>Tanggal Bergabung:</strong> {user.created_at ? new Date(user.created_at).toLocaleDateString("id-ID") : "-"}</p>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2 bg-[#1f2025] rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-lg font-semibold mb-6">Statistik Sensor</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="bg-[#2b2d33] rounded-xl p-4 sm:p-5 text-center hover:scale-105 transition-all">
              <p className="text-gray-400 text-xs sm:text-sm">Total Perangkat</p>
              <h3 className="text-xl sm:text-2xl font-bold">{totalDevices}</h3>
            </div>
            <div className="bg-[#2b2d33] rounded-xl p-4 sm:p-5 text-center hover:scale-105 transition-all">
              <p className="text-gray-400 text-xs sm:text-sm">Jenis Sensor</p>
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">{totalSensorType}</h3>
            </div>
            <div className="bg-[#2b2d33] rounded-xl p-4 sm:p-5 text-center hover:scale-105 transition-all">
              <p className="text-gray-400 text-xs sm:text-sm mb-1">Total Emisi Harian</p>
              <h3 className="text-lg sm:text-xl font-bold text-green-400">{totalDaily.toFixed(1)} CO₂</h3>
            </div>
            <div className="bg-[#2b2d33] rounded-xl p-4 sm:p-5 text-center hover:scale-105 transition-all">
              <p className="text-gray-400 text-xs sm:text-sm mb-1">Total Emisi Bulanan</p>
              <h3 className="text-lg sm:text-xl font-bold text-green-400">{totalMonthly.toFixed(1)} CO₂</h3>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-4">Informasi Akun</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-[#2b2d33] p-4 rounded-xl">
              <p className="text-gray-400 text-xs sm:text-sm">Nama Lengkap</p>
              <p className="font-semibold break-words">{user.name}</p>
            </div>
            <div className="bg-[#2b2d33] p-4 rounded-xl">
              <p className="text-gray-400 text-xs sm:text-sm">Email</p>
              <p className="font-semibold break-words">{user.email}</p>
            </div>
            <div className="bg-[#2b2d33] p-4 rounded-xl">
              <p className="text-gray-400 text-xs sm:text-sm">Kecamatan</p>
              <p className="font-semibold">{user.kecamatan}</p>
            </div>
            <div className="bg-[#2b2d33] p-4 rounded-xl">
              <p className="text-gray-400 text-xs sm:text-sm">Kelurahan</p>
              <p className="font-semibold">{user.kelurahan}</p>
            </div>
            <div className="bg-[#2b2d33] p-4 rounded-xl">
              <p className="text-gray-400 text-xs sm:text-sm">Kode Pos</p>
              <p className="font-semibold">{user.kodepos}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
