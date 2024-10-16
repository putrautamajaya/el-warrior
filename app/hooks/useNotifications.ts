import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

interface OpenParams {
  type: NotificationType;
  message: string;
  description: string;
}

const useNotifications = () => {
  const [api, contextHolder] = notification.useNotification();

  const open = (params: OpenParams) => {
    api[params.type]({
      message: params.message,
      description: params.description,
    });
  };

  return {
    contextHolder,
    open,
  };
};

export default useNotifications;
