import { useEffect, useState } from 'react';
import * as Styled from './styles';

import React from 'react';

export const Start = () => {
    const [display, setDisplay] = useState('25 : 00');
    const [isCounting, setIsCounting] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isCounting) {
            let min = 25;
            let sec = 0;
            let duration = min * 60 + sec;
            let timer = duration;

            intervalId = setInterval(() => {
                let minutes = Math.floor(timer / 60);
                let seconds = Math.floor(timer % 60);

                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;

                const newDisplay = `${minutes} : ${seconds}`;
                setDisplay(newDisplay);

                timer--;

                if (timer < 0) {
                    clearInterval(intervalId);
                }
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isCounting]);

    const handleStart = () => {
        setIsCounting(true);
    };

    return (
        <div>
            <Styled.Container>{display}</Styled.Container>
            <button onClick={handleStart} disabled={isCounting}>
                Iniciar Contagem
            </button>
        </div>
    );
};
