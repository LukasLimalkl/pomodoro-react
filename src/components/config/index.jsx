import { useRef } from 'react';
import * as Styled from './styles';

export const Config = () => {
    const minutes = useRef(0);
    const minutesInterval = useRef(0);

    return (
        <Styled.Container>
            <div className="foco">
                <span>
                    Tempo de Foco: <p>00</p>
                </span>
                <input type="number" ref={minutes} />
            </div>
            <div className="intervalo">
                <span>
                    Tempo de Intervalo: <p>00</p>
                </span>
                <input type="number" ref={minutesInterval} />
            </div>
            <button>Salvar</button>
        </Styled.Container>
    );
};
