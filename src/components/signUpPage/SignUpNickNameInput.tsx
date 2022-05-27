import React, { useRef, useState } from 'react';
import {
  SignUpItemInput,
  SignUpItemLabel,
  SignUpItemMessage,
  SignUpItemTextInputWrapper,
  SignUpItemWrapper,
} from './SignUp.style';
import { SignUpFormProps } from '../../pages/SignUpPage';

export const SignUpNickNameInput: React.FC<{ signUpFormProps: SignUpFormProps }> = React.memo(
  ({ signUpFormProps: { signUpInfo, validCheck, setSignUpInfo, setValidCheck } }) => {
    const [nickName, setNickName] = useState('');
    const nickNameRef = useRef<HTMLInputElement>(null);

    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const onBlur = () => {
      let messageTemp = '';
      let isValidTemp = false;
      if (nickName === '') {
        messageTemp = '필수 정보입니다.';
      } else if (false) {
        // TODO: 닉네임 체크 API 추가
        messageTemp = '이미 사용중인 닉네임입니다.';
      } else if (
        !/[a-z|A-Z|0-9|가-힣]/.test(nickName) ||
        nickName.length < 6 ||
        nickName.length > 20
      ) {
        messageTemp = '6~20자의 영문 소문자, 한글, 숫자만 사용 가능합니다.';
      } else {
        isValidTemp = true;
        messageTemp = '멋진 닉네임입니다';
      }

      setMessage(messageTemp);
      setIsValid(isValidTemp);
      setSignUpInfo({ ...signUpInfo, nickName: isValidTemp ? nickName : '' });
      setValidCheck({ ...validCheck, nickName: isValidTemp });
    };

    return (
      <SignUpItemWrapper onClick={() => nickNameRef.current?.focus()}>
        <SignUpItemLabel>닉네임</SignUpItemLabel>
        <SignUpItemTextInputWrapper isFocus={false}>
          <SignUpItemInput
            onBlur={onBlur}
            onChange={(e) => setNickName(e.target.value)}
            type={'text'}
            ref={nickNameRef}
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
      prevProps.signUpFormProps.signUpInfo.nickName ===
      nextProps.signUpFormProps.signUpInfo.nickName
    );
  }
);
