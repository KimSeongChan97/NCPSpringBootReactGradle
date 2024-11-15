import React from 'react';
import Time from './Time';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1> Spring Boot + React + NCP !!! </h1>
      <Time />
      <h3> 카운트 :  3 </h3>
      <img src='./image/test.jpg' alt='치이카와' />
    </div>
  );
};

export default App;