import React from 'react';
import { Config } from '../config';
import * as Styled from './styles';

//eslint-disable-next-line
export const Start = ({ timeLeft }) => {
    return (
        <Styled.Container>
            <div>{timeLeft}</div>
            <Config />
        </Styled.Container>
    );
};
