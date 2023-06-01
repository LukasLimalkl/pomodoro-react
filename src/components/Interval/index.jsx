import { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import * as Styled from './styles';

export const Interval = () => {
    const { timeLeft } = useContext(TimerContext);

    return (
        <Styled.Container>
            <span>{timeLeft}</span>
        </Styled.Container>
    );
};
