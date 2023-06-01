import { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import * as Styled from './styles';

export const LongBreaks = () => {
    const { timeLeft } = useContext(TimerContext);

    return (
        <Styled.Container>
            <div>{timeLeft}</div>
        </Styled.Container>
    );
};
