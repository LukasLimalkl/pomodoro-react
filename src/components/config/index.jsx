import * as Styled from './styles';

export const Config = () => {
    return (
        <Styled.Container>
            <div className="foco">
                <span>
                    Tempo de Foco: <p>00:00</p>
                </span>
                <input type="number" />
            </div>
            <div className="intervalo">
                <span>
                    Tempo de Intervalo: <p>00:00</p>
                </span>
                <input type="number" />
            </div>
        </Styled.Container>
    );
};
