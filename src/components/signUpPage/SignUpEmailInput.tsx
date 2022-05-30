import React, { useRef, useState } from 'react';
import {
  SignUpItemInput,
  SignUpItemLabel,
  SignUpItemMessage,
  SignUpItemTextInputWrapper,
  SignUpItemWrapper,
} from './SignUp.style';
import { SignUpFormProps } from '../../pages/SignUpPage';

// TODO: 미완성
export const SignUpEmailInput: React.FC<{ signUpFormProps: SignUpFormProps }> = ({
  signUpFormProps: { signUpInfo, validCheck, setSignUpInfo, setValidCheck },
}) => {
  const [email, setEmail] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const onBlur = () => {
    let messageTemp = '';
    let isValidTemp = false;
    if (email === '') {
      messageTemp = '필수 정보입니다.';
    } else if (
      !/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
        email
      )
    ) {
      messageTemp = '이메일 형식에 맞지않습니다.';
    } else {
      isValidTemp = true;
      messageTemp = '올바른 이메일 형식입니다.';
    }
    setMessage(messageTemp);
    setIsValid(isValidTemp);
    setSignUpInfo({ ...signUpInfo, email: isValidTemp ? email : '' });
    setValidCheck({ ...validCheck, email: isValidTemp });
  };

  return (
    <SignUpItemWrapper onClick={() => emailRef.current?.focus()}>
      <SignUpItemLabel>이메일</SignUpItemLabel>
      <SignUpItemTextInputWrapper isFocus={false}>
        <SignUpItemInput
          onBlur={onBlur}
          onChange={(e) => setEmail(e.target.value)}
          type={'text'}
          ref={emailRef}
        />
      </SignUpItemTextInputWrapper>
      <SignUpItemMessage style={{ color: isValid ? 'green' : 'red' }}>
        <span>{isValid !== null && message}</span>
      </SignUpItemMessage>
    </SignUpItemWrapper>
  );
};
