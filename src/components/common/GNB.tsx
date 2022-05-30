import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { userStore } from '../../stores/UserStore';

const GNBContainer = styled.div`
  width: 100vw;
  min-width: 1080px;
  height: 60px;
  display: flex;
  justify-content: center;

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
  font-family: 'NanumPenScript';
`;

const GNBBoardContainer = styled.div`
  margin-left: 10%;
  display: flex;
`;

const GNBBoardItem = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 25px;
  font-family: 'NanumPenScript';
  margin: 10px;
`;

const GNBLoginContainer = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;

const GNBLoginUserInfo = styled.div`
  width: 86px;
  height: 30px;
  margin-right: 15px;

  display: flex;
  align-items: center;
`;

const GNBLoginUserProfileImg = styled.div`
  width: 30px;
  height: 30px;
  background: url('img/profileImg-default.gif');
  background-size: cover;
  border-radius: 50%;
  margin-right: 10px;
`;

const GNBLoginUserNickName = styled.div`
  font-size: 13px;
  color: white;
`;

const GNBLoginButton = styled.div`
  width: 54px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #0dc00d;
  border: 0.5px solid black;

  line-height: 28px;
  font-size: 11px;
  color: #fff;
`;

const GNBLogInSection: React.FC = observer(() => {
  const navigate = useNavigate();
  const { isLogin, memberInfo } = userStore;

  return (
    <GNBLoginContainer>
      {isLogin ? (
        <>
          <GNBLoginUserInfo onClick={() => navigate(`/profile/${memberInfo.memberId}`)}>
            <GNBLoginUserProfileImg />
            <GNBLoginUserNickName>{memberInfo.nickName}님</GNBLoginUserNickName>
          </GNBLoginUserInfo>
          <GNBLoginButton onClick={() => userStore.signOut()}>로그아웃</GNBLoginButton>
        </>
      ) : (
        <GNBLoginButton onClick={() => navigate('/signin')}>로그인</GNBLoginButton>
      )}
    </GNBLoginContainer>
  );
});

export const GNB: React.FC = () => {
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
        <GNBLogInSection />
      </GNBWrapper>
    </GNBContainer>
  );
};
