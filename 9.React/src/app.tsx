import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const handleClick = () => {
    console.log('You clicked the container');
    setNum(num + 1);
  };
  return (
    <div className='container' onClick={handleClick}>
      This is my React App {num}
    </div>
  );
}

export default App;
