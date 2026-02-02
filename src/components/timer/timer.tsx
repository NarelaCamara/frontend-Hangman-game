import { useState, useEffect } from "react";
import "./styles.css";

const Timer = ({ totalTimeInSeconds }: { totalTimeInSeconds: number }) => {
  const [timeLeft, setTimeLeft] = useState(totalTimeInSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // Limpieza
  }, [timeLeft]);

  // Cálculo del porcentaje para el CSS
  const percentage = (timeLeft / totalTimeInSeconds) * 100;

  return (
    <div className="timer-container">
      <div className="timer-fill" style={{ width: `${percentage}%` }}></div>
      <span className="timer-text">{timeLeft}s</span>
    </div>
  );
};

export default Timer;
