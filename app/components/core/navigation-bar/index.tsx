"use client";

import { EnumCookie } from "@/app/enum/cookie";
import { Avatar, Dropdown, Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { signOut } from "@/app/api/auth/user";
import Link from "next/link";
import Cookies from "js-cookie";

const NavigationBar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([
    "1",
  ]);

  const defaultItems = [
    {
      key: "1",
      label: "Home",
      path: "/",
    },
  ];

  const loggedInItems = [
    {
      key: "1",
      label: "Home",
      path: "/",
    },
    {
      key: "2",
      label: "Absensi",
      path: "/el-warrior/absensi",
    },
  ];

  const onSelect = (item: any) => {
    let selectedItem;
    if (isLoggedIn) {
      selectedItem = loggedInItems.find((i) => i.key === item.key)!;
    } else {
      selectedItem = defaultItems.find((i) => i.key === item.key)!;
    }
    router.push(selectedItem.path);
  };

  const onLogOut = async () => {
    signOut();
    Cookies.remove(EnumCookie.LOGIN);
    router.replace("/");
  };

  useEffect(() => {
    const items = isLoggedIn ? loggedInItems : defaultItems;

    for (const item of items.reverse()) {
      if (pathName.includes(item.path)) {
        setDefaultSelectedKeys([item.key]);
        break;
      }
    }

    setIsLoggedIn(!!Cookies.get(EnumCookie.LOGIN));
  }, [pathName, isLoggedIn]);

  const menuitems: MenuProps["items"] = [
    ...(!isLoggedIn
      ? [
          {
            key: "1",
            label: <Link href="/login">Log In</Link>,
          },
        ]
      : []),
    ...(isLoggedIn
      ? [
          {
            key: "2",
            label: <div onClick={() => onLogOut()}>Log Out</div>,
          },
        ]
      : []),
  ];

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <img src="/images/logo-el-warrior.png" alt="logo-el-warrior" width={80} />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={defaultSelectedKeys}
        items={isLoggedIn ? loggedInItems : defaultItems}
        style={{ flex: 1, minWidth: 0 }}
        onSelect={onSelect}
      />
      <Dropdown
        menu={{ items: menuitems }}
        placement="bottomLeft"
        arrow
        className="cursor-pointer ml-2"
      >
        <Avatar size="large" icon={<UserOutlined />} className="bg-slate-600" />
      </Dropdown>
    </Header>
  );
};

export default NavigationBar;
