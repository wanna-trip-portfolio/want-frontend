import React, { useState } from 'react';
import {
  SignUpItemInput,
  SignUpItemInputWrapper,
  SignUpItemLabel,
  SignUpItemMessage,
  SignUpItemWrapper,
} from '../../../pages/SignUpPage.style';
import { SignUpFormProps } from '../../../pages/SignUpPage';

export const SignUpIdInput: React.FC<{ signUpFormProps: SignUpFormProps }> = React.memo(
  ({ signUpFormProps: { signUpInfo, validCheck, setSignUpInfo, setValidCheck } }) => {
    const [webId, setWebId] = useState('');

    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState<boolean | null>(null);

    //TODO: 유효성 검사 추가
    const onBlur = () => {
      let messageTemp = '';
      let isValidTemp = false;
      if (webId === '') {
        messageTemp = '필수 정보입니다.';
        // TODO: 아이디 체크 API 추가
      } else if (false) {
        messageTemp = '이미 사용중이거나 탈퇴한 아이디입니다.';
      } else if (!/[a-z|A-Z|0-9]/.test(webId) || webId.length < 8 || webId.length > 20) {
        messageTemp = '8~20자의 영문 소문자, 숫자만 사용 가능합니다.';
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
      <SignUpItemWrapper>
        <SignUpItemLabel>아이디</SignUpItemLabel>
        <SignUpItemInputWrapper isFocus={false}>
          <SignUpItemInput
            onBlur={onBlur}
            onChange={(e) => setWebId(e.target.value)}
            type={'text'}
          />
        </SignUpItemInputWrapper>
        <SignUpItemMessage style={{ color: isValid ? 'green' : 'red' }}>
          <span>{isValid !== null && message}</span>
        </SignUpItemMessage>
      </SignUpItemWrapper>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.signUpFormProps.signUpInfo.webId === nextProps.signUpFormProps.signUpInfo.webId
    );
  }
);
