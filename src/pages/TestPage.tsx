import React, { useState } from 'react';

const width = '100px';
const height = '100px';
const backgroundColor = 'grey';

const TestPage: React.FC = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <div onClick={() => setState(state + 1)} style={{ width, height, backgroundColor }}>
        {state}
      </div>
      <div>ASDFF</div>
      <div>ASDFF</div>
      <div>ASDFF</div>
      <div>ASDFF</div>
      <div>ASDFF</div>
      <div>ASDFF</div>
      <div>ASDFF</div>
      <div>ASDFF</div>
      {state > 3 && <div>까꿍</div>}
    </>
  );
};

export default TestPage;
