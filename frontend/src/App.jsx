import React from "react";
import Router from "./router/Router";
import { DataProvider } from "./context/DataContext";
import "./constant/index";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <DataProvider>
      <div className="min-h-screen bg-[#0E1014] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_70%)] -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.15),transparent_70%)] -z-10" />

        <div>
          <Router />
          {location.pathname !== "/chatbot" && <Footer />}
        </div>
      </div>
    </DataProvider>
  );
};

export default App;
