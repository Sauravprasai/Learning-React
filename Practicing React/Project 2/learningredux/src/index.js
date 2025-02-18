import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

root.render(
    <Provider store={store}>
        <App/>   
    </Provider>       
)
