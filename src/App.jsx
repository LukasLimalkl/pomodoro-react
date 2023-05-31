import { useContext, useEffect, useState } from 'react';
import { Interval } from './components/Interval';
import { Config } from './components/config';
import { Start } from './components/start';
import { TimerContext } from './context/TimerContext';
import * as Styled from './styles';

function App() {
    const { timeLeft } = useContext(TimerContext);
    const [isInterval, setIsInterval] = useState(false);
    const [isTimeStudy, setIsTimeStudy] = useState(false);

    useEffect(() => {
        if (timeLeft <= '00:00') {
            setIsInterval(true);
            console.log('cabo');
        }
    }, [timeLeft]);

    return (
        <Styled.Container>
            {isInterval ? <Interval /> : <Start />}
            <Config />
        </Styled.Container>
    );
}

export default App;
