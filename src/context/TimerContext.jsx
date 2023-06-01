import { format } from 'date-fns';
import { createContext, useEffect, useState } from 'react';

export const TimerContext = createContext();

//eslint-disable-next-line
export const TimerProvider = ({ children }) => {
    const periodTime = 60 * 25;

    const [customTime, setCustomTime] = useState(0);
    const [baseTime, setBaseTime] = useState(periodTime);
    const [timer, setTimer] = useState(baseTime);
    const [timeLeft, setTimeLeft] = useState(format(baseTime * 1000, 'mm:ss'));
    const [isActive, setIsActive] = useState(false);
    const [storeTimeout, setStoreTimeOut] = useState(null);

    //buttons fn

    const [pomodoro, setPomodoro] = useState(true);
    const [shortBreak, setShortBreak] = useState(false);
    const [longBreak, setLongBreak] = useState(false);

    useEffect(() => {
        if (isActive && timer >= 0) {
            setStoreTimeOut(
                setTimeout(() => {
                    setTimer(timer - 1);
                    setTimeLeft(format(timer * 1000, 'mm:ss'));
                }, 1000),
            );
        } else {
            clearTimeout(storeTimeout);
        }
        //eslint-disable-next-line
    }, [timer, isActive]);

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

    return (
        <TimerContext.Provider
            value={{
                resetTimer,
                startTimer,
                setCustomTime,
                setPomodoro,
                setShortBreak,
                setLongBreak,
                shortBreak,
                longBreak,
                pomodoro,
                customTime,
                timer,
                isActive,
                timeLeft,
                storeTimeout,
                periodTime,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};
