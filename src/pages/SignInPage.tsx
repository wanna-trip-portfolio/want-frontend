import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { WantLogo } from '../components/CommonCompoent';
import {
  SignInWrap,
  SignUpContainer,
  SignUpForm,
  SignUpItemInput,
  SignUpItemLabel,
  SignUpItemMessage,
  SignUpItemWrapper,
} from './SignInPage.style';

const SignInIdInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isValidate, setIsValidate] = useState<boolean | null>(null);

  let id = '';

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    id = e.target.value;
  };

  //TODO: 유효성 검사 추가
  const onBlur = () => {
    if (id === '') {
      setMessage('필수 정보입니다.');
      setIsValidate(false);
    } else if (false) {
      setMessage('이미 사용중이거나 탈퇴한 아이디입니다.');
      setIsValidate(false);
    } else if (false) {
      setMessage('8~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
      setIsValidate(false);
    } else {
      setMessage('멋진 아이디네요!');
      setIsValidate(true);
    }
    console.log('blur');
  };

  return (
    <SignUpItemWrapper>
      <SignUpItemLabel>아이디</SignUpItemLabel>
      <SignUpItemInput onBlur={onBlur} onChange={onChange} type={'text'} />
      <SignUpItemMessage style={{ color: isValidate ? 'green' : 'red' }}>
        <span>{message}</span>
      </SignUpItemMessage>
    </SignUpItemWrapper>
  );
};

const SignInPasswordInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isValidate, setIsValidate] = useState<boolean | null>(null);

  const [messageC, setMessageC] = useState('');
  const [isValidateC, setIsValidateC] = useState<boolean | null>(null);

  let password = '';
  let passwordC = '';

  //TODO: 유효성 검사 추가
  const onBlur = () => {
    if (password === '') {
      setMessage('필수 정보입니다.');
      setIsValidate(false);
    } else if (false) {
      setMessage('8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
      setIsValidate(false);
    } else {
      setMessage('멋진 아이디네요!');
      setIsValidate(true);
    }
    console.log('blur');
  };

  const onBlurC = () => {
    if (password === '') {
      setMessage('필수 정보입니다.');
      setIsValidate(false);
    } else if (false) {
      setMessage('비밀번호가 일치하지 않습니다.');
      setIsValidate(false);
    } else if (false) {
      setMessage('8~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
      setIsValidate(false);
    } else {
      setMessage('멋진 아이디네요!');
      setIsValidate(true);
    }
    console.log('blur');
  };

  return (
    <>
      <SignUpItemWrapper>
        <SignUpItemLabel>비밀번호</SignUpItemLabel>
        <SignUpItemInput
          onBlur={onBlur}
          onChange={(e) => (password = e.target.value)}
          type={'password'}
        />
        <SignUpItemMessage style={{ color: isValidate ? 'green' : 'red' }}>
          <span>{message}</span>
        </SignUpItemMessage>
      </SignUpItemWrapper>
      <SignUpItemWrapper>
        <SignUpItemLabel>비밃번호 확인</SignUpItemLabel>
        <SignUpItemInput
          onBlur={onBlurC}
          onChange={(e) => (passwordC = e.target.value)}
          type={'password'}
        />

        <SignUpItemMessage style={{ color: isValidate ? 'green' : 'red' }}>
          <span>{message}</span>
        </SignUpItemMessage>
      </SignUpItemWrapper>
    </>
  );
};

const SignInPage: React.FC = () => {
  return (
    <SignInWrap>
      <SignUpContainer>
        <Link to={'/home'} style={{ textDecoration: 'none' }}>
          <WantLogo>Want</WantLogo>
        </Link>
        <SignUpForm>
          <SignInIdInput />
          <SignInPasswordInput />
        </SignUpForm>
      </SignUpContainer>
    </SignInWrap>
  );
};

export default SignInPage;
