import React, { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import { Config } from '../config';
import * as Styled from './styles';

//eslint-disable-next-line
export const Start = () => {
    const {
        resetTimer,
        handleChange,
        startTimer,
        value,
        baseTime,
        timer,
        isActive,
        timeLeft,
        isOver,
        storeTimeout,
        periodTime,
        shortPause,
        longPause,
    } = useContext(TimerContext);
    return (
        <Styled.Container>
            <div>{timeLeft}</div>
            <Config />
        </Styled.Container>
    );
};
