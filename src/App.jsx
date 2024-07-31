import React from 'react';
import Coffee from '@src/assets/images/coffee.jpg'
import './index.scss';

function App() {
    return (
        <div className="app">
            <span className="text">Hello World</span>
            <img src={Coffee} width={240} height={200} alt="" />
        </div>
    );
}

export default App;