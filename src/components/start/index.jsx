import React, { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import * as Styled from './styles';

//eslint-disable-next-line
export const Start = () => {
    const { timeLeft } = useContext(TimerContext);
    return (
        <Styled.Container>
            <div>{timeLeft}</div>
        </Styled.Container>
    );
};
