"use client";

import Title from "antd/es/typography/Title";
import { useMemo } from "react";
import dayjs from "dayjs";
import { Button } from "antd";
import { useAbsensi, useMutateAbsensi } from "@/app/api/absensi";
import { useUserInfo } from "@/app/api/auth/user/user.hooks";
import useHelper from "../helper.hooks";
import Calendar from "./calendar";

const AbsensiUser = () => {
  const { date } = useHelper();
  const { mutateAsync } = useMutateAbsensi();

  const { data, isLoading } = useUserInfo();
  const userId = data?.data?.user?.id;

  const {
    data: absensiData,
    refetch: refetchAbsensi,
    isLoading: isLoadingAbsensi,
  } = useAbsensi(userId);
  const absensiList = absensiData?.data;

  const handleStart = async () => {
    if (userId) {
      await mutateAsync({ user_id: userId });
      refetchAbsensi();
    }
  };

  const isAlreadyAbsen = useMemo(() => {
    return absensiList?.find((d) => dayjs().isSame(dayjs(d.created_at), "day"));
  }, [absensiList]);

  return (
    <div className="h-full flex flex-col justify-center items-center overflow-y-auto overflow-hidden">
      <Title level={1}>Absensi</Title>
      <div className="flex flex-col justify-center items-center">
        <Title level={3} className="text-center">
          {date}
        </Title>
        {!isAlreadyAbsen && (
          <>
            <Title level={5}>Mulai perjuangan mu sekarang</Title>
            <Button
              type="primary"
              className="mt-2"
              loading={isLoading || isLoadingAbsensi}
              onClick={handleStart}
            >
              Mulai
            </Button>
          </>
        )}
        {isAlreadyAbsen && (
          <>
            <div className="text-blue-500 font-semibold text-xl">
              Selamat berjuang!
            </div>
            <Calendar absensiList={absensiList} />
          </>
        )}
      </div>
    </div>
  );
};

export default AbsensiUser;
