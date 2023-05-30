import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import * as Styled from './styles';

export const Start = () => {
    const periodTime = 60 * 25;
    const [timer, setTimer] = useState(periodTime);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [storeTimeout, setStoreTimeOut] = useState(null);

    useEffect(() => {
        if (isActive) {
            setStoreTimeOut(
                setTimeout(() => {
                    setTimer(timer - 1);
                    setTimeLeft(format(timer * 1000, 'mm:ss'));
                }, 1000),
            );
        } else {
            clearTimeout(storeTimeout);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, 0);

    const startTimer = () => {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    const resetTimer = () => {
        setTimer(periodTime);
        setTimeLeft('25:00', 'mm:ss');
        setIsActive(false);
    };

    return (
        <Styled.Container>
            <span>{timeLeft}</span>
            <button onClick={() => startTimer()}>
                {isActive ? 'Pausar' : 'Start'}
            </button>
            <button onClick={() => resetTimer()}>Reset</button>
        </Styled.Container>
    );
};
