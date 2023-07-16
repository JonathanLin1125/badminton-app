import React from 'react';
import './App.css';

function App() {

  const getContent = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  }
  return (
    <div className="App">
      <div className='headshot-picture'>
        <img src={require('./cat.jpg')} />
      </div>
      <div className='description'>
        {getContent()}
      </div>
    </div>
  );
}

export default App;
