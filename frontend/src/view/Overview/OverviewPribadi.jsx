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
import { useData } from "../../context/DataContext";

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

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Overview Pribadi</h1>


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

export default OverviewPribadi;
