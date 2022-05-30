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

const createDay = (year: number, month: number) => {
  const day: number[] = [];

  let endDay = 31;

  if (month in [4, 6, 9, 11]) {
    endDay = 30;
  } else if (month === 2) {
    endDay = year % 4 === 0 ? 29 : 28;
  }

  for (let i = 1; i <= endDay; i++) day.push(i);
  return day;
};

interface BirthState {
  year: number;
  month: number;
  day: number;
}

const BirthToString = (birth: BirthState): string => {
  return birth.year + birth.month < 10
    ? '0' + birth.month
    : birth.month + birth.day < 10
    ? '0' + birth.day
    : birth.day + '';
};

export const SignUpBirthInput: React.FC<{ signUpFormProps: SignUpFormProps }> = ({
  signUpFormProps: { signUpInfo, validCheck, setSignUpInfo, setValidCheck },
}) => {
  const [birth, setBirth] = useState<BirthState>({ year: 0, month: 0, day: 0 });

  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const onMouseOver = () => {
    if (birth.year !== 0 && birth.day === 0) {
      setSignUpInfo({ ...signUpInfo, birth: '' });
      setValidCheck({ ...validCheck, birth: false });
      setIsValid(false);
      setMessage('필수 정보입니다.');
    }
  };

  const onSelect = (
    type: 'year' | 'month' | 'day'
  ): ((e: React.ChangeEvent<HTMLSelectElement>) => void) => {
    switch (type) {
      case 'year':
        return (e) => {
          setSignUpInfo({ ...signUpInfo, birth: '' });
          setValidCheck({ ...validCheck, birth: false });
          setBirth({ year: +e.target.value, month: 0, day: 0 });
        };
      case 'month':
        return (e) => {
          setSignUpInfo({ ...signUpInfo, birth: '' });
          setValidCheck({ ...validCheck, birth: false });
          setBirth({ ...birth, month: +e.target.value, day: 0 });
        };
      case 'day':
        return (e) => {
          setSignUpInfo({ ...signUpInfo, birth: BirthToString(birth) });
          setValidCheck({ ...validCheck, birth: true });
          setIsValid(null);
          setBirth({ ...birth, day: +e.target.value });
        };
    }
  };

  return (
    <SignUpItemWrapper onMouseOver={onMouseOver}>
      <SignUpItemLabel>생년월일</SignUpItemLabel>
      <SignUpItemBirthInputWrapper>
        <SignUpItemBirthSelect onChange={onSelect('year')}>
          <option value={''}>연도</option>
          {createYear().map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </SignUpItemBirthSelect>
        <SignUpItemBirthSelect onChange={onSelect('month')} value={birth.month}>
          <option value={''}>월</option>
          {birth.year !== 0 &&
            createMonth().map((month) => {
              return (
                <option key={month} value={month}>
                  {month}
                </option>
              );
            })}
        </SignUpItemBirthSelect>
        <SignUpItemBirthSelect onChange={onSelect('day')} value={birth.day}>
          <option value={''}>일</option>
          {birth.month !== 0 &&
            createDay(birth.year, birth.month).map((day) => {
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
};
