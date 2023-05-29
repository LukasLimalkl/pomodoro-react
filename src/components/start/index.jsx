import * as Styled from './styles';

// const timer = (duration) => {
//     let min = 25;
//     let sec = 0;
//     duration = min * 60 + sec;

//     let timer = duration;
//     let minutes, seconds;
//     let display;

//     setInterval(() => {
//         minutes = Math.floor(timer / 60);
//         seconds = Math.floor(timer % 60);

//         minutes = minutes < 10 ? '0' + minutes : minutes;
//         seconds = seconds < 10 ? '0' + seconds : seconds;

//         display = `${minutes} : ${seconds}`;
//     }, 1000);
// };

export const Start = () => {
    const timer = (duration) => {
        let min = 25;
        let sec = 0;
        duration = min * 60 + sec;

        let timer = duration;
        let minutes, seconds;
        let display;

        setInterval(() => {
            minutes = Math.floor(timer / 60);
            seconds = Math.floor(timer % 60);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display = `${minutes} : ${seconds}`;
        }, 1000);
    };
    return <Styled.Container>{timer}</Styled.Container>;
};
