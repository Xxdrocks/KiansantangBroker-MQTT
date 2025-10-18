import React, { useEffect, useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer,
} from "recharts";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/90 p-3 rounded-lg shadow-lg border border-gray-700 text-white text-sm">
        <p className="font-semibold">{label}</p>
        <p>{payload[0].value} CO2</p>
      </div>
    );
  }
  return null;
};

const ChangeMapView = ({ coords }) => {
  const map = useMap();
  if (coords) map.setView(coords, 13);
  return null;
};

const OverviewKota = () => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setCoords([pos.coords.latitude, pos.coords.longitude]),
        (err) => setError("Tidak bisa mendapatkan lokasi: " + err.message)
      );
    } else {
      setError("Browser kamu tidak mendukung Geolocation API.");
    }
  }, []);

  const dummyData = [
    { name: "CO2 Mingguan", CO2: 200 },
    { name: "CO2 Bulanan", CO2: 800 },
    { name: "CO2 Tahunan", CO2: 10200 },
  ];

  const renderChart = (data, color) => (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id={color} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="CO2"
          stroke={color}
          strokeWidth={2.5}
          fillOpacity={1}
          fill={`url(#${color})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Overview Kota</h1>

      <section className="bg-[#1e1f25] p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Lokasi Saat Ini</h2>
        {error && <p className="text-red-400">{error}</p>}
        {!coords && !error && <p className="text-gray-400">Mengambil lokasi...</p>}
        {coords && (
          <MapContainer center={coords} zoom={13} className="w-full h-96 rounded-xl">
            <ChangeMapView coords={coords} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CircleMarker
              center={coords}
              radius={12}
              color="blue"
              fillColor="blue"
              fillOpacity={0.7}
            >
              <Popup>
                <strong>Lokasi Laptop Kamu</strong>
                <br />
                Lat: {coords[0].toFixed(5)}, Lng: {coords[1].toFixed(5)}
              </Popup>
            </CircleMarker>
          </MapContainer>
        )}
      </section>

      <section className="bg-[#1e1f25] p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Weekly Overview</h2>
        <div className="h-64">{renderChart(dummyData, "#00c8ff")}</div>
      </section>
    </div>
  );
};

export default OverviewKota;
