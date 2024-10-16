"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HydrationZustand from "./components/core/zustand-hydration";
import NavigationBar from "./components/core/navigation-bar";
require("dayjs/locale/id");

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$antialiased h-screen w-full`}>
        <NavigationBar />
        <div className="h-[calc(100%-64px)]">
          <HydrationZustand>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </HydrationZustand>
        </div>
      </body>
    </html>
  );
}
