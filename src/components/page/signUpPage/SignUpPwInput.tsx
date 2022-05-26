import React, { useState } from 'react';
import {
  SignUpItemInput,
  SignUpItemInputWrapper,
  SignUpItemLabel,
  SignUpItemMessage,
  SignUpItemWrapper,
} from '../../../pages/SignUpPage.style';
import LockIcon from '../../../assets/icon/LockIcon';
import { SignUpFormProps } from '../../../pages/SignUpPage';

export const SignUpPwInput: React.FC<{ signUpFormProps: SignUpFormProps }> = React.memo(
  ({ signUpFormProps: { signUpInfo, validCheck, setSignUpInfo, setValidCheck } }) => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [message, setMessage] = useState('');
    const [isValidate, setIsValidate] = useState<boolean | null>(null);

    const [messageC, setMessageC] = useState('');
    const [isValidateC, setIsValidateC] = useState<boolean | null>(null);

    const checkPassword = () => {
      if (password === passwordConfirm) {
        console.log('비밀번호 일치');
        setIsValidate(true);
        setIsValidateC(true);
        setMessage('비밀번호가 일치합니다.');
        setMessageC('비밀번호가 일치합니다.');
        setSignUpInfo({ ...signUpInfo, webPw: password });
        setValidCheck({ ...validCheck, webPw: true });
        return true;
      } else {
        setMessage('비밀번호가 일치합니다.');
        setValidCheck({ ...validCheck, webPw: false });
        return false;
      }
    };

    //TODO: 유효성 검사 추가
    const onBlur = (type: 'password' | 'passwordConfirm') => {
      console.log(`${type} blur`);
      if (!checkPassword()) {
        switch (type) {
          case 'password':
            console.log('password case');
            if (password === '') {
              setMessage('필수 정보입니다.');
              setIsValidate(false);
            } else if (/[a-z|A-Z|0-9]/.test(password)) {
              setMessage('8~16자 영문 대 소문자, 숫자를 사용하세요.');
              setIsValidate(false);
            } else {
              setMessage('');
              setIsValidate(true);
            }
            break;
          case 'passwordConfirm':
            console.log('passwordConfirm case');
            if (passwordConfirm === '') {
              setMessageC('필수 정보입니다.');
              setIsValidateC(false);
            } else if (password !== passwordConfirm) {
              setMessageC('비밀번호가 일치하지 않습니다.');
              setIsValidateC(false);
            } else {
              setMessageC('');
              setIsValidateC(true);
            }
            break;
        }
      }
    };

    return (
      <>
        <SignUpItemWrapper>
          <SignUpItemLabel>비밀번호</SignUpItemLabel>
          <SignUpItemInputWrapper isFocus={false}>
            <SignUpItemInput
              onBlur={() => onBlur('password')}
              onChange={(e) => setPassword(e.target.value)}
              type={'password'}
            />
            <LockIcon
              width={'30px'}
              height={'30px'}
              color={isValidate === null ? 'grey' : isValidate ? 'green' : 'red'}
            />
          </SignUpItemInputWrapper>
          <SignUpItemMessage style={{ color: isValidate ? 'green' : 'red' }}>
            <span>{message}</span>
          </SignUpItemMessage>
        </SignUpItemWrapper>
        <SignUpItemWrapper>
          <SignUpItemLabel>비밃번호 확인</SignUpItemLabel>
          <SignUpItemInputWrapper isFocus={false}>
            <SignUpItemInput
              onBlur={() => onBlur('passwordConfirm')}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type={'password'}
            />
            <LockIcon
              width={'30px'}
              height={'30px'}
              color={isValidate === null ? 'grey' : isValidateC ? 'green' : 'red'}
            />
          </SignUpItemInputWrapper>
          <SignUpItemMessage style={{ color: isValidateC ? 'green' : 'red' }}>
            <span>{messageC}</span>
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
