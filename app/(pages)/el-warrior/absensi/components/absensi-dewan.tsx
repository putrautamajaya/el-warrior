"use client";

import Title from "antd/es/typography/Title";
import { useEffect } from "react";
import { Select, Spin } from "antd";
import { useAbsensi } from "@/app/api/absensi";
import { useUserInfo } from "@/app/api/auth/user/user.hooks";
import useHelper from "../helper.hooks";
import Calendar from "./calendar";
import useUserList from "@/app/api/hooks/query/useUserList";
import { useImmer } from "use-immer";

const AbsensiDewan = () => {
  const [userId, setUserId] = useImmer<string | undefined>(undefined);

  const { date } = useHelper();

  const { data: userInfo, isLoading: isUserInfoLoading } = useUserInfo();

  const { data: userList } = useUserList();
  const users = userList?.data?.users || [];

  const { data: absensiData, isLoading: isLoadingAbsensi } = useAbsensi(userId);
  const absensiList = absensiData?.data;

  useEffect(() => {
    setUserId(userInfo?.data?.user?.id);
  }, [userInfo]);

  const isLoading = isUserInfoLoading || isLoadingAbsensi;

  return (
    <div className="h-full flex flex-col justify-center items-center overflow-y-auto overflow-hidden">
      <Title level={1}>Absensi</Title>
      <div className="flex flex-col justify-center items-center">
        <Title level={3} className="text-center">
          {date}
        </Title>

        <Title level={5}>Daftar Absensi</Title>

        <Select
          className="w-[300px]"
          value={userId}
          options={users.map((user) => ({
            value: user.id,
            label: user.email,
          }))}
          onChange={(value) => console.log(value)}
        />

        {isLoading && <Spin size="large" />}

        <Calendar absensiList={absensiList} />
      </div>
    </div>
  );
};

export default AbsensiDewan;
