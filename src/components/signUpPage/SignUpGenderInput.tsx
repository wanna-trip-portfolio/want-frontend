import React, {useState} from 'react';
import {
    SignUpItemBirthInputWrapper,
    SignUpItemGenderSelect,
    SignUpItemLabel,
    SignUpItemMessage,
    SignUpItemWrapper,
} from './SignUp.style';
import {SignUpFormProps} from '../../pages/SignUpPage';

// TODO: 미완성
export const SignUpGenderInput: React.FC<{ signUpFormProps: SignUpFormProps }> = React.memo(
  ({ signUpFormProps: { signUpInfo, validCheck, setSignUpInfo, setValidCheck } }) => {
    const [birth, setBirth] = useState<string[]>(['', '', '']);

    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState<boolean | null>(null);

    return (
      <SignUpItemWrapper>
        <SignUpItemLabel>성별</SignUpItemLabel>
        <SignUpItemBirthInputWrapper>
          <SignUpItemGenderSelect>
            <option value={''}>성별</option>
            <option value={'male'}>남자</option>
            <option value={'female'}>여자</option>
          </SignUpItemGenderSelect>
        </SignUpItemBirthInputWrapper>
        <SignUpItemMessage style={{ color: isValid ? 'green' : 'red' }}>
          <span>{isValid !== null && message}</span>
        </SignUpItemMessage>
      </SignUpItemWrapper>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.signUpFormProps.signUpInfo.gender === nextProps.signUpFormProps.signUpInfo.gender
    );
  }
);
