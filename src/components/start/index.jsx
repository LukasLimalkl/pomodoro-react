import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';

export const Start = ({ children }) => {
    const [minutes, sethours] = useState(0);

    return (
        <Styled.Container>
            <div>
                <span>{minutes}</span>
            </div>
            <div>
                <button>Start</button>
                <button>Pause</button>
            </div>
        </Styled.Container>
    );
};

Start.propTypes = {
    children: P.number.isRequired,
};
