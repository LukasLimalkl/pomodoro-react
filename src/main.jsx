import React from 'react';
import ReactDOM from 'react-dom/client';
import { TimerProvider } from './context/TimerContext.jsx';
import { GlobalStyle } from './styles/global-styles.js';
import App from './templates/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle />
        <TimerProvider>
            <App />
        </TimerProvider>
    </React.StrictMode>,
);
