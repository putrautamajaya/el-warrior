import dayjs from "dayjs";
import { useEffect } from "react";
import { useImmer } from "use-immer";

const useHelper = () => {
  const [date, setDate] = useImmer("");

  useEffect(() => {
    const dateInterval = setInterval(() => {
      const dateStr = dayjs()
        .locale("id")
        .format("dddd, D MMMM YYYY (HH:mm:ss)");
      setDate(dateStr);
      return clearInterval(dateInterval);
    }, 1000);
  });

  return { date };
};

export default useHelper
