import { useEffect, useState } from "react";
import { timeActual, dateActual } from "../../utils";
import "./index.css";

export default function Timer() {
    const [hourActual, setHourActual] = useState();
    function formattedTimeLeft() {
        const TIME_LIMIT = new Date("10/05/2022").getTime() - new Date().getTime();
        const duration = TIME_LIMIT;
  
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        hours = hours ? hours : "04";
        minutes = minutes ? minutes : "00";
        seconds = seconds ? seconds : "00";
  
        return `${hours}:${minutes}:${seconds}`;
      }
    useEffect(() => {
        var timer = setInterval(function () {
            setHourActual(formattedTimeLeft())
        }, 1000)
        return () => clearInterval(timer);
    }, []);

    return (
        <label className="temp emphasis">{hourActual}</label>
    )
}