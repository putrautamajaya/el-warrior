"use client";

import { FC, useEffect, useState, ReactNode } from "react";
import Loading from "../loading";

const HydrationZustand: FC<{ children: ReactNode }> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait till Next.js rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrated ? (
        <div className="h-full w-full overflow-auto p-4 bg-neutral-100 md:p-8">
          {children}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default HydrationZustand;
