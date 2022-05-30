import React, { useRef, useState } from 'react';
import {
  SignInLoginItemHeader,
  SignInLoginItemInput,
  SignInLoginItemWrapper,
} from './SignIn.style';
import { PeopleIcon } from '../../assets/icon/PeopleIcon';
import { SignInItemProps } from '../../pages/SignInPage';

export const SignInLoginId: React.FC<SignInItemProps> = ({ signInInfo, setSignInInfo }) => {
  const [isFocus, setIsFocus] = useState(false);
  const idRef = useRef<HTMLInputElement>(null);

  return (
    <SignInLoginItemWrapper isFocused={isFocus} onClick={() => idRef.current?.focus()}>
      <PeopleIcon width={'20px'} height={'20px'} color={isFocus ? 'black' : 'grey'} />
      <SignInLoginItemHeader isFocus={isFocus}>아이디</SignInLoginItemHeader>
      <SignInLoginItemInput
        type={'text'}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e) => {
          setSignInInfo({ ...signInInfo, webId: e.target.value });
        }}
        ref={idRef}
      />
    </SignInLoginItemWrapper>
  );
};
