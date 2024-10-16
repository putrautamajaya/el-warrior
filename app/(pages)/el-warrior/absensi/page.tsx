"use client";

import AbsensiTabs from "./components/tabs";

const AbsensiPage = () => {
  return (
    <div className="h-full flex flex-col justify-start items-center overflow-y-auto overflow-hidden md:justify-center">
      <AbsensiTabs />
    </div>
  );
};

export default AbsensiPage;
