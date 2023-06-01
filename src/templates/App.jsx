import { ButtonsTop } from '../components/buttonsTop';
import { Config } from '../components/config';
import { Start } from '../components/start';
import * as Styled from './styles';

function App() {
    return (
        <Styled.Container>
            <ButtonsTop />
            <Start />
            <Config />
        </Styled.Container>
    );
}

export default App;
