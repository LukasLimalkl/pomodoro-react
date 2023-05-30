import * as Styled from './styles';

//eslint-disable-next-line
export const Config = ({startAndPause, reset , addMoreTime, addMediumTime,addLessTime,isActive }) => {
    return (
        <Styled.Container>
            <input type="number" />
            <button onClick={startAndPause}>
                {isActive ? 'Pausar' : 'Start'}
            </button>
            <button onClick={reset}>Reset</button>
        </Styled.Container>
    );
};
