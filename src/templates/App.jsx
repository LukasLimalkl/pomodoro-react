import { useContext } from 'react';
import { ButtonsTop } from '../components/buttonsTop';
import { Config } from '../components/config';
import { LongBreaks } from '../components/longBreak';
import { ShortBreaks } from '../components/shortBreak';
import { Start } from '../components/start';
import { TimerContext } from '../context/TimerContext';
import * as Styled from './styles';

function App() {
    const { pomodoro, shortBreak, longBreak } = useContext(TimerContext);

    return (
        <Styled.Container>
            <ButtonsTop />
            {pomodoro && <Start />}
            {shortBreak && <ShortBreaks />}
            {longBreak && <LongBreaks />}
            <Config />
        </Styled.Container>
    );
}

export default App;
