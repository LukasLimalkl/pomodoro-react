import { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import * as Styled from './styles';

export const ButtonsTop = () => {
    const { setPomodoro, setShortBreak, setLongBreak } =
        useContext(TimerContext);

    return (
        <Styled.Container>
            <button
                onClick={() => {
                    setPomodoro(true);
                    setShortBreak(false);
                    setLongBreak(false);
                }}
            >
                Pomodoro
            </button>
            <button
                onClick={() => {
                    setPomodoro(false);
                    setShortBreak(true);
                    setLongBreak(false);
                }}
            >
                Short Break
            </button>
            <button
                onClick={() => {
                    setPomodoro(false);
                    setShortBreak(false);
                    setLongBreak(true);
                }}
            >
                Long Break
            </button>
        </Styled.Container>
    );
};
