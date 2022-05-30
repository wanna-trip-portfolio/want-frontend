import React, { ChangeEvent, useState } from 'react';
import {
  SignUpItemBirthInputWrapper,
  SignUpItemGenderSelect,
  SignUpItemLabel,
  SignUpItemMessage,
  SignUpItemWrapper,
} from './SignUp.style';
import { SignUpFormProps } from '../../pages/SignUpPage';

// TODO: 미완성
export const SignUpGenderInput: React.FC<{ signUpFormProps: SignUpFormProps }> = ({
  signUpFormProps: { signUpInfo, validCheck, setSignUpInfo, setValidCheck },
}) => {
  const [gender, setGender] = useState<string>('');

  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const onBlur = () => {
    if (gender === '') {
      setMessage('필수 정보입니다.');
      setIsValid(false);
      setSignUpInfo({ ...signUpInfo, gender: '' });
      setValidCheck({ ...validCheck, gender: false });
    }
  };

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
    if (e.target.value === '') {
      setMessage('필수 정보입니다.');
      setIsValid(false);
      setSignUpInfo({ ...signUpInfo, gender: '' });
      setValidCheck({ ...validCheck, gender: false });
    } else {
      setIsValid(null);
      setSignUpInfo({ ...signUpInfo, gender: e.target.value });
      setValidCheck({ ...validCheck, gender: true });
    }
  };

  return (
    <SignUpItemWrapper>
      <SignUpItemLabel>성별</SignUpItemLabel>
      <SignUpItemBirthInputWrapper>
        <SignUpItemGenderSelect onBlur={onBlur} onChange={onChange}>
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
};
