import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

const width = '100px';
const height = '100px';
const backgroundColor = 'grey';

const TestPage: React.FC = () => {
  console.log('TestPage Component');
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);

  useEffect(() => {
    console.log('시작');

    setTimeout(() => {
      console.log('setTimeout 시작');
      flushSync(() => setState1(1));
      flushSync(() => setState2(2));
      flushSync(() => setState3(3));
      console.log('setTimeout 종료');
    }, 10);
    console.log('종료');
  }, []);

  return (
    <>
      <div>{state1}</div>
      <div>{state2}</div>
      <div>{state3}</div>
    </>
  );
};

export default TestPage;
