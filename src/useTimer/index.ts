import { useEffect, useRef, useState } from "react";

const useTimer = (time: number) => {
  const timer = useRef<any>(null);
  const [leftTime, setLeftTime] = useState(time);

  useEffect(() => {
    leftTime > 0 &&
      (timer.current = setTimeout(() => setLeftTime(leftTime - 1), 1000));
  });

  return { leftTime };
};

export { useTimer };
