import React from 'react';
import { SignInFooterContainer, SignInFooterItem } from './SignIn.style';
import { useNavigate } from 'react-router-dom';

export const SignInFooter: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SignInFooterContainer>
      <SignInFooterItem>비밀번호 찾기</SignInFooterItem>
      <div>|</div>
      <SignInFooterItem>아이디 찾기</SignInFooterItem>
      <div>|</div>
      <SignInFooterItem onClick={() => navigate('/signup')}>회원가입</SignInFooterItem>
    </SignInFooterContainer>
  );
};
