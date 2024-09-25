import { useState, useEffect } from 'react';
import { TIMER } from '../constants';


const ProgressBar = () => {
    const [remainingTime, setRemainingTime] = useState(TIMER);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return <progress value={remainingTime} max={TIMER} />
}

export default ProgressBar;