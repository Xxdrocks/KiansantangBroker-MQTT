import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { useData } from "../../context/DataContext";

const OverviewKota = () => {
  const { cityOverview } = useData();

  const cities = Object.entries(cityOverview).map(([name, info]) => {
    let color = "green";
    let status = "Aman";
    if (info.daily > 300) {
      color = "red";
      status = "Bahaya";
    } else if (info.daily > 200) {
      color = "orange";
      status = "Sedang";
    }
    return {
      name,
      lat: info.lat,
      lng: info.lng,
      totalKwh: info.daily,
      color,
      status,
    };
  });

  const weeklyData = cities.map((c) => ({ name: c.name, kWh: c.totalKwh }));
  const monthlyData = cities.map((c) => ({
    name: c.name,
    kWh: c.totalKwh * 4,
  }));
  const yearlyData = cities.map((c) => ({
    name: c.name,
    kWh: c.totalKwh * 52,
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Overview Kota</h1>

      {/** Map */}
      <section className="bg-[#1e1f25] p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Peta Kondisi Kota</h2>
        <MapContainer
          center={[-2.5, 117.5]}
          zoom={5}
          className="w-full h-96 rounded-xl"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          {cities.map((city, i) => (
            <CircleMarker
              key={i}
              center={[city.lat, city.lng]}
              radius={12}
              color={city.color}
              fillOpacity={0.7}
            >
              <Popup>
                <strong>{city.name}</strong>
                <br />
                Total kWh: {city.totalKwh}
                <br />
                Status: {city.status}
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </section>

      {/** Charts */}
      <section className="bg-[#1e1f25] p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Weekly Overview</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Bar dataKey="kWh" fill="#32e3b3" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="bg-[#1e1f25] p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Monthly Overview</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Bar dataKey="kWh" fill="#16f4d0" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="bg-[#1e1f25] p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Yearly Overview</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Bar dataKey="kWh" fill="#0affb8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default OverviewKota;
