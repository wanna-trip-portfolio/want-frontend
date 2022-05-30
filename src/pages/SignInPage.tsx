import React, { useState } from 'react';
import styled from 'styled-components';
import { PeopleIcon } from '../assets/icon/PeopleIcon';
import LockIcon from '../assets/icon/LockIcon';
import { MemberRepository } from '../repositories/MemberRepository';
import { useNavigate } from 'react-router-dom';

export interface SignInInfo {
  webId: string;
  webPw: string;
}

interface SignInItemProps {
  signInInfo: SignInInfo;
  setSignInInfo: React.Dispatch<React.SetStateAction<SignInInfo>>;
}

const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;
`;

const SignInHeader = styled.div`
  color: #02c75a;
  font-family: 'NanumPenScript';
  font-size: 100px;
`;

const SignInLoginContainer = styled.div`
  width: 460px;
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 20px;

  border: 1px solid #c6c6c6;
  border-radius: 6px;

  > div:nth-of-type(1) {
    border-radius: 6px 6px 0 0;
  }
  > div:nth-of-type(2) {
    border-radius: 0 0 6px 6px;
    margin-bottom: 30px;
  }
`;

const SignInLoginItemWrapper = styled.div<{ isFocused: boolean }>`
  border: 1px solid ${(props) => (props.isFocused ? '#03c75a' : '#dadada')};
  width: 400px;
  height: 48px;

  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SignInLoginItemHeader = styled.div<{ isFocus: boolean }>`
  width: 60px;
  color: ${(props) => (props.isFocus ? 'black' : 'grey')};
`;

const SignInLoginItemInput = styled.input`
  width: 280px;
  font-size: 15px;
  border: 0;

  :focus {
    outline: none;
  }
`;

const SignInSendButton = styled.div`
  width: 400px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  background-color: #02c75a;

  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #fff;

  :hover {
    cursor: pointer;
  }
`;

const SignInLoginId: React.FC<SignInItemProps> = ({ signInInfo, setSignInInfo }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <SignInLoginItemWrapper isFocused={isFocus}>
      <PeopleIcon width={'20px'} height={'20px'} color={isFocus ? 'black' : 'grey'} />
      <SignInLoginItemHeader isFocus={isFocus}>아이디</SignInLoginItemHeader>
      <SignInLoginItemInput
        type={'text'}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e) => {
          setSignInInfo({ ...signInInfo, webId: e.target.value });
        }}
      />
    </SignInLoginItemWrapper>
  );
};

const SignInLoginPassword: React.FC<SignInItemProps> = ({ signInInfo, setSignInInfo }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <SignInLoginItemWrapper isFocused={isFocus}>
      <LockIcon width={'20px'} height={'20px'} color={isFocus ? 'black' : 'grey'} />
      <SignInLoginItemHeader isFocus={isFocus}>비밀번호</SignInLoginItemHeader>
      <SignInLoginItemInput
        type={'password'}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e) => {
          setSignInInfo({ ...signInInfo, webPw: e.target.value });
        }}
      />
    </SignInLoginItemWrapper>
  );
};

const SignInPage: React.FC = () => {
  const [signInInfo, setSignInInfo] = useState<SignInInfo>({ webId: '', webPw: '' });
  const navigate = useNavigate();

  const onClickSendButton = () => {
    if (signInInfo.webId !== '' && signInInfo.webPw !== '') {
      MemberRepository.signIn(signInInfo)
        .then((result) => {
          console.log(result);
          navigate('/main');
        })
        //TODO: 로그인 실패 어케할껀지 추가해야함
        .catch(() => console.log('로그인 실패'));
    }
  };

  return (
    <SignInContainer>
      <SignInHeader>Want</SignInHeader>
      <SignInLoginContainer>
        <SignInLoginId signInInfo={signInInfo} setSignInInfo={setSignInInfo} />
        <SignInLoginPassword signInInfo={signInInfo} setSignInInfo={setSignInInfo} />
        <SignInSendButton onClick={onClickSendButton}>로그인</SignInSendButton>
      </SignInLoginContainer>
      <div>비밀번호 찾기 아이디 찾기 회원가입</div>
    </SignInContainer>
  );
};

export default SignInPage;
