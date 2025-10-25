import React from "react";
import {
  Home,
  BarChart2,
  Cpu,
  Bell,
  Settings,
  User,
  Activity,
  BotIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: <Home size={22} />, label: "Dashboard", path: "/" },
    { icon: <BarChart2 size={22} />, label: "Overview", path: "/overview" },
    { icon: <Activity size={22} />, label: "Sensor", path: "/sensor" },
    { icon: <BotIcon size={22} />, label: "Chatbot", path: "/chatbot" },
    { icon: <Bell size={22} />, label: "Notification", path: "/notification" },
    { icon: <Settings size={22} />, label: "Settings", path: "/settings" },
    { icon: <User size={22} />, label: "Profile", path: "/profile" },
  ];

  const menuItemsMobile = [
     { icon: <Home size={25} />, label: "Dashboard", path: "/" },
    { icon: <BarChart2 size={25} />, label: "Overview", path: "/overview" },
    { icon: <Activity size={25} />, label: "Sensor", path: "/sensor" },
    { icon: <BotIcon size={25} />, label: "Chatbot", path: "/chatbot" },
    { icon: <Bell size={25} />, label: "Notification", path: "/notification" },
  ]

  return (
    <div>
      <aside
        className="xl:flex m-10 hidden h-fit w-24 bg-gradient-to-b from-[#2a2d35] to-[#1b1d22]
     rounded-3xl shadow-lg z-40 flex-col items-center py-12 space-y-8"
      >
        {menuItems.map((item, index) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex flex-col items-center transition ${active ? "text-[#4b5bff]" : "text-gray-300 hover:text-[#4b5bff]"
                }`}
            >
              {item.icon}
              <span className="text-[10px] mt-2">{item.label}</span>
            </Link>
          );
        })}
      </aside>

      <nav
        className="xl:hidden fixed bottom-4 left-1/2 -translate-x-1/2 
  bg-gradient-to-r from-[#2a2d35] to-[#1b1d22] 
  w-[80%] max-w-md rounded-2xl shadow-lg 
  flex justify-around py-3 px-2 z-50 backdrop-blur-xl"
      >

        {menuItemsMobile.map((item, index) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex flex-col items-center ${active
                  ? "text-[#4b5bff]"
                  : "text-gray-300 hover:text-[#4b5bff]"
                }`}
            >
              {item.icon}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
