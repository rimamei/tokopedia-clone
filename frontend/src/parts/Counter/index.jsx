import { useEffect, useRef, useState } from 'react';

const Counter = () => {
  // const [timerDays, setTimerDays] = useState("00");
  const [timer, setTimer] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('April 28, 2021 21:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // const newDays = days.toString().padStart(2, "0");
      const newHours = hours.toString().padStart(2, '0');
      const newMinutes = minutes.toString().padStart(2, '0');
      const newSeconds = seconds.toString().padStart(2, '0');

      if (distance < 0) {
        // Stop timer
        clearInterval(interval.current);
      } else {
        // setTimerDays(newDays);
        setTimer({ hours: newHours, minutes: newMinutes, seconds: newSeconds });
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const timerList = ['hours', 'minutes', 'seconds'];

  return (
    <div className="flex text-2xl items-center font-bold">
      {timerList.map((item, index) => (
        <>
          <div
            key={index}
            className="p-2 rounded border-4 border-primary font-bold mx-2 sm:p-1 sm:border-2 sm:font-semibold"
          >
            {timer[item]}
          </div>
          {index < timerList.length && <div>:</div>}
        </>
      ))}
    </div>
  );
};

export default Counter;
