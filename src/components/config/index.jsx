import * as Styled from './styles';

//eslint-disable-next-line
export const Config = ({ startAndPause, reset, addMoreTime, addMediumTime, addLessTime, isActive, inputValue }) => {

    return (
        <Styled.Container>
            <div>
                <button onClick={addMoreTime}>25</button>
                <button onClick={addMediumTime}>10</button>
                <button onClick={addLessTime}>5</button>
            </div>
            <input type="number" onChange={inputValue} />
            <button onClick={startAndPause}>
                {isActive ? 'Pausar' : 'Start'}
            </button>
            <button onClick={reset}>Reset</button>
        </Styled.Container>
    );
};
