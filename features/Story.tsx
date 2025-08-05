import Image from "next/image";
import React from "react";

const users = [
  { name: "Sarah", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Mike", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Emma", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Alex", img: "https://randomuser.me/api/portraits/men/41.jpg" },
];

export default function Story() {
  return (
    <section className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
      <div className="flex space-x-4 overflow-x-auto">
        {/* Your Story */}
        <div className="flex-shrink-0 cursor-pointer text-center">
          <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 text-3xl font-bold text-white">
            <span>+</span>
          </div>
          <span className="mt-2 text-xs text-gray-600 dark:text-gray-400">
            Your Story
          </span>
        </div>

        {/* User Stories */}
        {users.map((user) => (
          <div key={user.name} className="flex flex-col items-center">
            <div className="mb-2 h-16 w-16 rounded-full bg-gradient-to-tr from-blue-500 to-green-500 p-0.5">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  fill
                  src={user.img}
                  alt={user.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
              <span className="mt-2 text-center text-xs text-gray-600 dark:text-gray-400">
                {user.name}
              </span>
          </div>
        ))}
      </div>
    </section>
  );
}
