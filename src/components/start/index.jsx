import P from 'prop-types';
import * as Styled from './styles';

export const Start = ({ minutes, seconds }) => {
    return (
        <Styled.Container>
            <div>
                <span>
                    {minutes}:{seconds}
                </span>
            </div>
            <div>
                <button>Start</button>
                <button>Pause</button>
            </div>
        </Styled.Container>
    );
};

Start.propTypes = {
    minutes: P.number.isRequired,
    seconds: P.number.isRequired,
};
