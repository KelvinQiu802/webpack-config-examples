# React Env Setup

## babel-loader & @babel/preset-react

```jsx
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
```

```js
function App() {
  const [num, setNum] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const handleClick = () => {
    console.log('You clicked the container');
    setNum(num + 1);
  };
  return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    'div',
    {
      className: 'container',
      onClick: handleClick,
    },
    'This is my React App ',
    num
  );
}
```
