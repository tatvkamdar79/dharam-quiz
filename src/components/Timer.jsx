import React, { useState, useEffect } from "react";

const Timer = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    let interval;

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  return (
    <div className="text-7xl font-semibold text-red-600">
      {timeLeft ? (
        <p>TIME LEFT : {timeLeft ? timeLeft + " s" : "Time Up"}</p>
      ) : (
        <p>TIME UP!!</p>
      )}
    </div>
  );
};

export default Timer;
