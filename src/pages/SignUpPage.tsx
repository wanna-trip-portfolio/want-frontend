import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  SignUpContainer,
  SignUpForm,
  SignUpHeader,
  SignUpSubmitButton,
  SignUpWrap,
} from '../components/signUpPage/SignUp.style';
import { SignUpIdInput } from '../components/signUpPage/SignUpIdInput';
import { SignUpPwInput } from '../components/signUpPage/SignUpPwInput';
import { SignUpNickNameInput } from '../components/signUpPage/SignUpNickNameInput';
import { SignUpNameInput } from '../components/signUpPage/SignUpNameInput';
import { SignUpBirthInput } from '../components/signUpPage/SignUpBirthInput';
import { SignUpGenderInput } from '../components/signUpPage/SignUpGenderInput';
import { SignUpEmailInput } from '../components/signUpPage/SignUpEmailInput';
import { SignUpPhoneNumberInput } from '../components/signUpPage/SignUpPhoneNumberInput';
import { MemberRepository } from '../repositories/MemberRepository';

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
    nickName: '',
    name: '',
    gender: '',
    birth: '',
    email: '',
    phoneNumber: '',
  });

  const [validCheck, setValidCheck] = useState<SignUpValidCheck>({
    webId: false,
    webPw: false,
    nickName: false,
    name: false,
    gender: false,
    birth: false,
    email: false,
    phoneNumber: false,
  });

  const signUpFormProps: SignUpFormProps = { signUpInfo, setSignUpInfo, validCheck, setValidCheck };

  const navigate = useNavigate();

  useEffect(() => {
    console.log(signUpInfo);
  }, [signUpInfo]);

  const isValidComplete = () => {
    return (
      validCheck.webId &&
      validCheck.webPw &&
      validCheck.name &&
      validCheck.gender &&
      validCheck.nickName &&
      validCheck.birth &&
      validCheck.email &&
      validCheck.phoneNumber
    );
  };

  const onClickSendButton = () => {
    if (isValidComplete()) {
      MemberRepository.signUp(signUpInfo).then(() => navigate('/main'));
    }
  };

  return (
    <SignUpWrap>
      <SignUpContainer>
        <Link to={'/home'} style={{ textDecoration: 'none' }}>
          <SignUpHeader>Want</SignUpHeader>
        </Link>
        <SignUpForm>
          <SignUpIdInput signUpFormProps={signUpFormProps} />
          <SignUpPwInput signUpFormProps={signUpFormProps} />
          <SignUpNickNameInput signUpFormProps={signUpFormProps} />
          <SignUpNameInput signUpFormProps={signUpFormProps} />
          <SignUpBirthInput signUpFormProps={signUpFormProps} />
          <SignUpGenderInput signUpFormProps={signUpFormProps} />
          <SignUpEmailInput signUpFormProps={signUpFormProps} />
          <SignUpPhoneNumberInput signUpFormProps={signUpFormProps} />
          <SignUpSubmitButton isValidComplete={isValidComplete()} onClick={onClickSendButton}>
            가입하기
          </SignUpSubmitButton>
        </SignUpForm>
        <div>이용약관 개인정보처리방침 책임의 한계와 법적고지 회원정보 고객센터</div>
      </SignUpContainer>
    </SignUpWrap>
  );
};

export default SignUpPage;
