import React, { useRef, useState } from 'react';
import {
  SignInLoginItemHeader,
  SignInLoginItemInput,
  SignInLoginItemWrapper,
} from './SignIn.style';
import LockIcon from '../../assets/icon/LockIcon';
import { SignInItemProps } from '../../pages/SignInPage';

export const SignInLoginPassword: React.FC<SignInItemProps> = ({ signInInfo, setSignInInfo }) => {
  const [isFocus, setIsFocus] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <SignInLoginItemWrapper isFocused={isFocus} onClick={() => passwordRef.current?.focus()}>
      <LockIcon width={'20px'} height={'20px'} color={isFocus ? 'black' : 'grey'} />
      <SignInLoginItemHeader isFocus={isFocus}>비밀번호</SignInLoginItemHeader>
      <SignInLoginItemInput
        type={'password'}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e) => {
          setSignInInfo({ ...signInInfo, webPw: e.target.value });
        }}
        ref={passwordRef}
      />
    </SignInLoginItemWrapper>
  );
};
