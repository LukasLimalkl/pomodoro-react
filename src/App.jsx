import { useContext, useEffect, useState } from 'react';
import { Interval } from './components/Interval';
import { Config } from './components/config';
import { Start } from './components/start';
import { TimerContext } from './context/TimerContext';
import * as Styled from './styles';

function App() {
    const { timeLeft } = useContext(TimerContext);
    const [timeSwitch, setTimeSwitch] = useState(false);

    useEffect(() => {
        if (timeLeft <= '00:00') {
            setTimeSwitch(true);
        }
    }, [timeLeft, timeSwitch]);

    return (
        <Styled.Container>
            {timeSwitch ? <Interval /> : <Start />}
            <Config />
        </Styled.Container>
    );
}

export default App;
