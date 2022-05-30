import React, { useRef, useState } from 'react';
import {
  SignUpItemInput,
  SignUpItemLabel,
  SignUpItemMessage,
  SignUpItemTextInputWrapper,
  SignUpItemWrapper,
} from './SignUp.style';
import LockIcon from '../../assets/icon/LockIcon';
import { SignUpFormProps } from '../../pages/SignUpPage';

export const SignUpPwInput: React.FC<{ signUpFormProps: SignUpFormProps }> = React.memo(
  ({ signUpFormProps: { signUpInfo, validCheck, setSignUpInfo, setValidCheck } }) => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);

    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const [messageConfirm, setMessageConfirm] = useState('');
    const [isValidConfirm, setIsValidConfirm] = useState<boolean | null>(null);

    const checkPassword = (type: 'password' | 'passwordConfirm') => {
      switch (type) {
        case 'password':
          let messageTemp = '';
          let isValidTemp: boolean | null = false;
          if (password === '') {
            messageTemp = '필수 정보입니다.';
          } else if (
            !/[a-z|A-Z|0-9]/.test(password) ||
            password.length < 8 ||
            password.length > 20
          ) {
            messageTemp = '8~16자 영문 대 소문자, 숫자를 사용하세요.';
          } else {
            isValidTemp = null;
          }
          setMessage(messageTemp);
          setIsValid(isValidTemp);
          if (isValidConfirm !== null) checkPassword('passwordConfirm');
          break;
        case 'passwordConfirm':
          let messageConfirmTemp = '';
          const isValidConfirmTemp = false;
          if (passwordConfirm === '') {
            messageConfirmTemp = '필수 정보입니다.';
          } else if (
            !/[a-z|A-Z|0-9]/.test(passwordConfirm) ||
            password.length < 8 ||
            password.length > 20
          ) {
            messageConfirmTemp = '8~20자의 영문 소문자, 숫자만 사용 가능합니다.';
          } else if (password !== passwordConfirm) {
            messageConfirmTemp = '비밀번호가 일치하지 않습니다.';
          }
          setMessageConfirm(messageConfirmTemp);
          setIsValidConfirm(isValidConfirmTemp);
          break;
      }
    };

    const onBlur = (type: 'password' | 'passwordConfirm') => {
      if (password === passwordConfirm && password.length >= 8 && password.length <= 20) {
        setIsValid(null);
        setIsValidConfirm(true);
        setMessageConfirm('올바른 비밀번호입니다.');
        setSignUpInfo({ ...signUpInfo, webPw: password });
        setValidCheck({ ...validCheck, webPw: true });
      } else {
        checkPassword(type);
        setSignUpInfo({ ...signUpInfo, webPw: '' });
        setValidCheck({ ...validCheck, webPw: false });
      }
    };

    return (
      <>
        <SignUpItemWrapper onClick={() => passwordRef.current?.focus()}>
          <SignUpItemLabel>비밀번호</SignUpItemLabel>
          <SignUpItemTextInputWrapper isFocus={false}>
            <SignUpItemInput
              onBlur={() => onBlur('password')}
              onChange={(e) => setPassword(e.target.value)}
              type={'password'}
              ref={passwordRef}
            />
            <LockIcon
              width={'30px'}
              height={'30px'}
              color={isValid === null ? 'grey' : isValid ? 'green' : 'red'}
            />
          </SignUpItemTextInputWrapper>
          <SignUpItemMessage style={{ color: isValid ? 'green' : 'red' }}>
            <span>{message}</span>
          </SignUpItemMessage>
        </SignUpItemWrapper>
        <SignUpItemWrapper onClick={() => passwordConfirmRef.current?.focus()}>
          <SignUpItemLabel>비밀번호 확인</SignUpItemLabel>
          <SignUpItemTextInputWrapper isFocus={false}>
            <SignUpItemInput
              onBlur={() => onBlur('passwordConfirm')}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type={'password'}
              ref={passwordConfirmRef}
            />
            <LockIcon
              width={'30px'}
              height={'30px'}
              color={isValidConfirm === null ? 'grey' : isValidConfirm ? 'green' : 'red'}
            />
          </SignUpItemTextInputWrapper>
          <SignUpItemMessage style={{ color: isValidConfirm ? 'green' : 'red' }}>
            <span>{messageConfirm}</span>
          </SignUpItemMessage>
        </SignUpItemWrapper>
      </>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.signUpFormProps.signUpInfo.webPw === nextProps.signUpFormProps.signUpInfo.webPw
    );
  }
);
