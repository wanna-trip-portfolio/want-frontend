import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const TestDiv = styled.div<{ color: string }>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
  :hover {
    cursor: pointer;
  }
`;

const TestPage: React.FC = () => {
  return (
    <>
      <TestDiv
        color={'red'}
        onClick={() => {
          const result = axios.get('http://localhost:8080/test1');
          result.then((res) => console.log(res));
        }}
      />
      <TestDiv
        color={'blue'}
        onClick={() => {
          const result = axios.get('http://localhost:8080/test2');
          result.then((res) => console.log(res));
        }}
      />
      <TestDiv color={'green'} />
    </>
  );
};

export default TestPage;
