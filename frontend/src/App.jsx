import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/sensors");
      const json = await res.json();
      setData(json.reverse()); 
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // refresh tiap 5 detik
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: data.map((item) =>
      new Date(item.created_at).toLocaleTimeString()
    ),
    datasets: [
      {
        label: "Temperature",
        data: data.map((item) => item.payload?.temperature ?? null),
        borderColor: "blue",
        backgroundColor: "lightblue",
        tension: 0.3,
      },
    ],
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Sensor Data</h1>

      <Line data={chartData} />

      <table border="1" cellPadding="8" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Device</th>
            <th>Temperature</th>
            <th>Raw</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.payload?.device ?? "-"}</td>
              <td>{row.payload?.temperature ?? "-"}</td>
              <td>{row.payload?.raw ?? "-"}</td>
              <td>{new Date(row.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
