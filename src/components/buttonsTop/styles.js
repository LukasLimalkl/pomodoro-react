import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding-bottom: 80px;
    gap: 20px;
    width: 500px;
    height: 50px;
    justify-content: center;
    align-items: center;

    > button {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 8px;
        font-size: 15px;
        cursor: pointer;
        opacity: 0.9;
    }
    > button:hover {
        opacity: 1;
    }
`;
