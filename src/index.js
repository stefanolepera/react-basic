import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * This is the entry point of our application.
 * If you check in the public folder the index.html file, you will see that we have
 * only one div: <div id="root"></div>.
 * Using the render method of ReactDOM, here we are injecting our main component App.js to 
 * the div in the index.html which has id="root".
 * We are using ReactDOM because we are building a web app, if we were to build a mobile app
 * we would use ReactNative (which uses a different render engine).
 */
ReactDOM.render(<App />, document.getElementById('root'));

