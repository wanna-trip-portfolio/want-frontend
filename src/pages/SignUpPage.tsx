import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WantLogo } from '../components/common/WantLogo';
import { SignInWrap, SignUpContainer, SignUpForm } from './SignUpPage.style';
import { SignUpIdInput } from '../components/page/signUpPage/SignUpIdInput';
import { SignUpPwInput } from '../components/page/signUpPage/SignUpPwInput';

export interface SignUpInfo {
  webId: string;
  webPw: string;
  name: string;
  gender: string;
  nickName: string;
  birth: string;
  email: string;
  phoneNumber: string;
}

export interface SignUpValidCheck {
  webId: boolean;
  webPw: boolean;
  name: boolean;
  gender: boolean;
  nickName: boolean;
  birth: boolean;
  email: boolean;
  phoneNumber: boolean;
}

export interface SignUpFormProps {
  signUpInfo: SignUpInfo;
  validCheck: SignUpValidCheck;
  setSignUpInfo: React.Dispatch<React.SetStateAction<SignUpInfo>>;
  setValidCheck: React.Dispatch<React.SetStateAction<SignUpValidCheck>>;
}

const SignUpPage: React.FC = () => {
  const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
    webId: '',
    webPw: '',
    name: '',
    gender: '',
    nickName: '',
    phoneNumber: '',
    birth: '',
    email: '',
  });

  const [validCheck, setValidCheck] = useState<SignUpValidCheck>({
    webId: false,
    webPw: false,
    name: false,
    gender: false,
    nickName: false,
    birth: false,
    email: false,
    phoneNumber: false,
  });

  const signUpFormProps: SignUpFormProps = { signUpInfo, setSignUpInfo, validCheck, setValidCheck };

  return (
    <SignInWrap>
      <SignUpContainer>
        <Link to={'/home'} style={{ textDecoration: 'none' }}>
          <WantLogo>Want</WantLogo>
        </Link>
        <SignUpForm>
          <SignUpIdInput signUpFormProps={signUpFormProps} />
          <SignUpPwInput signUpFormProps={signUpFormProps} />
        </SignUpForm>
      </SignUpContainer>
    </SignInWrap>
  );
};

export default SignUpPage;
