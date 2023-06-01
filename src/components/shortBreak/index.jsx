import { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import * as Styled from './styles';

export const ShortBreak = () => {
    const { timeLeft } = useContext(TimerContext);

    return <Styled.Container>{timeLeft}</Styled.Container>;
};
