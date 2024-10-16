"use client";

import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Select } from "antd";
import useUserList from "@/app/api/hooks/query/useUserList";
import useMutationUserMetaData from "@/app/api/hooks/mutate/useMutateUserAdmin";
import useNotifications from "@/app/hooks/useNotifications";

type FieldType = {
  userId: string;
};

const FormAccess: React.FC = () => {
  const { mutateAsync } = useMutationUserMetaData();
  const { contextHolder, open } = useNotifications();

  const { data } = useUserList();
  const users = data?.data?.users || [];

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { error } = await mutateAsync({
      userId: values.userId,
      metadata: { isAdmin: true },
    });

    if (error) {
      open({
        type: "error",
        message: "Failed",
        description: "Failed to set user as admin.",
      });
      return;
    }

    open({
      type: "success",
      message: "Success",
      description: "Set user as admin success.",
    });
  };

  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className="min-w-[300px]"
      >
        <Form.Item
          label="Select user"
          name="userId"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Select
            options={users.map((user) => ({
              value: user.id,
              label: user.email,
            }))}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="w-full">
            Set as admin
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormAccess;
