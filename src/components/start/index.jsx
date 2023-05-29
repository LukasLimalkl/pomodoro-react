import { useEffect, useState } from 'react';
import * as Styled from './styles';

export const Start = () => {
    const [display, setDisplay] = useState('25 : 00');

    useEffect(() => {
        let min = 25;
        let sec = 0;
        let duration = min * 60 + sec;

        let timer = duration;

        const intervalId = setInterval(() => {
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

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Styled.Container>
            {display}
            <button onClick={() => callTimer}>sta</button>
        </Styled.Container>
    );
};
