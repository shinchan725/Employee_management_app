import React, { useState } from 'react';

interface IState {
  count: number;
}

const Counter: React.FC = () => {
  const [state, setState] = useState<IState>({ count: 0 });

  // increment function
  const handleInc = () :void => {
    setState({ count: state.count + 1 });
  };

  // decrement function
  const handleDec = () :void => {
    setState({ count: state.count - 1 });
  };

  return (
    <>
      <h1>Event handling</h1>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='display-3'>{state.count}</h2>
              <button className='btn btn-success ms-3' onClick={handleInc}>
                INC
              </button>
              <button className='btn btn-danger ms-3' onClick={handleDec}>
                DEC
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
