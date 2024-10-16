"use client";

import FormLogin from "./Form/login";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex flex-col justify-center items-center gap-4 border border-slate-200 rounded-lg p-4 w-[300px] bg-white">
        <img
          src="/images/logo-el-warrior.png"
          alt="logo-el-warrior"
          width={250}
        />
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;
