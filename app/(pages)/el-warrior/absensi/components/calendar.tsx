"use client";

import { Calendar } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { ReactNode } from "react";

interface AbsensiCalendarProps {
  absensiList: any[] | null | undefined;
}

const AbsensiCalendar = ({ absensiList }: AbsensiCalendarProps) => {
  const cellRender = (date: Dayjs, info: any): ReactNode => {
    const isAbsen = absensiList?.find((d) =>
      dayjs(d.created_at).isSame(date, "day")
    );
    return (
      <div className={isAbsen ? "bg-blue-400" : ""}>
        {info.type === "date" ? date.format("D") : date.format("MMM")}
      </div>
    );
  };

  return (
    <div className="w-[300px] mt-2 border rounded-lg">
      <Calendar fullscreen={false} fullCellRender={cellRender} />
    </div>
  );
};

export default AbsensiCalendar;
