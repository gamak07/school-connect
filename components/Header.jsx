"use client";
import { useTheme } from "@/hooks/useTheme";
import React from "react";
import { FaSearch, FaMoon, FaBell, FaSun, FaGraduationCap } from "react-icons/fa";

// Placeholder avatar image
const avatarUrl = "https://randomuser.me/api/portraits/men/32.jpg";

export default function Header() {
  const [theme, toggleTheme] = useTheme();
  return (
    <header className="border-b border-transparent bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        {/* Search bar */}
        <div className="hidden max-w-md flex-1 lg:flex">
          <div className="relative">
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-sm text-gray-400" />
            <input
              type="text"
              placeholder="Search CampusLink..."
              className="w-full rounded-full border-none bg-gray-100 py-2 pr-4 pl-10 text-gray-700 placeholder-gray-400 outline-none focus:ring-1 focus:ring-blue-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3 lg:hidden">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-gray-700 to-gray-900">
            <FaGraduationCap className="text-lg text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            SchoolConnects
          </h1>
        </div>

        {/* Right icons */}
        <div className="flex items-center md:space-x-4 space-x-1">
          {/* Dark mode icon */}
          <button
            onClick={toggleTheme}
            className="cursor-pointer p-2 text-lg text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Notification bell with badge */}
          <div className="relative">
            <FaBell className="cursor-pointer text-lg text-gray-500 dark:text-gray-300" />
            <span className="absolute -top-2 -right-2 rounded-full bg-red-500 px-1.5 py-0.5 text-xs font-bold text-white">
              3
            </span>
          </div>

          {/* User avatar */}
          <img
            src={avatarUrl}
            alt="User Avatar"
            className="hidden h-8 w-8 rounded-full border-2 border-gray-200 object-cover md:block dark:border-gray-600"
          />
        </div>
      </div>
    </header>
  );
}
