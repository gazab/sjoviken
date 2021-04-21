import { ReactNode, useEffect, useState } from "react";
import "./Countdown.css";

export const Countdown = () => {
  const getCountdown = () => {
    const timeRemaining =
      new Date(`2022-11-1`).getTime() - new Date().getTime();
    let countdown = {};
    if (timeRemaining > 0) {
      countdown = {
        dagar: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        timmar: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
        minuter: Math.floor((timeRemaining / 1000 / 60) % 60),
        sekunder: Math.floor((timeRemaining / 1000) % 60),
      };
    }
    return countdown;
  };

  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    setTimeout(() => {
      setCountdown(getCountdown());
    }, 1000);
  });

  const data: ReactNode[] = [];
  Object.entries(countdown).forEach(([unit, value]) => {
    data.push(
      <li key={Math.random().toString(16)}>
        <strong>{value as string}</strong> {unit}
      </li>
    );
  });

  return (
    <>
      <h1>BRF Sjöviken</h1>
      <ul className="countdown-list">{data}</ul>
      <span>till inflyttning</span>
    </>
  );
};
