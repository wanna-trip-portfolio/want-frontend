import styled from 'styled-components';

export const SignInWrap = styled.div`
  width: 100%;
  background-color: #f5f6f7;
`;

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SignUpItemWrapper = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
`;

export const SignUpItemLabel = styled.div`
  width: 100%;
  margin-bottom: 6px;

  font-size: 14px;
  font-weight: 700;
`;

export const SignUpItemInput = styled.input`
  width: 100%;
  height: 31px;

  padding: 10px 14px;
  border: 1px solid #dadada;

  :focus {
    outline: none;
  }

  font-size: 15px;
`;

export const SignUpItemMessage = styled.div`
  width: 100%;
  height: 14px;

  margin-top: 5px;

  font-size: 12px;
`;
