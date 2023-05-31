import { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import * as Styled from './styles';

//eslint-disable-next-line
export const Config = () => {
    const {
        resetTimer,
        customTime,
        setCustomTime,
        startTimer,
        baseTime,
        setBaseTime,
        periodTime,
        longPause,
        shortPause,
        isActive,
    } = useContext(TimerContext);

    return (
        <Styled.Container>
            <div>
                <button onClick={() => setBaseTime(periodTime)}>25</button>
                <button onClick={() => setBaseTime(longPause)}>10</button>
                <button onClick={() => setBaseTime(shortPause)}>5</button>
            </div>
            <input
                type="text"
                onChange={(e) => setCustomTime(e.target.value)}
                min="0"
                max="60"
            />
            <button onClick={startTimer}>
                {isActive ? 'Pausar' : 'Start'}
            </button>
            <button onClick={resetTimer}>Reset</button>
        </Styled.Container>
    );
};
