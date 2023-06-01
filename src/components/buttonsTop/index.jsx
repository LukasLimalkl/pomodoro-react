import { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import * as Styled from './styles';
import { format } from 'date-fns';

export const ButtonsTop = () => {
    const {
        setPomodoro,
        setShortBreak,
        setLongBreak,
        setBaseTime,
        setTimer,
        setTimeLeft,
        shortB,
        longB,
        periodTime,
        baseTime,
    } = useContext(TimerContext);

    return (
        <Styled.Container>
            <button
                onClick={() => {
                    setPomodoro(true);
                    setShortBreak(false);
                    setLongBreak(false);
                    setBaseTime(periodTime);
                    setTimer(periodTime);
                    setTimeLeft(format(periodTime * 1000, 'mm:ss'));
                }}
            >
                Pomodoro
            </button>
            <button
                onClick={() => {
                    setPomodoro(false);
                    setShortBreak(true);
                    setLongBreak(false);
                    setBaseTime(shortB);
                    setTimer(shortB);
                    setTimeLeft(format(shortB * 1000, 'mm:ss'));
                }}
            >
                Short Break
            </button>
            <button
                onClick={() => {
                    setPomodoro(false);
                    setShortBreak(false);
                    setLongBreak(true);
                    setBaseTime(longB);
                    setTimer(longB);
                    setTimeLeft(format(longB * 1000, 'mm:ss'));
                }}
            >
                Long Break
            </button>
        </Styled.Container>
    );
};
