import { useState } from 'react';
import { Interval } from './components/Interval';
import { Start } from './components/start';
import * as Styled from './styles';

function App() {
    const [isActive, setIsActive] = useState(true);
    return (
        <Styled.Container>
            {isActive ? <Start /> : <Interval />}
        </Styled.Container>
    );
}

export default App;
