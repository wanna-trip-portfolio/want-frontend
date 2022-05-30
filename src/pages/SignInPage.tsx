import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userStore } from '../stores/UserStore';
import {
  SignInContainer,
  SignInHeader,
  SignInLoginContainer,
  SignInSendButton,
} from '../components/signInPage/SignIn.style';
import { SignInLoginId } from '../components/signInPage/SignInLoginId';
import { SignInLoginPassword } from '../components/signInPage/SignInPassword';
import { SignInFooter } from '../components/signInPage/SignInFooter';

export interface SignInInfo {
  webId: string;
  webPw: string;
}

export interface SignInItemProps {
  signInInfo: SignInInfo;
  setSignInInfo: React.Dispatch<React.SetStateAction<SignInInfo>>;
}

const SignInPage: React.FC = () => {
  const [signInInfo, setSignInInfo] = useState<SignInInfo>({ webId: '', webPw: '' });
  const navigate = useNavigate();

  const onClickSendButton = async () => {
    if (signInInfo.webId !== '' && signInInfo.webPw !== '') {
      if (await userStore.signIn(signInInfo)) {
        navigate('/main');
      } else {
        console.log('로그인 실패');
      }
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
      <SignInFooter />
    </SignInContainer>
  );
};

export default SignInPage;
