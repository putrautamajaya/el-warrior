"use client";

import Title from "antd/es/typography/Title";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-full bg-black gap-4 rounded-lg">
      <h1 className="text-3xl text-center text-yellow-400">
        El Warrior Panji Indonesia
      </h1>
      <p className="text-xl font-semibold text-blue-400">Coming Soon</p>
      <img
        src="/images/logo-el-warrior.png"
        alt="logo-el-warrior"
        width={300}
      />
    </div>
  );
}
