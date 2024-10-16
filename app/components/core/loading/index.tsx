import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
