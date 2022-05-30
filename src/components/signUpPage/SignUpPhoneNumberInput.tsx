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
export const SignUpPhoneNumberInput: React.FC<{ signUpFormProps: SignUpFormProps }> = ({
  signUpFormProps: { signUpInfo, validCheck, setSignUpInfo, setValidCheck },
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const onBlur = () => {
    let messageTemp = '';
    let isValidTemp = false;
    if (phoneNumber === '') {
      messageTemp = '필수 정보입니다.';
    } else if (!/^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/.test(phoneNumber)) {
      messageTemp = '올바른 번호가 아닙니다.';
    } else {
      isValidTemp = true;
      messageTemp = '올바른 휴대전화 번호입니다.';
    }
    setMessage(messageTemp);
    setIsValid(isValidTemp);
    setSignUpInfo({ ...signUpInfo, phoneNumber: isValidTemp ? phoneNumber : '' });
    setValidCheck({ ...validCheck, phoneNumber: isValidTemp });
  };

  return (
    <SignUpItemWrapper onClick={() => phoneNumberRef.current?.focus()}>
      <SignUpItemLabel>휴대전화 번호</SignUpItemLabel>
      <SignUpItemTextInputWrapper isFocus={false}>
        <SignUpItemInput
          onBlur={onBlur}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type={'text'}
          ref={phoneNumberRef}
        />
      </SignUpItemTextInputWrapper>
      <SignUpItemMessage style={{ color: isValid ? 'green' : 'red' }}>
        <span>{isValid !== null && message}</span>
      </SignUpItemMessage>
    </SignUpItemWrapper>
  );
};
