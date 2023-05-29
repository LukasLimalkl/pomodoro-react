import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import * as Styled from './styles';

export const Start = () => {
    const periodTime = 60 * 25;
    const [timer, setTimer] = useState(periodTime);
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTimer(timer - 1);
            setTimeLeft(format(timer * 1000, 'mm:ss'));
        }, 1000);
    }, [timer]);

    return (
        <Styled.Container>
            <span>{timeLeft}</span>
        </Styled.Container>
    );
};
