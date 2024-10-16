"use client";

import { login } from "@/app/api/auth/user";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { EnumCookie } from "@/app/enum/cookie";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type FieldType = {
  username: string;
  password: string;
};

const FormLogin = () => {
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { error } = await login(values.username, values.password);
    if (!error) {
      Cookies.set(EnumCookie.LOGIN, "user logged in", { expires: 1 });
      router.replace("/el-warrior/welcome");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="w-full"
    >
      <Form.Item
        label="Email"
        name="username"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          { required: true, message: "Please input your username!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
