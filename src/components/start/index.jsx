import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import * as Styled from './styles';

//eslint-disable-next-line
export const Start = ({ tempo }) => {
    const periodTime = 60 * 0.05;
    const [timer, setTimer] = useState(periodTime);
    const [timeLeft, setTimeLeft] = useState('00:00');
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
