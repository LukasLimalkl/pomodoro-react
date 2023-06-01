import { format } from 'date-fns';
import { createContext, useEffect, useState } from 'react';

export const TimerContext = createContext();

//eslint-disable-next-line
export const TimerProvider = ({ children }) => {
    const periodTime = 60 * 0.05;
    const shortPause = 60 * 5;
    const longPause = 60 * 10;

    const [customTime, setCustomTime] = useState(0);
    const [baseTime, setBaseTime] = useState(periodTime);
    const [timer, setTimer] = useState(baseTime);
    const [timeLeft, setTimeLeft] = useState(format(baseTime * 1000, 'mm:ss'));
    const [isActive, setIsActive] = useState(false);
    const [storeTimeout, setStoreTimeOut] = useState(null);
    const [isOver, setIsOver] = useState(false);

    const [isInterval, setIsInterval] = useState(60 * 0.02);
    const [lunchTime, setLunchTime] = useState(false);
    const [startAgain, setStartAgain] = useState(false);

    useEffect(() => {
        if (isActive && timer >= 0) {
            setStoreTimeOut(
                setTimeout(() => {
                    setTimer(timer - 1);
                    setTimeLeft(format(timer * 1000, 'mm:ss'));
                }, 1000),
            );
        } else {
            if (lunchTime == true) {
                restartTimer();
            }
            clearTimeout(storeTimeout);
            setStartInterval();
            setStartAgain(true);
        }
        //eslint-disable-next-line
    }, [timer, isActive]);

    useEffect(() => {
        resetTimer();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [baseTime]);

    useEffect(() => {
        if (customTime > 0) {
            let seconds = customTime * 60;
            if (customTime == 60) seconds--;
            setBaseTime(seconds);
        }
    }, [customTime]);

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
        setLunchTime(true);
    };
    const setStartInterval = () => {
        setIsActive(false);
        setTimer(isInterval);
        setTimeLeft(format(isInterval * 1000, 'mm:ss'));
    };

    const restartTimer = () => {
        if (startAgain === true) {
            resetTimer();
            setStartAgain(false);
        }
    };

    return (
        <TimerContext.Provider
            value={{
                resetTimer,
                startTimer,
                setBaseTime,
                setCustomTime,
                customTime,
                baseTime,
                timer,
                isActive,
                timeLeft,
                isOver,
                storeTimeout,
                periodTime,
                shortPause,
                longPause,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};
