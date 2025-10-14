// src/router/Router.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../view/Dashboard";
import Overview from "../view/Overview/Overview";
import Devices from "../view/Devices";
import Sensor from "../view/Sensor";
import Notification from "../view/Notification";
import Settings from "../view/Settings";
import Profile from "../view/Profile";
import OverviewPribadi from "../view/Overview/OverviewPribadi";
import OverviewKota from "../view/Overview/OverviewKota";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman login & register */}

        {/* Halaman utama yang butuh login */}
        <Route
          path="/*"
          element={
         
              <div className="flex">
                <Sidebar />
                <div className="flex-1 p-8 ml-28">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/devices" element={<Devices />} />
                    <Route path="/sensor" element={<Sensor />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                      path="/overview/pribadi"
                      element={<OverviewPribadi />}
                    />
                    <Route path="/overview/kota" element={<OverviewKota />} />
                  </Routes>
                </div>
              </div>
         
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
