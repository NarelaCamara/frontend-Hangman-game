import "./styles.css";
import { useTimer } from "../../hooks/useTimer";

export const Timer = ({
  totalTimeInSeconds,
  endTime,
  pauseTime,
}: {
  totalTimeInSeconds: number;
  endTime: () => void;
  pauseTime: (time: number) => void;
}) => {
  const { time } = useTimer(totalTimeInSeconds, endTime, pauseTime);

  // Cálculo del porcentaje para el CSS
  const percentage = (time / totalTimeInSeconds) * 100;

  return (
    <div className="timer-container">
      <div className="timer-fill" style={{ width: `${percentage}%` }}></div>
      <span className="timer-text">{time}s</span>
    </div>
  );
};
