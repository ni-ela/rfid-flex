import { useEffect, useState } from "react";
import { timeActual } from "../../utils";
const date = new Date();
export const Timer = () => {
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });

    useEffect(() => {
        const timer = setInterval(() => {
            //timeActual()
            const date = new Date();
            setDateTime(timeActual());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <label></label>
    )
}