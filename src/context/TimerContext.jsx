import { format } from 'date-fns';
import { createContext, useEffect, useState } from 'react';

export const TimerContext = createContext();

//eslint-disable-next-line
export const TimerProvider = ({ children }) => {
    const periodTime = 60 * 25;
    const shortPause = 60 * 5;
    const longPause = 60 * 10;

    const [value, setValue] = useState('');
    const [baseTime, setBaseTime] = useState(periodTime);
    const [timer, setTimer] = useState(baseTime);
    const [timeLeft, setTimeLeft] = useState(format(baseTime * 1000, 'mm:ss'));
    const [isActive, setIsActive] = useState(false);
    const [storeTimeout, setStoreTimeOut] = useState(null);
    const [isOver, setIsOver] = useState(false);

    useEffect(() => {
        if (isActive) {
            setStoreTimeOut(
                setTimeout(() => {
                    setTimer(timer - 1);
                    setTimeLeft(format(timer * 1000, 'mm:ss'));
                }, 1000),
            );
            if (timeLeft === 0) {
                clearTimeout(storeTimeout);
                setIsOver(true);
                console.log(isOver);
            }
        } else {
            clearTimeout(storeTimeout);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer, isActive, timeLeft]);

    useEffect(() => {
        resetTimer();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [baseTime]);

    const startTimer = () => {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimer(baseTime);
        setTimeLeft(format(baseTime * 1000, 'mm:ss'));
    };

    const handleChange = (period) => {
        setValue(period.target.value);
        setBaseTime(value);
        resetTimer();
    };

    return (
        <TimerContext.Provider
            value={{
                timeLeft,
                setTimeLeft,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};
