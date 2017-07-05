import ReactDOM from 'react-dom';
import React from 'react';
import route from './routes/routes.js'
ReactDOM.render(
    <div>
        {route()}
    </div>, document.querySelector('#root')
);