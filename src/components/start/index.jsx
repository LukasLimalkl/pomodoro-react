import * as Styled from './styles';

const minutes = 0;
const seconds = 0;

let duration = minutes.current * 60;

const timer = (duration) => {
    let timer = duration;
    let minutes;

    setInterval(() => {
        minutes = timer / 60;
    }, 1000);
};

export const Start = () => {
    return (
        <Styled.Container>
            {minutes}:{seconds}
        </Styled.Container>
    );
};
