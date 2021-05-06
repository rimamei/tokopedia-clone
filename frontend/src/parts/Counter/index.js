import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  // const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("April 28, 2021 21:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      console.log("now: ", now);
      const distance = countdownDate - now;
      console.log("distance: ", distance);

      // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // const newDays = days.toString().padStart(2, "0");
      const newHours = hours.toString().padStart(2, "0");
      const newMinutes = minutes.toString().padStart(2, "0");
      const newSeconds = seconds.toString().padStart(2, "0");

      if (distance < 0) {
        // Stop timer
        clearInterval(interval.current);
      } else {
        // setTimerDays(newDays);
        setTimerHours(newHours);
        setTimerMinutes(newMinutes);
        setTimerSeconds(newSeconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="flex text-2xl sm:text-xl md:text-xl items-center font-bold">
      <div className="counter">{timerHours}</div>
      <div>:</div>
      <div className="counter">{timerMinutes}</div>
      <div>:</div>
      <div className="counter">{timerSeconds}</div>
    </div>
  );
};

export default Counter;
