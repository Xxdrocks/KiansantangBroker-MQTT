import React, { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [editMode, setEditMode] = useState(false);

  // Data user (dummy sementara, nanti bisa diganti fetch dari backend)
  const [userData, setUserData] = useState({
    firstName: "Hidayah",
    lastName: "Muhammad",
    email: "user@email.com",
    phone: "0821",
    kota: "Jakarta",
    kecamatan: "Matraman",
    rt: "01",
    rw: "02",
    kodepos: "13110",
  });

  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Simpan perubahan (sementara hanya console.log)
  const handleSave = () => {
    setEditMode(false);
    console.log("Data tersimpan:", userData);
  };

  return (
    <div className={`p-10 ${darkMode ? "text-white" : "text-black"}`}>
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Frame */}
        <div
          className={`${
            darkMode ? "bg-[#1f2025]" : "bg-gray-200"
          } rounded-2xl p-6 shadow-lg space-y-6`}
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {userData.firstName.charAt(0)}
            </div>
            <h2 className="mt-4 font-semibold text-lg">
              {userData.firstName} {userData.lastName}
            </h2>
            <p className="text-gray-400 text-sm">{userData.email}</p>
          </div>

          <div className="border-t border-[#333] pt-5 text-sm space-y-2">
            <p>
              <strong>Nama:</strong> {userData.firstName} {userData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>No Telp:</strong> {userData.phone}
            </p>
            <p>
              <strong>Kota:</strong> {userData.kota}
            </p>
            <p>
              <strong>Kecamatan:</strong> {userData.kecamatan}
            </p>
            <p>
              <strong>RT/RW:</strong> {userData.rt}/{userData.rw}
            </p>
            <p>
              <strong>Kode Pos:</strong> {userData.kodepos}
            </p>
          </div>

          <div className="pt-5 flex items-center justify-between">
            <span>Light/Dark Mode</span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="w-11 h-6 bg-gray-400 rounded-full peer-checked:bg-blue-500 transition-all"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>

        {/* Right Frame */}
        <div
          className={`${
            darkMode ? "bg-[#1f2025]" : "bg-gray-200"
          } rounded-2xl p-6 shadow-lg`}
        >
          <h2 className="font-semibold mb-5">User Settings</h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="firstName"
              disabled={!editMode}
              value={userData.firstName}
              onChange={handleChange}
              className={`p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="lastName"
              disabled={!editMode}
              value={userData.lastName}
              onChange={handleChange}
              className={`p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="email"
              disabled={!editMode}
              value={userData.email}
              onChange={handleChange}
              className={`col-span-2 p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="phone"
              disabled={!editMode}
              value={userData.phone}
              onChange={handleChange}
              className={`col-span-2 p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="kecamatan"
              disabled={!editMode}
              value={userData.kecamatan}
              onChange={handleChange}
              className={`p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="kota"
              disabled={!editMode}
              value={userData.kota}
              onChange={handleChange}
              className={`p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="rt"
              disabled={!editMode}
              value={userData.rt}
              onChange={handleChange}
              className={`p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="rw"
              disabled={!editMode}
              value={userData.rw}
              onChange={handleChange}
              className={`p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="kodepos"
              disabled={!editMode}
              value={userData.kodepos}
              onChange={handleChange}
              className={`col-span-2 p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
          </div>

          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => setEditMode(!editMode)}
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
            >
              {editMode ? "Cancel" : "Edit Details"}
            </button>
            {editMode && (
              <button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
