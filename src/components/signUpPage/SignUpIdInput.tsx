import React, { useRef, useState } from 'react';
import {
  SignUpItemInput,
  SignUpItemLabel,
  SignUpItemMessage,
  SignUpItemTextInputWrapper,
  SignUpItemWrapper,
} from './SignUp.style';
import { SignUpFormProps } from '../../pages/SignUpPage';

export const SignUpIdInput: React.FC<{ signUpFormProps: SignUpFormProps }> = ({
  signUpFormProps: { signUpInfo, validCheck, setSignUpInfo, setValidCheck },
}) => {
  const [webId, setWebId] = useState('');
  const webIdRef = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const onBlur = () => {
    let messageTemp = '';
    let isValidTemp = false;
    if (webId === '') {
      messageTemp = '필수 정보입니다.';
    } else if (false) {
      // TODO: 아이디 체크 API 추가
      messageTemp = '이미 사용중이거나 탈퇴한 아이디입니다.';
    } else if (!/[a-z|A-Z|0-9]/.test(webId) || webId.length < 6 || webId.length > 20) {
      messageTemp = '6~20자의 영문 소문자, 숫자만 사용 가능합니다.';
    } else {
      isValidTemp = true;
      messageTemp = '멋진 아이디입니다';
    }

    setMessage(messageTemp);
    setIsValid(isValidTemp);
    setSignUpInfo({ ...signUpInfo, webId: isValidTemp ? webId : '' });
    setValidCheck({ ...validCheck, webId: isValidTemp });
  };

  return (
    <SignUpItemWrapper onClick={() => webIdRef.current?.focus()}>
      <SignUpItemLabel>아이디</SignUpItemLabel>
      <SignUpItemTextInputWrapper isFocus={false}>
        <SignUpItemInput
          onBlur={onBlur}
          onChange={(e) => setWebId(e.target.value)}
          type={'text'}
          ref={webIdRef}
        />
      </SignUpItemTextInputWrapper>
      <SignUpItemMessage style={{ color: isValid ? 'green' : 'red' }}>
        <span>{isValid !== null && message}</span>
      </SignUpItemMessage>
    </SignUpItemWrapper>
  );
};
