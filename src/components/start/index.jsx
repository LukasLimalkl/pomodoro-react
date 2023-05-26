import { useState } from 'react';
import * as Styled from './styles';

export const Start = () => {
    const [minutes, sethours] = useState(0);

    return (
        <Styled.Container>
            <div>
                <span>
                    {minutes}:{}
                </span>
            </div>
            <div>
                <button>Start</button>
                <button>Pause</button>
            </div>
        </Styled.Container>
    );
};
