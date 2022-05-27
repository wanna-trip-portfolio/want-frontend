import React, {useRef, useState} from 'react';
import {
    SignUpItemInput,
    SignUpItemLabel,
    SignUpItemMessage,
    SignUpItemTextInputWrapper,
    SignUpItemWrapper,
} from './SignUp.style';
import {SignUpFormProps} from '../../pages/SignUpPage';

// TODO: 미완성
export const SignUpPhoneNumberInput: React.FC<{ signUpFormProps: SignUpFormProps }> = React.memo(
  ({ signUpFormProps: { signUpInfo, validCheck, setSignUpInfo, setValidCheck } }) => {
    const [name, setName] = useState('');
    const nameRef = useRef<HTMLInputElement>(null);

    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const onBlur = () => {
      let messageTemp = '';
      let isValidTemp = false;
      if (name === '') {
        messageTemp = '필수 정보입니다.';
      } else if (!/[a-z|A-Z|0-9|가-힣]/.test(name) || name.length < 2 || name.length > 6) {
        messageTemp = '2-5자의 한글만 사용 가능합니다.';
      } else {
        isValidTemp = true;
        messageTemp = '멋진 이름입니다';
      }
      setMessage(messageTemp);
      setIsValid(isValidTemp);
      setSignUpInfo({ ...signUpInfo, name: isValidTemp ? name : '' });
      setValidCheck({ ...validCheck, name: isValidTemp });
    };

    return (
      <SignUpItemWrapper onClick={() => nameRef.current?.focus()}>
        <SignUpItemLabel>이름</SignUpItemLabel>
        <SignUpItemTextInputWrapper isFocus={false}>
          <SignUpItemInput
            onBlur={onBlur}
            onChange={(e) => setName(e.target.value)}
            type={'text'}
            ref={nameRef}
          />
        </SignUpItemTextInputWrapper>
        <SignUpItemMessage style={{ color: isValid ? 'green' : 'red' }}>
          <span>{isValid !== null && message}</span>
        </SignUpItemMessage>
      </SignUpItemWrapper>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.signUpFormProps.signUpInfo.phoneNumber ===
      nextProps.signUpFormProps.signUpInfo.phoneNumber
    );
  }
);
