import React from 'react';
import { GNB } from './GNB';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Body = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #dadada;
`;

const MainContainer = styled.div`
  width: 1080px;
`;

export const LayOut: React.FC = () => {
  return (
    <>
      <GNB />
      <Body>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Body>
    </>
  );
};
