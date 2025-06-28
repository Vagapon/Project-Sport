import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  MessageCircle,
  Search,
  Menu,
  User,
  X,
  Home,
  Trophy,
  Sparkles,
  BookOpen,
  Bell,
} from "lucide-react";
import { path } from "framer-motion/client";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "My Team", icon: User, path: "/myteam" },
    { name: "Challange", icon: Trophy, path: "/challenge" },
    { name: "Blog", icon: BookOpen, path: "/blog" },
    { name: "Highlight", icon: Sparkles, path: "/highlight" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-toggle")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className=" rounded-full p-2 sm:p-3 ">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"
                    alt="Logo"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-white hover:text-green-400 font-medium transition-colors duration-300 text-sm xl:text-base"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Left Mobile Menu Toggle & Right Icons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Mobile Menu Toggle - MOVED TO LEFT */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="menu-toggle lg:hidden text-white hover:text-green-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/10 relative z-50 flex items-center justify-center order-first"
              >
                {menuOpen ? (
                  <X className="w-6 h-6 transition-all duration-300" />
                ) : (
                  <Menu className="w-6 h-6 transition-all duration-300" />
                )}
              </button>

              {/* Desktop Icons */}
              <div className="hidden sm:flex items-center space-x-3">
                <button
                  onClick={() => navigate("/chat")}
                  className="relative text-white hover:text-green-400 transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    0
                  </span>
                </button>
                  <button
                  onClick={() => navigate("/notification")}
                  className="relative text-white hover:text-green-400 transition-colors duration-300"
                >
                  <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    0
                  </span>
                </button>
                {/* <button className="text-white hover:text-green-400 transition-colors duration-300">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                </button> */}
                <button
                  onClick={() => navigate("/login")}
                  className="text-white hover:text-green-400 transition-colors duration-300"
                >
                  <User className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Menu Panel - MOVED TO LEFT */}
        <div
          className={`mobile-menu absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 to-black shadow-2xl transform transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Menu Header - SIMPLIFIED */}
          <div className="flex items-center ml-4 border-b border-gray-700">
            <div className="rounded-full p-2 sm:p-3 shadow-lg">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"
                  alt="Logo"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain brightness-0 invert"
                />
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-4">
            <nav className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center space-x-4 text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      animationDelay: 
                      `${index * 0.1}s`,
                      animation: menuOpen
                        ? `slideInLeft 0.5s ease-out ${index * 0.1}s both`
                        : "none",
                    }}
                  >
                    <Icon className="w-5 h-5 text-green-400" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Menu Footer with Action Buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700 bg-gradient-to-t from-black to-transparent">
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { icon: MessageCircle, label: "Chat", badge: "0" },
                { icon: Bell, label: "Notification" },
                { icon: Search, label: "Search" },
                { icon: User, label: "Profile" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      setMenuOpen(false);
                      if (item.label === "Chat") navigate("/chat");
                    }}
                    className="relative flex flex-col items-center justify-center w-full h-full min-h-[60px] min-w-[60px] rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-105"
                    style={{
                      animationDelay: `${(menuItems.length + index) * 0.1}s`,
                      animation: menuOpen
                        ? `slideInLeft 0.5s ease-out ${(menuItems.length + index) * 0.1}s both`
                        : "none",
                    }}
                  >
                    <Icon className="w-6 h-6 mb-1" />
                    <span className="text-xs font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Call to Action */}
            <button
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{
                animationDelay: `${(menuItems.length + 3) * 0.1}s`,
                animation: menuOpen
                  ? `slideInLeft 0.5s ease-out ${(menuItems.length + 3) * 0.1}s both`
                  : "none",
              }}
            >
              Join Our Club
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
