import { useContext, useRef } from 'react';
import audioClick from '../../audio/audio_click.mp3';
import { TimerContext } from '../../context/TimerContext';

import * as Styled from './styles';

export const Config = () => {
    const { resetTimer, startTimer, isActive } = useContext(TimerContext);

    const audioPomo = useRef(null);

    const reproduceSound = () => {
        audioPomo.current.play();
    };

    return (
        <Styled.Container>
            <button
                onClick={() => {
                    startTimer();
                    reproduceSound();
                }}
            >
                {isActive ? 'Pausar' : 'Start'}
            </button>

            <button onClick={resetTimer}>Reset</button>
            <audio src={audioClick} ref={audioPomo} />
        </Styled.Container>
    );
};
