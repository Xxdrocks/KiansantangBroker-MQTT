import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../context/DataContext";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/90 p-3 rounded-lg shadow-lg border border-gray-700 text-white text-sm">
        <p className="font-semibold">{label}</p>
        <p>{payload[0].value} kWh</p>
      </div>
    );
  }
  return null;
};

const OverviewPribadi = () => {
  const { user } = useData();

  const weeklyData = user.devices.map((d) => ({ name: d.name, kWh: d.daily }));
  const monthlyData = user.devices.map((d) => ({
    name: d.name,
    kWh: d.monthly,
  }));
  const yearlyData = user.devices.map((d) => ({
    name: d.name,
    kWh: d.monthly * 12,
  }));

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
          dataKey="kWh"
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
      <h1 className="text-2xl font-bold mb-4">Overview Pribadi</h1>

      <section className="bg-[#1e1f25] p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Weekly Overview</h2>
        <div className="h-64">{renderChart(weeklyData, "#00c8ff")}</div>
      </section>

      <section className="bg-[#1e1f25] p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Monthly Overview</h2>
        <div className="h-64">{renderChart(monthlyData, "#32e3b3")}</div>
      </section>

      <section className="bg-[#1e1f25] p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Yearly Overview</h2>
        <div className="h-64">{renderChart(yearlyData, "#0affb8")}</div>
      </section>
    </div>
  );
};

export default OverviewPribadi;
