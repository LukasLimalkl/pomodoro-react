import { Config } from './components/config';
import { Start } from './components/start';
import * as Styled from './styles';

function App() {
    return (
        <Styled.Container>
            <Start />
            <Config />
        </Styled.Container>
    );
}

export default App;
