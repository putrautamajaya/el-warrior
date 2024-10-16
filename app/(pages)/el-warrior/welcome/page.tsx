"use client";

import { Button } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Title level={1} className="text-center">
        Welcome El Warrior
      </Title>
      <Title level={4}>Selamat Berjuang!</Title>
      <img
        src="/images/logo-el-warrior.png"
        alt="logo-el-warrior"
        width={300}
      />
      <Link href="absensi">
        <Button type="primary" className="mt-2">
          Mulai Perjuangan
        </Button>
      </Link>
    </div>
  );
};

export default Welcome;
