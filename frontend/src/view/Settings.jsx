import React, { useState, useEffect } from "react";
import axios from "axios";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    nomer: "",
    kecamatan: "",
    kelurahan: "",
    kodepos: "",
  });

  const API_URL = "http://127.0.0.1:8000/api/users";

  useEffect(() => {
    axios
      .get(`${API_URL}/1`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Simpan data ke backend (PUT /api/users/{id})
  const handleSave = async () => {
    try {
      await axios.put(`${API_URL}/${userData.id}`, {
        name: userData.name,
        email: userData.email,
        nomer: userData.nomer,
        kecamatan: userData.kecamatan,
        kelurahan: userData.kelurahan,
        kodepos: userData.kodepos,
      });
      alert("Data berhasil diperbarui!");
      setEditMode(false);
    } catch (error) {
      console.error("Gagal update data:", error);
      alert("Gagal menyimpan perubahan!");
    }
  };

  return (
    <div className={`p-10 ${darkMode ? "text-white" : "text-black"}`}>
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* --- CARD PROFIL --- */}
        <div
          className={`${
            darkMode ? "bg-[#1f2025]" : "bg-gray-200"
          } rounded-2xl p-6 shadow-lg space-y-6`}
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {userData.name ? userData.name.charAt(0).toUpperCase() : "?"}
            </div>
            <h2 className="mt-4 font-semibold text-lg">{userData.name}</h2>
            <p className="text-gray-400 text-sm">{userData.email}</p>
          </div>

          <div className="border-t border-[#333] pt-5 text-sm space-y-2">
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>No Telp:</strong> {userData.nomer}
            </p>
            <p>
              <strong>Kecamatan:</strong> {userData.kecamatan}
            </p>
            <p>
              <strong>Kelurahan:</strong> {userData.kelurahan}
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

        {/* --- FORM EDIT --- */}
        <div
          className={`${
            darkMode ? "bg-[#1f2025]" : "bg-gray-200"
          } rounded-2xl p-6 shadow-lg`}
        >
          <h2 className="font-semibold mb-5">User Settings</h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="name"
              disabled={!editMode}
              value={userData.name}
              onChange={handleChange}
              placeholder="Nama Lengkap"
              className={`col-span-2 p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="email"
              disabled={!editMode}
              value={userData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`col-span-2 p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="nomer"
              disabled={!editMode}
              value={userData.nomer}
              onChange={handleChange}
              placeholder="Nomor Telepon"
              className={`col-span-2 p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="kecamatan"
              disabled={!editMode}
              value={userData.kecamatan}
              onChange={handleChange}
              placeholder="Kecamatan"
              className={`p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="kelurahan"
              disabled={!editMode}
              value={userData.kelurahan}
              onChange={handleChange}
              placeholder="Kelurahan"
              className={`p-2 rounded text-white outline-none ${
                darkMode ? "bg-[#2b2d33]" : "bg-gray-300 text-black"
              } ${!editMode && "opacity-50"}`}
            />
            <input
              name="kodepos"
              disabled={!editMode}
              value={userData.kodepos}
              onChange={handleChange}
              placeholder="Kode Pos"
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
