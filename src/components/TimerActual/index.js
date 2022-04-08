import { useEffect, useState } from "react";
import { timeActual, dateActual } from "../../utils";

export default function TimerActual () {
    const [hourActual, setHourActual] = useState();
    useEffect(() => {
      const timer = setInterval(() => {
          setHourActual(timeActual());
      }, 1000);
      return () => clearInterval(timer);
  }, []);

    return (
        <label className="timeActual"><span className="emphasis">{dateActual()}</span> {hourActual}</label>
    )
}