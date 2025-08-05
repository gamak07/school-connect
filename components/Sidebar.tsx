"use client";
import React, { useState } from "react";
import {
  FaComments,
  FaGraduationCap,
  FaHome,
  FaShoppingBag,
  FaUser,
  FaUserTie,
} from "react-icons/fa";

const navLinks = [
  { label: "Home Feed", icon: <FaHome />, id: "home" },
  { label: "Marketplace", icon: <FaShoppingBag />, id: "marketplace" },
  { label: "Course Reps", icon: <FaUserTie />, id: "course-reps" },
  { label: "Messages", icon: <FaComments />, id: "messages" },
  { label: "Profile", icon: <FaUser />, id: "profile" },
];

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState<string>("home");
  const handleLinkClick = (id: string) => {
    setActiveLink(id);
  };
  return (
    <aside className="hidden h-screen w-64 bg-white shadow-lg lg:block dark:bg-slate-900">
      <div className="p-6">
        <div className="mb-8 flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-gray-700 to-gray-900">
            <FaGraduationCap className="text-lg text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            SchoolConnects
          </h1>
        </div>

        {/* navs */}
        <ul className="space-y-2">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`flex w-full cursor-pointer items-center space-x-3 rounded-lg px-4 py-3 text-left whitespace-nowrap ${activeLink === link.id ? "bg-gray-800 text-white" : "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"}`}
                onClick={() => handleLinkClick(link.id)}
              >
                <span className="flex-shrink-0 text-lg">{link.icon}</span>
                <span>{link.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
export function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("home");
  const handleLinkClick = (id: string) => {
    setActiveLink(id);
  };
  return (
    <nav className="fixed right-0 bottom-0 left-0 border-t border-gray-200 bg-white px-4 py-2 lg:hidden dark:border-gray-700 dark:bg-gray-800">
      <ul className="flex justify-around">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`flex cursor-pointer flex-col items-center space-y-1 px-3 py-2 ${activeLink === link.id ? "text-gray-800 dark:text-gray-200" : "text-gray-600 dark:text-gray-400"}`}
            onClick={() => handleLinkClick(link.id)}
          >
            <span className="text-lg">{link.icon}</span>
            <span className="text-xs hidden sm:block">{link.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
