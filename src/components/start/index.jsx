import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Config } from '../config';
import * as Styled from './styles';

//eslint-disable-next-line
export const Start = () => {
    const periodTime = 60 * 25;

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

    const startTimer = () => {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    const resetTimer = () => {
        setTimer(baseTime);
        setTimeLeft('25:00', 'mm:ss');
        setIsActive(false);
    };

    return (
        <Styled.Container>
            <div>{timeLeft}</div>
            <Config
                startAndPause={startTimer}
                reset={resetTimer}
                isActive={isActive}
            />
        </Styled.Container>
    );
};
