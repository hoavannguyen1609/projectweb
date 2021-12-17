import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

import classes from "./CountDown.module.scss";

function CountDown() {
  const endDate: any = new Date("01/31/2022");
  const nowDate: any = useRef();

  const [remaining, setRemaining] = useState(
    (): any => endDate.getTime() - new Date().getTime()
  );
  const timerId: any = useRef();

  useEffect((): any => {
    timerId.current = setInterval((): void => {
      nowDate.current = new Date();
      setRemaining(endDate.getTime() - nowDate.current.getTime());
    }, 1000);

    return (): any => clearInterval(timerId.current);
  }, []);

  const seconds: any = useRef();
  const minutes: any = useRef();
  const hours: any = useRef();
  const days: any = useRef();

  seconds.current = ("00" + Math.floor((remaining % 60000) / 1000)).slice(-2);
  minutes.current = ("00" + Math.floor((remaining % 3600000) / 60000)).slice(
    -2
  );
  hours.current = (
    "00" + Math.floor((remaining % (3600000 * 24)) / 3600000)
  ).slice(-2);
  days.current = ("00" + Math.floor(remaining / (3600000 * 24))).slice(-2);
  return (
    <ul className="mb-0 d-flex">
      <li>
        <span className={clsx(classes.boxtitle__date_text)}>
          {days.current}
        </span>
        :
      </li>
      <li>
        <span className={clsx(classes.boxtitle__date_text)}>
          {hours.current}
        </span>
        :
      </li>
      <li>
        <span className={clsx(classes.boxtitle__date_text)}>
          {minutes.current}
        </span>
        :
      </li>
      <li>
        <span className={clsx(classes.boxtitle__date_text)}>
          {seconds.current}
        </span>
      </li>
    </ul>
  );
}

export default CountDown;
