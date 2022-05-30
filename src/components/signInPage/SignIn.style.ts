import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;
`;

export const SignInHeader = styled.div`
  color: #02c75a;
  font-family: 'NanumPenScript';
  font-size: 100px;
`;

export const SignInLoginContainer = styled.div`
  width: 460px;
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 20px;

  border: 1px solid #c6c6c6;
  border-radius: 12px;

  > div:nth-of-type(1) {
    border-radius: 6px 6px 0 0;
  }
  > div:nth-of-type(2) {
    border-radius: 0 0 6px 6px;
    margin-bottom: 30px;
  }
`;

export const SignInLoginItemWrapper = styled.div<{ isFocused: boolean }>`
  border: 1px solid ${(props) => (props.isFocused ? '#03c75a' : '#dadada')};
  width: 400px;
  height: 48px;

  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SignInLoginItemHeader = styled.div<{ isFocus: boolean }>`
  width: 60px;
  color: ${(props) => (props.isFocus ? 'black' : 'grey')};
`;

export const SignInLoginItemInput = styled.input`
  width: 280px;
  font-size: 15px;
  border: 0;

  :focus {
    outline: none;
  }
`;

export const SignInSendButton = styled.div`
  width: 400px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  background-color: #02c75a;

  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #fff;

  :hover {
    cursor: pointer;
  }
`;

export const SignInFooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SignInFooterItem = styled.div`
  width: 100px;
  text-align: center;
  margin: 0 15px;
`;
