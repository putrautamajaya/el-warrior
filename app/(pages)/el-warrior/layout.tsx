"use client";

import { EnumCookie } from "@/app/enum/cookie";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { signOut } from "@/app/api/auth/user";

export default function ElWarriorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathName = usePathname();
  const isLoggedIn = Cookies.get(EnumCookie.LOGIN);

  useEffect(() => {
    if (pathName.includes("el-warrior") && !isLoggedIn) {
      router.replace("/login");
      signOut();
    }
  }, [pathName, router]);

  return (
    <div className="border rounded-lg bg-white p-4 h-full">{children}</div>
  );
}
