import { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import * as Styled from './styles';

//eslint-disable-next-line
export const Config = () => {
    const { resetTimer, startTimer, isActive } = useContext(TimerContext);

    return (
        <Styled.Container>
            <button onClick={startTimer}>
                {isActive ? 'Pausar' : 'Start'}
            </button>
            <button onClick={resetTimer}>Reset</button>
        </Styled.Container>
    );
};
