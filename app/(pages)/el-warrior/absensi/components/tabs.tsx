"use client";

import { Tabs, TabsProps } from "antd";
import { useState } from "react";
import AbsensiUser from "./absensi-user";
import AbsensiDewan from "./absensi-dewan";
import { useUserInfo } from "@/app/api/auth/user/user.hooks";

const AbsensiTabs = () => {
  const [activeKey, setActiveKey] = useState("1");

  const { data } = useUserInfo();
  const isAdmin = data?.data?.user?.user_metadata?.isAdmin;

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "El Warrior",
      children: <AbsensiUser />,
    },
    ...(isAdmin
      ? [
          {
            key: "2",
            label: "Dewan XII",
            children: <AbsensiDewan />,
          },
        ]
      : []),
  ];

  return <Tabs activeKey={activeKey} items={items} onChange={setActiveKey} />;
};

export default AbsensiTabs;
