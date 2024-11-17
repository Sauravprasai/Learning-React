//Import React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Get a refererence to the div with Id root
const el = document.getElementById('root');

//Tell React to take control of that element
const root = ReactDOM.createRoot(el);

//Show the component on the screen
root.render(<App/>);