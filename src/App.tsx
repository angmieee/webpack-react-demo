import React from 'react';
import Coffee from '@/assets/images/coffee.jpg';
import './index.scss';

function App() {
  function name(params: any) {
    const a = 1;
  }

  return (
    <div className="app">
      <span className="text">Hello World</span>
      <img src={Coffee} width={240} height={200} alt="" />
    </div>
  );
}

export default App;
