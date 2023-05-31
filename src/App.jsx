import { useState } from 'react';
import { Interval } from './components/Interval';
import { Config } from './components/config';
import { Start } from './components/start';
import * as Styled from './styles';

function App() {
    const [isActive, setIsActive] = useState(true);
    return (
        <Styled.Container>
            {isActive ? <Start /> : <Interval />}
            <Config />
        </Styled.Container>
    );
}

export default App;
