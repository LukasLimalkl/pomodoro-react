import * as Styled from './styles';

export const Start = () => {
    return (
        <Styled.Container>
            <div>
                <span>00:00</span>
            </div>
            <div>
                <button>Start</button>
                <button>Pause</button>
            </div>
        </Styled.Container>
    );
};
