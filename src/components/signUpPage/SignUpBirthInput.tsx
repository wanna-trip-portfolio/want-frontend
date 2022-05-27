import React, { useState } from 'react';
import {
  SignUpItemBirthInputWrapper,
  SignUpItemBirthSelect,
  SignUpItemLabel,
  SignUpItemMessage,
  SignUpItemWrapper,
} from './SignUp.style';
import { SignUpFormProps } from '../../pages/SignUpPage';

const createYear = () => {
  const year: number[] = [];
  for (let i = 1950; i <= 2000; i++) year.push(i);
  return year;
};

const createMonth = () => {
  const month: number[] = [];
  for (let i = 1; i <= 12; i++) month.push(i);
  return month;
};

const createDay = () => {
  const day: number[] = [];
  for (let i = 1; i <= 31; i++) day.push(i);
  return day;
};

export const SignUpBirthInput: React.FC<{ signUpFormProps: SignUpFormProps }> = React.memo(
  ({ signUpFormProps: { signUpInfo, validCheck, setSignUpInfo, setValidCheck } }) => {
    const [birth, setBirth] = useState<string[]>(['', '', '']);

    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState<boolean | null>(null);

    return (
      <SignUpItemWrapper>
        <SignUpItemLabel>생년월일</SignUpItemLabel>
        <SignUpItemBirthInputWrapper>
          <SignUpItemBirthSelect>
            <option selected value={''}>
              연도
            </option>
            {createYear().map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </SignUpItemBirthSelect>
          <SignUpItemBirthSelect>
            <option selected value={''}>
              월
            </option>
            {createMonth().map((month) => {
              return (
                <option key={month} value={month}>
                  {month}
                </option>
              );
            })}
          </SignUpItemBirthSelect>
          <SignUpItemBirthSelect>
            <option selected value={''}>
              일
            </option>
            {createDay().map((day) => {
              return (
                <option key={day} value={day}>
                  {day}
                </option>
              );
            })}
          </SignUpItemBirthSelect>
        </SignUpItemBirthInputWrapper>
        <SignUpItemMessage style={{ color: isValid ? 'green' : 'red' }}>
          <span>{isValid !== null && message}</span>
        </SignUpItemMessage>
      </SignUpItemWrapper>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.signUpFormProps.signUpInfo.birth === nextProps.signUpFormProps.signUpInfo.birth
    );
  }
);
