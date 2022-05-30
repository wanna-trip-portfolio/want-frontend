import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GNBContainer = styled.div`
  width: 100vw;
  min-width: 1080px;
  height: 60px;
  display: flex;
  justify-content: center;
  font-family: 'NanumPenScript';
  background-color: #03c75a;
  color: white;
`;

const GNBWrapper = styled.div`
  width: 1080px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const GNBLogo = styled.div`
  font-size: 40px;
`;

const GNBBoardContainer = styled.div`
  margin-left: 10%;
  display: flex;
  font-size: 25px;
`;

const GNBBoardItem = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GNBSignButton = styled.div`
  width: 120px;
  margin-left: auto;
  padding-right: 10px;
  background-color: blue;
  display: flex;
`;

const GNB: React.FC = () => {
  const navigate = useNavigate();

  return (
    <GNBContainer>
      <GNBWrapper>
        <GNBLogo>Want</GNBLogo>
        <GNBBoardContainer>
          <GNBBoardItem>Home</GNBBoardItem>
          <GNBBoardItem>랜선여행</GNBBoardItem>
          <GNBBoardItem>사진 자랑</GNBBoardItem>
          <GNBBoardItem>여행지 정보</GNBBoardItem>
          <GNBBoardItem>About Us</GNBBoardItem>
        </GNBBoardContainer>
        <GNBSignButton onClick={() => navigate('/signin')}>로그인</GNBSignButton>
      </GNBWrapper>
    </GNBContainer>
  );
};

const MainPage: React.FC = () => {
  return (
    <>
      <GNB />
    </>
  );
};

export default MainPage;
