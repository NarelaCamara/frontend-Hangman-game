import { useEffect, useState } from "react";

export const useTimer = (
  totalTimeInSeconds: number,
  endTime: () => void,
  pauseTime: (time: number) => void,
) => {
  const [timeLeft, setTimeLeft] = useState(totalTimeInSeconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      endTime();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // Limpieza
  }, [endTime, pauseTime, timeLeft]);

  return { time: timeLeft };
};
